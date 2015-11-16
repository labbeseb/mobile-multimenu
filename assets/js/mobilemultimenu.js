(function($){

    var MenuMulti= function (btnMenu, transDelay){

        var _ = this;
        _.btnMenu = btnMenu;
        _.allMx3btnMenu = $('.mx3-btn');
        _.transDelay = transDelay;
        _.dataCtnrMenu = _.btnMenu.data('mx3-block');
        _.allCtnrMenu = $('.mx3-container');
        _.ctnrMenu = $('.mx3-container#'+ _.dataCtnrMenu);
        _.itemClick = _.ctnrMenu.find('.lvl1 > li > a');
        _.liCtnr = _.ctnrMenu.find('.lvl1 > li');
        _.classSubMenus = _.ctnrMenu.find('ul.lvl2');
        _.classActiveAnimHide = 'hide-animation';
        _.classZeroHeight = 'red-height';
        _.classSelected = 'selected';
        _.classLinkOnly = 'link-only';
        _.classAnimDuring = 'anim-during';
        _.nbItems = _.liCtnr.length;
        _.heightItems = (100 / _.nbItems) + '%';

        _.constructor = function () {
            _.setLiHeight(_.liCtnr);
            _.toggleMenu(_.btnMenu);
            _.collapseMenu();
            _.addLinkOnly();
        };

        _.initMenu = function() {
            _.rmSelected(_.liCtnr);
            _.setLiHeight(_.liCtnr);
            _.rmActiveAnimHide(_.liCtnr);
            _.liCtnr.find(_.classSubMenus).hide();

        };
        _.setStartTop = function(top){
            _.ctnrMenu.css('top', top);
        };
        _.setLiHeight = function(elt){
            elt.css('height', _.heightItems);
        };
        _.setLiHeightZero = function(elt) {
            elt.css('height',0);
        };
        _.hideMenu = function() {
            _.btnMenu.removeClass('active');
            _.allCtnrMenu.hide();
            _.initMenu();
        };
        _.showMenu = function() {
            _.btnMenu.addClass('active');
            _.ctnrMenu.fadeIn('fast');
            _.initMenu();
        };
        _.toggleMenu = function() {

            _.allMx3btnMenu.removeClass('active');

            btnMenu.on('click', function () {
                if (_.btnMenu.hasClass('active') && _.ctnrMenu.is(':visible')) {
                    _.hideMenu();
                } else {
                    _.showMenu();
                }
            });
        };
        _.addLinkOnly = function() {
            _.liCtnr.each(function () {
                var elt = $(this),
                    subMenuElt = elt.find(_.classSubMenus);

                if (subMenuElt.length > 0) {
                    elt.addClass(_.classLinkOnly);
                }
            });
        };
        _.addSelected = function(elt) {
            elt.addClass(_.classSelected);
        };
        _.rmSelected = function(elt) {
            elt.removeClass(_.classSelected);
        };
        _.addActiveAnimHide = function(elt) {
            elt.addClass(_.classActiveAnimHide);
        };
        _.rmActiveAnimHide = function(elt) {
            elt.removeClass(_.classActiveAnimHide);
        };
        _.addAnimDuring = function(elt) {
            elt.addClass(_.classAnimDuring);
        };
        _.rmAnimDuring = function(elt) {
            elt.removeClass(_.classAnimDuring);
        };
        _.showSubMenu = function(elt) {
            var subMenu = elt.find(_.classSubMenus);
            subMenu.stop().slideDown();
        };

        // ajoute les class d'animation
        _.goAnim = function(elt) {
            var ctnr = elt.parent('li');
            _.addSelected(ctnr);
            _.addAnimDuring(ctnr);

            window.setTimeout(function () {

                _.rmAnimDuring(ctnr);
                _.showSubMenu(ctnr);

            }, (_.transDelay * 2));
            _.liCtnr.each(function () {

                var thisLi = $(this);

                if (!thisLi.hasClass(_.classSelected)) {

                    _.addActiveAnimHide(thisLi);

                    window.setTimeout(function () {

                        _.setLiHeightZero(thisLi);

                    }, _.transDelay);
                }
            });

        };

        // déroule les sous-menu s'il y en a
        _.collapseMenu = function() {

            _.itemClick.on('click', function () {

                var thisItemClick = $(this),
                    hisContainer = thisItemClick.parent('li'),
                    hisSubMenu = hisContainer.find(_.classSubMenus);


                if (hisSubMenu.length > 0) { // si il y a un sous menu...

                    if (hisContainer.hasClass(_.classSelected) && !hisContainer.hasClass(_.classAnimDuring)) { // *** Si une cat�gorie est selectionn�e, on affiche la liste des cat�gories

                        _.initMenu();

                    } else {

                        _.goAnim(thisItemClick);

                    }

                    return false;

                }
            });
        };
    };

    $.fn.mx3=function(opt){
        var defaults = {
            "animDelay": 300,
            "startTop": 0,
            "heightActiveItem": false
        };

        var params = $.extend(defaults, opt);

        var menu = [];

        return this.each(function(i){
            var $th = $(this);

            menu[i] = new MenuMulti($th, params.animDelay);

            menu[i].constructor();
            menu[i].setStartTop(params.startTop);
        });

    };
})(jQuery);
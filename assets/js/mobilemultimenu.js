(function($)
{

    var MenuMulti= function (btnMenu, ctnrMenu, itemClick, transDelay){

        var _ = this;

        _.btnMenu = btnMenu;
        _.ctnrMenu = ctnrMenu;
        _.itemClick = itemClick;
        _.transDelay = transDelay;
        _.liCtnr = _.itemClick.parent('li');
        _.classActiveAnimHide = 'hide-animation';
        _.classZeroHeight = 'red-height';
        _.classSelected = 'selected';
        _.classLinkOnly = 'link-only';
        _.classSubMenus = 'ul.lvl2';
        _.classAnimDuring = 'anim-during';
        _.nbItems = _.liCtnr.length;
        _.heightItems = (100 / _.nbItems) + '%';

        _.constructor = function () {
            _.toggleMenu(_.btnMenu);
            _.collapseMenu();
            _.addLinkOnly();
        };

        _.initMenu = function () {
            _.rmSelected(_.liCtnr);
            _.rmActiveZeroHeight(_.liCtnr);
            _.rmActiveAnimHide(_.liCtnr);
            _.liCtnr.find(_.classSubMenus).hide();

        };
        _.hideMenu = function () {
            _.btnMenu.removeClass('active');
            _.ctnrMenu.hide();
            _.initMenu();
        };
        _.showMenu = function () {
            _.btnMenu.addClass('active');
            _.ctnrMenu.fadeIn('fast');
            _.initMenu();
        };
        _.toggleMenu = function () {
            btnMenu.on('click', function () {
                if (_.btnMenu.hasClass('active') && _.ctnrMenu.is(':visible')) {
                    _.hideMenu();
                } else {
                    _.showMenu();
                }
            });
        };
        _.addLinkOnly = function () {
            _.liCtnr.each(function () {
                var elt = jQuery(this),
                    subMenuElt = elt.find(_.classSubMenus);

                if (subMenuElt.length > 0) {
                    elt.addClass(_.classLinkOnly);
                }
            });
        };
        _.addSelected = function (elt) {
            elt.addClass(_.classSelected);
        };
        _.rmSelected = function (elt) {
            elt.removeClass(_.classSelected);
        };
        _.addActiveAnimHide = function (elt) {
            elt.addClass(_.classActiveAnimHide);
        };
        _.rmActiveAnimHide = function (elt) {
            elt.removeClass(_.classActiveAnimHide);
        };
        _.setHeightZero = function (elt) {
            elt.addClass(_.classZeroHeight);
        };
        _.addAnimDuring = function (elt) {
            elt.addClass(_.classAnimDuring);
        };
        _.rmAnimDuring = function (elt) {
            elt.removeClass(_.classAnimDuring);
        };
        _.rmActiveZeroHeight = function (elt) {
            elt.removeClass(_.classZeroHeight);
        };
        _.showSubMenu = function (elt) {
            var subMenu = elt.find(_.classSubMenus);
            subMenu.stop().slideDown();
        };

        // ajoute les class d'animation
        _.goAnim = function (elt) {
            var ctnr = elt.parent('li');

            _.addSelected(ctnr);
            _.addAnimDuring(ctnr);

            window.setTimeout(function () {

                _.rmAnimDuring(ctnr);
                _.showSubMenu(ctnr);

            }, (_.transDelay * 2));
            _.liCtnr.each(function () {

                var thisLi = jQuery(this);

                if (!thisLi.hasClass(_.classSelected)) {

                    _.addActiveAnimHide(thisLi);

                    window.setTimeout(function () {

                        _.setHeightZero(thisLi);


                    }, _.transDelay);
                }
            });

        };

        // déroule les sous-menu s'il y en a
        _.collapseMenu = function () {

            _.itemClick.on('click', function () {

                var thisItemClick = jQuery(this),
                    hisContainer = thisItemClick.parent('li'),
                    hisSubMenu = hisContainer.find(_.classSubMenus);


                if (hisSubMenu.length > 0) { // si il y a un sous menu...

                    if (hisContainer.hasClass(_.classSelected) && !hisContainer.hasClass(_.classAnimDuring)) { // *** Si une catégorie est selectionnée, on affiche la liste des catégories

                        _.initMenu();

                    } else {

                        _.goAnim(thisItemClick);

                    }

                    return false;

                }
            });
        };
    };

    $.fn.mx3=function(opt)
    {
        var defaults = {
            "transDelay": 300
        };

        var params = $.extend(defaults, opt);

        return this.each(function(){
            _ = $(this);

            var menu = new MenuMulti(_, $('.mx3-container'), $('.lvl1 > li > a'), 300 );
            menu.constructor();
        });
    };
})(jQuery);

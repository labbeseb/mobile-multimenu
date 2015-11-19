(function($){

    var MenuMulti= function (btnMenu, speed){

        var _ = this;

        // -*- Parameters
        _.btnMenu = btnMenu;
        _.speed = speed;
        _.dataCtnrMenu = _.btnMenu.data('mx3-block');

        // -*- Class names
        _.classActiveAnimHide = 'hide-animation';
        _.classAnimDuring = 'anim-during';
        _.classLinkOnly = 'link-only';
        _.classSelected = 'selected';
        _.classZeroHeight = 'red-height';

        // -*- Selectors of all menus
        _.allMx3btnMenu = $('.mx3-btn');
        _.allCtnrMenu = $('.mx3-container');
        _.allLiCtnr = _.allCtnrMenu.find('.lvl1 > li');

        // -*- Selectors of this menu
        _.ctnrMenu = $('.mx3-container#'+ _.dataCtnrMenu);
        _.mainList = _.ctnrMenu.children('ul');
        _.liCtnr = _.mainList.children('li');
        _.subMenus = _.ctnrMenu.find('ul ul');
        _.itemClick = _.liCtnr.children('a');

        // -*- Others
        _.nbItems = _.liCtnr.length;
        _.heightItems = (100 / _.nbItems) + '%';

        // -*- Methodes
        _.addActiveAnimHide = function (elt) {
            elt.addClass(_.classActiveAnimHide);

            return this;
        };
        _.addAnimDuring = function (elt) {
            elt.addClass(_.classAnimDuring);

            return this;
        };
        _.addLinkOnly = function () {
            _.liCtnr.each(function () {
                var elt = $(this),
                    subMenuElt = elt.children('ul');

                if (subMenuElt.length > 0) {
                    elt.addClass(_.classLinkOnly);
                }
            });

            return this;
        };
        _.addListLvl = function (workInLoop) {

            _.mainList.addClass('lvl1');

            _.subMenus.each(function(){
                var idLvl = $(this).parents('ul').length;
                $(this).addClass('lvl' + parseInt(idLvl+1));

                if (typeof workInLoop === 'function') {
                    workInLoop();
                }
            });

            return this;
        };
        _.addSelected = function (elt) {
            elt.addClass(_.classSelected);

            return this;
        };
        _.collapseMenu = function() {

            _.itemClick.on('click', function () {

                var thisItemClick = $(this),
                    hisContainer = thisItemClick.parent('li'),
                    hisSubMenu = hisContainer.children('ul');


                if (hisSubMenu.length > 0) { // if there is a submenu

                    if (hisContainer.hasClass(_.classSelected) && !hisContainer.hasClass(_.classAnimDuring)) { // *** Si une cat�gorie est selectionn�e, on affiche la liste des cat�gories

                        _.reInit();

                    } else {

                        _.goAnim(thisItemClick);

                    }

                    return false;

                }
            });

            return this;
        };
        _.goAnim = function(elt) {
            var ctnr = elt.parent('li');
            _.addSelected(ctnr);
            _.addAnimDuring(ctnr);

            window.setTimeout(function () {

                _.rmAnimDuring(ctnr);
                _.showSubMenu(ctnr);

            }, (_.speed * 2));
            _.liCtnr.each(function () {

                var thisLi = $(this);

                if (!thisLi.hasClass(_.classSelected)) {

                    _.addActiveAnimHide(thisLi);

                    window.setTimeout(function () {

                        _.setLiHeight(thisLi, 0);

                    }, _.speed);
                }
            });

            return this;
        };
        _.hideMenu = function () {
            _.btnMenu.removeClass('active');
            _.ctnrMenu.hide();
            _.reInit();

            return this;
        };
        _.init = function () {
            _.addListLvl(_.collapseSubMenu)
                .setLiHeight(_.liCtnr, _.heightItems)
                .toggleMenu(_.btnMenu)
                .collapseMenu()
                .addLinkOnly();

            return this;
        };
        _.reInit = function () {
            _.rmSelected(_.liCtnr);
            _.setLiHeight(_.liCtnr, _.heightItems);
            _.rmActiveAnimHide(_.liCtnr);
            _.liCtnr.children('ul').hide();

        };
        _.rmActiveAnimHide = function (elt) {
            elt.removeClass(_.classActiveAnimHide);

            return this;
        };
        _.rmAnimDuring = function (elt) {
            elt.removeClass(_.classAnimDuring);

            return this;
        };
        _.rmSelected = function (elt) {
            elt.removeClass(_.classSelected);

            return this;
        };
        _.setLiHeight = function (elt, height) {
            elt.css('height', height);

            return this;
        };
        _.setStartTop = function (top) {
            _.ctnrMenu.css('top', top);

            return this;
        };
        _.showMenu = function () {
            _.allCtnrMenu.hide();
            _.btnMenu.addClass('active');
            _.ctnrMenu.fadeIn('fast');
            _.reInit();

            return this;
        };
        _.showSubMenu = function (elt) {
            var subMenu = elt.children('ul');
            subMenu.stop().slideDown();

            return this;
        };
        _.toggleMenu = function () {

            btnMenu.on('click', function () {

                if (_.btnMenu.hasClass('active') && _.ctnrMenu.is(':visible')) {
                    _.hideMenu();
                } else {
                    _.allMx3btnMenu.removeClass('active');
                    _.showMenu();
                }
            });

            return this;
        };

        _.collapseSubMenu = function(){

        };
    };

    $.fn.mx3=function(opt){
        var defaults = {
            "animDelay": 300,
            "startTop": 0,
            "heightActiveItem": "NC"
        };

        var params = $.extend(defaults, opt);

        var menu = [];

        return this.each(function(i){
            var $th = $(this);

            menu[i] = new MenuMulti($th, params.animDelay);

            //menu[i].addListLvl();

            menu[i].init().setStartTop(params.startTop);// init menu

            menu[i].itemClick.on('click', function(){
                var eltLi = $(this).parent('li');

                if( isNaN(parseInt(params.heightActiveItem)) == false && $(this).parent('li').hasClass(menu[i].classSelected) == true ){
                    window.setTimeout(function(){
                        menu[i].setLiHeight(eltLi, params.heightActiveItem);
                    }, menu[i].speed);
                }
            });
        });
    };
})(jQuery);
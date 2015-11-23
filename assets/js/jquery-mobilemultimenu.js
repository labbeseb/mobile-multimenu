(function($){

    var MenuMulti= function (btnMenu, speed){

        var _ = this;

        // -*- Parameters
        _.btnMenu = btnMenu;
        _.speed = speed;
        _.dataCtnrMenu = _.btnMenu.data('mx3-block');

        // -*- Class names
        _.prefixClass = 'mx3-';
        _.classActiveAnimHide = _.prefixClass + 'hide-animation';
        _.classActiveLink = _.prefixClass + 'active';
        _.classAnimDuring = _.prefixClass + 'anim-during';
        _.classArrow = _.prefixClass + 'arrow';
        _.classNoLink = _.prefixClass + 'no-link';
        _.classSelected = _.prefixClass + 'selected';
        _.classZeroHeight = _.prefixClass + 'red-height';

        // -*- Selectors of all menus
        _.allMx3btnMenu = $('.' + _.prefixClass + 'btn');
        _.allCtnrMenu = $('.' + _.prefixClass + 'container');
        _.allLiCtnr = _.allCtnrMenu.find('.lvl1 > li');

        // -*- Selectors of this menu
        _.ctnrMenu = $('.mx3-container#'+ _.dataCtnrMenu);
        _.mainList = _.ctnrMenu.children('ul');
        _.liCtnr = _.mainList.children('li');
        _.subMenus = _.ctnrMenu.find('ul ul');
        _.itemClick = _.liCtnr.children('a');
        _.linksSubLvl = _.mainList.find('ul > li > a');

        // -*- Others
        _.nbItems = _.liCtnr.length;
        _.heightItems = (100 / _.nbItems) + '%';
        _.pictoArrow = '<span class="' + _.classArrow + '"></span>';

        // -*- Methodes
        _.addActiveAnimHide = function (elt) {
            elt.addClass(_.classActiveAnimHide);

            return this;
        };
        _.addAnimDuring = function (elt) {
            elt.addClass(_.classAnimDuring);

            return this;
        };
        _.addArrows = function(){
            _.linksSubLvl.each(function(){
                var $th = $(this),
                    hisParent = $th.parent('li');
                if( hisParent.hasClass(_.classNoLink) == true ){
                    $th.append(_.pictoArrow)
                        .on('click', function(){
                            $(this).toggleClass(_.classActiveLink);
                        });
                }
            });
        };
        _.addNoLink = function () {
            _.liCtnr.each(function () {
                var elt = $(this),
                    subMenuElt = elt.children('ul');

                if (subMenuElt.length > 0) {
                    elt.addClass(_.classNoLink);
                }
            });
            _.subMenus.children('li').each(function () {
                var elt = $(this),
                    subMenuElt = elt.children('ul');

                if (subMenuElt.length > 0) {
                    elt.addClass(_.classNoLink);
                }
            });

            return this;
        };
        _.addListLvl = function () {

            _.mainList.addClass('lvl1');

            _.subMenus.each(function(){
                var idLvl = $(this).parents('ul').length;

                $(this).addClass('lvl' + parseInt(idLvl+1));
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

                    if (hisContainer.hasClass(_.classSelected) && !hisContainer.hasClass(_.classAnimDuring)) { // *** Si une catégorie est selectionnée, on affiche la liste des catégories

                        _.retractAllSubMenus(hisSubMenu)
                            .reInit();

                    } else {

                        _.goAnim(thisItemClick);

                    }

                    return false;

                }
            });

            return this;
        };
        _.collapseSubMenu = function(){

            _.linksSubLvl.on('click', function(){
                var broSubMenu = $(this).siblings('ul');

                if( broSubMenu.length > 0){

                    broSubMenu.stop().slideToggle(_.speed);
                    _.retractAllSubMenus(broSubMenu);

                    broSubMenu.find('.' + _.classNoLink).removeClass(_.classActiveLink);

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


        _.backAnim = function(elt){

        };


        _.hideMenu = function () {
            _.btnMenu.removeClass('active');
            _.ctnrMenu.hide();
            _.reInit();

            return this;
        };
        _.init = function () {
            _.addListLvl()
                .setLiHeight(_.liCtnr, _.heightItems)
                .toggleMenu(_.btnMenu)
                .collapseMenu()
                .collapseSubMenu()
                .addNoLink()
                .addArrows();

            return this;
        };
        _.reInit = function () {

            _.rmSelected(_.liCtnr)
                .setLiHeight(_.liCtnr, _.heightItems)
                .rmActiveAnimHide(_.liCtnr)
                .liCtnr.children('ul')
                .hide();

        };
        _.retractAllSubMenus = function(ctnr){
            var subs = ctnr.find('ul');

            subs.stop().slideUp(_.speed)
                .siblings('a.'+ _.classActiveLink).removeClass(_.classActiveLink);

            return this;
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
        _.setLiHeightPx = function(height){
            _.heightItems = height;
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



    };

    $.fn.mx3=function(opt){
        var defaults = {
            "animDelay": 300,
            "startTop": 0,
            "heightGlobalItem": false,
            "heightActiveItem": false
        };

        var params = $.extend(defaults, opt);

        var menu = [];

        return this.each(function(i){
            var $th = $(this);

            menu[i] = new MenuMulti($th, params.animDelay);

            // Set height of each item (lvl1)
            if( isNaN(parseInt(params.heightGlobalItem)) == false ){
                menu[i].setLiHeightPx(params.heightGlobalItem);
            }

            // Init menu
            menu[i].init().setStartTop(params.startTop);

            // On click...
            menu[i].itemClick.on('click', function(){
                var eltLi = $(this).parent('li');

                // ...set Height of active item on change state
                if( isNaN(parseInt(params.heightActiveItem)) == false && $(this).parent('li').hasClass(menu[i].classSelected) == true ){
                    window.setTimeout(function(){
                        menu[i].setLiHeight(eltLi, params.heightActiveItem);
                    }, menu[i].speed);
                }
            });
        });
    };
})(jQuery);
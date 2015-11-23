<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Mx3 - Mobile Multi Menu</title>

    <link rel="stylesheet" href="/assets/css/jquery-mobilemultimenu.css" media="all">

    <style>
        .mx3-btn:before{
            content: 'Show';
            display: inline-block;
        }
        .mx3-btn.active:before{
            content: 'Hide';
            font-weight: bold;
            color: darkred;
        }

        .lvl1 > li{
            color: #ecf0f1;
        }

        .lvl1 > li > a {
            border-bottom: 2px solid #ecf0f1;
        }

        .lvl1 > li > .mx3-no-link > a:before,
        .lvl1 > li > .mx3-no-link > a:after{
            border-color: #fff;
        }

        .lvl1 a{
            color: #ecf0f1;
        }

        .lvl1>li:nth-child(1){
            background-color: #2ecc71;
        }
        .lvl1>li:nth-child(2){
            background-color: #27ae60;
        }
        .lvl1>li:nth-child(3){
            background-color: #1abc9c;
        }
        .lvl1>li:nth-child(4){
            background-color: #16a085;
        }
        .lvl1>li:nth-child(5){
            background-color: #3498db;
        }
        .lvl1>li:nth-child(6){
            background-color: #2980b9;
        }

        .lvl2{

        }
        .lvl2 a{
            color: #ecf0f1;
        }


    </style>
</head>

<body>

    <button type="button" data-mx3-block="main-menu1" class="mx3-btn">&nbsp;Menu 1</button>
    <button type="button" data-mx3-block="main-menu2" class="mx3-btn">&nbsp;Menu 2</button>
    <button type="button" data-mx3-block="main-menu3" class="mx3-btn">&nbsp;Menu 3</button>
    <p>Coucou</p>

    <nav id="main-menu1" class="mx3-container">
        <ul>
            <li>
                <a href="/#apero" title="Apéritifs">
                    <span>Apéritifs</span>
                </a>
            </li>
            <li>
                <a href="/#entrees">
                    <span>Entrées</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                    </li>
                    <li>
                        <a href="#">Verrines</a>
                    </li>
                    <li>
                        <a href="#">Chips au guacamol</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/#plats">
                    <span>Plats</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Beauf bourguignon</a>
                    </li>
                    <li>
                        <a href="#">Mont d'or aux patates</a>
                    </li>
                    <li>
                        <a href="#">Cancoillotte</a>
                    </li>
                    <li>
                        <a href="#">Soupes</a>
                    </li>
                    <li>
                        <a href="#">Salades composées</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/#desserts">
                    <span>Desserts</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Gâteaux</a>
                        <ul>
                            <li><a href="#">plop</a></li>
                            <li><a href="#">mouarf</a></li>
                            <li>
                                <a href="#">paf</a>
                                <ul>
                                    <li><a href="#">Je</a></li>
                                    <li>
                                        <a href="#">Tu</a>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Il</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Glaces</a>
                    </li>
                    <li>
                        <a href="#">Tartes</a>
                    </li>
                    <li>
                        <a href="#">Crèmes</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/#colla">
                    <span>Collations</span>
                </a>
            </li>
            <li>
                <a href="/#gouters">
                    <span>Gouters</span>
                </a>
            </li>
        </ul>
    </nav>
    <nav id="main-menu2" class="mx3-container">
        <ul>
            <li>
                <a href="#" title="Chaises">
                    <span>Chaises</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>Tables</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
                    </li>
                    <li>
                        <a href="#">Verrines</a>
                    </li>
                    <li>
                        <a href="#">Chips au guacamol</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <span>Bureaux</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Beauf bourguignon</a>
                    </li>
                    <li>
                        <a href="#">Mont d'or aux patates</a>
                    </li>
                    <li>
                        <a href="#">Cancoillotte</a>
                    </li>
                    <li>
                        <a href="#">Soupes</a>
                    </li>
                    <li>
                        <a href="#">Salades composées</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <span>Tabourets</span>
                </a>
                <ul>
                    <li>
                        <a href="#">Gâteaux</a>
                        <ul style="display: none">
                            <li>plop</li>
                            <li>mouarf</li>
                            <li>paf</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Glaces</a>
                    </li>
                    <li>
                        <a href="#">Tartes</a>
                    </li>
                    <li>
                        <a href="#">Crèmes</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <nav id="main-menu3" class="mx3-container">
        <ul>
            <li>
                <a href="#" title="Chaises">
                    <span>Machin</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>truc</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>bidule</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>engin</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>autre</span>
                </a>
            </li>
        </ul>
    </nav>

    <script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/js/jquery-mobilemultimenu.js"></script>
    <script>
        $(document).ready(function(){
            $('.mx3-btn').mx3({
                startTop: '37px',
                heightGlobalItem: false,
                heightActiveItem: 50
            });
        });
    </script>
</body>
</html>
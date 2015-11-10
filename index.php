<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Mx3 - Mobile Multi Menu</title>

    <link rel="stylesheet" href="/assets/css/mobilemultimenu.css" media="all">

    <style>
        .btn-menu{

        }

    </style>
</head>

<body>

    <button type="button" class="btn-menu"><span>Show</span> menu</button>
    <p></p>

    <nav id="main-menu" class="mx3-container">
        <ul class="lvl1">
            <li>
                <a href="/#apero" title="Apéritifs">
                    <span>Apéritifs</span>
                </a>
            </li>
            <li>
                <a href="/#entrees">
                    <span>Entrées</span>
                </a>
                <ul class="lvl2">
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
                <ul class="lvl2">
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
                <ul class="lvl2">
                    <li>
                        <a href="#">Gâteaux</a>
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
                <a href="/#video">
                    <span>Vidéos</span>
                </a>
            </li>
        </ul>
    </nav>

    <script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/js/mobilemultimenu.js"></script>
    <script>
        $(document).ready(function(){
            $(this).mx3();
        });
    </script>
</body>
</html>
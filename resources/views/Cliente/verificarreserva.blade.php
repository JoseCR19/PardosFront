<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Colorlib Templates">
    <meta name="author" content="Colorlib">
    <meta name="keywords" content="Colorlib Templates">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Title Page-->
    <title>Registro de reservas</title>

    <!-- Icons font CSS-->
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/main.css" rel="stylesheet" media="all">
    <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-minimal@3/minimal.css" rel="stylesheet">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1 minimum-scale=1" />
</head>

<body>
    <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Verificar Reservación</h2>

                    <div class="input-group">
                        <input class="input--style-2" type="text" placeholder="Nombres" name="nombre" id="nombre">
                    </div>
                    <div class="input-group">
                        <input class="input--style-2" type="text" placeholder="Apellidos" name="apellidos" id="apellidos">
                    </div>
                    <div class="input-group">
                        <input class="input--style-2" type="text" placeholder="Codigo" name="codigo" id="codigo">
                    </div>
                    <div>
                        <ul id="lista_errores">

                        </ul>
                    </div>
                    <div class="p-t-30">
                        <button class="btn btn--radius btn--green" id="verificarreservar">Verificar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Jquery JS-->
    <script type="text/javascript" src="js/scripts/jquery-1.11.1.min.js"></script>
    <script src="js/reserva.js"></script>

    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    <!-- Main JS-->
    <script src="js/global.js"></script>


</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
<!-- end document-->
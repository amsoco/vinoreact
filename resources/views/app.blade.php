<!DOCTYPE html>
<html>

<head>
    @yield('title')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="https://db.onlinewebfonts.com/c/a6e1f9c1f231a9d282a89b950b66509d?family=LincolnMillerBanner-Roman" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet"> -->
    <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}">
</head>

<body>
    <div id="root"></div>
    <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
</body>

</html>

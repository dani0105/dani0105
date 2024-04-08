<?php
require_once './i18n/i18n.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Page not Found</title>

    <link href="/assets/css/fonts.css" rel="stylesheet">
</head>

<body style="height:100vh; margin: 0; display: flex; justify-content: center; align-items: center; font-family: cabin;">
    <div style="text-align: center;">
        <h1>
            <?php echo __('404') ?>
        </h1>
        <h2>
            <?php echo __('404.redirect') ?>
            <a href="/"> <?php echo __('404.here') ?> </a>
        </h2>
    </div>

</body>

</html>
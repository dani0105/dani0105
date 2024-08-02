<?php
require_once './i18n/i18n.php';

$canonical = 'https://www.danielrojas.website/'.$lang;
?>

<!DOCTYPE html>
<html lang="<?php echo $lang ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="revisit-after" content="2 days">
    <meta name="author" content="Daniel Rojas Rodriguez">
    <meta name="robots" content="index, follow">
    <meta name="description" content="<?php echo __('meta.description') ?>">
    <meta name="keywords" content="<?php echo __('headmetaer.keywords') ?>">
    <link rel="icon" href="/assets/img/favicon.ico">

    <meta property="og:url" content="<?php echo $canonical ?>">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content=" <?php echo __('meta.siteName') ?>">
    <meta property="og:title" content=" <?php echo __('meta.title') ?>">
    <meta property="og:description" content=" <?php echo __('meta.description') ?>">
    <meta property="og:image" content=" <?php echo __('meta.image') ?>">
    <meta property="og:image:width" content="250">
    <meta property="og:image:height" content="250">
    <link rel="canonical" href="<?php echo $canonical ?>">


    <meta property="twitter:card" content="summary">
    <meta property="twitter:text:title" content="<?php echo __('meta.title') ?>">
    <meta property="twitter:description" content="<?php echo __('meta.description') ?>">
    <meta property="twitter:image:src" content="<?php echo __('meta.image') ?>">
    <meta property="twitter:url" content="<?php echo $canonical ?>">


    <title>
        <?php echo __('meta.title') ?>
    </title>

    <link href="/assets/css/fonts.css" rel="stylesheet">
    <link href="/assets/css/index.css" rel="stylesheet">
    <link href="/assets/css/icons.css" rel="stylesheet">
    <link href="/assets/css/timeline.css" rel="stylesheet">
    <link href="/assets/css/bootstrap-grid.min.css" rel="stylesheet">

    <script src="/assets/js/jquery.min.js"></script>

    <?php if ($_SERVER['SERVER_NAME'] != 'localhost' ) { ?>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3JRNGH7M89"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-3JRNGH7M89');
    </script>

    <?php } ?>

</head>

<body>
    <header class="bg-primary align-center">
        <h1 class="mt-0 mb-0 font-weight-bold text-uppercase">
            <?php echo __('header.title') ?>
        </h1>
        <div class="muted mt-2">
            <?php echo __('header.subTitle') ?>
        </div>
        <aside class="social-media-link">
            <ul class="list-unstyled d-flex justify-content-center pl-0">
                <li>
                    <a class="social-media-icon ml-0" href="https://twitter.com/RojasDaniel0105" target="_blank"
                        rel="noopener">
                        <i class="icon-twitter"></i>
                    </a>
                </li>
                <li>
                    <a class="social-media-icon" href="https://www.linkedin.com/in/daniel-rojas-rodríguez-b29088179"
                        target="_blank" rel="noopener">
                        <i class="icon-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a class="social-media-icon" href="https://www.instagram.com/daniel.rojas.r" target="_blank"
                        rel="noopener">
                        <i class="icon-instagram"></i>
                    </a>
                </li>
                <li>
                    <a class="social-media-icon" href="https://github.com/dani0105" target="_blank" rel="noopener">
                        <i class="icon-github"></i>
                    </a>
                </li>
            </ul>
        </aside>
    </header>

    <nav class="align-center">
        <ul class="list-unstyled d-md-flex justify-content-center pl-0">
            <li class="navbar-link ml-0" id="link-profile">
                <a href="#profile" rel="nofollow">
                    <?php echo __('nav.profile') ?>
                </a>
            </li>
            <li class="navbar-link" id="link-education">
                <a href="#education" rel="nofollow">
                    <?php echo __('nav.education') ?>
                </a>
            </li>
            <li class="navbar-link" id="link-experience">
                <a href="#experience" rel="nofollow">
                    <?php echo __('nav.experience') ?>
                </a>
            </li>
            <li class="navbar-link" id="link-projects">
                <a href="#projects" rel="nofollow">
                    <?php echo __('nav.projects') ?>
                </a>
            </li>
            <li class="navbar-link" id="link-projects">
                <a href="https://blog.danielrojas.website/<?php echo  $lang ?>/posts">
                    <?php echo __('nav.blog') ?>
                </a>
            </li>
        </ul>
    </nav>

    <main class="container">

        <section id="profile" class="row mt-2 mb-4">
            <div class="col-md-9">
                <h2 class="section-title text-uppercase">
                    <?php echo __('profile.title') ?>
                </h2>
                <p>
                    <?php echo __('profile.description') ?>
                </p>
            </div>

            <div class="col-md-3">
                <img width="250" height="250" class="profile-image mt-5" src="/assets/img/profile.webp"
                    alt="<?php echo __('profile.alt.image') ?>">
            </div>
        </section>

        <section id="experience" class="row mt-2 mb-4">
            <div class="col-12">
                <h2 class="section-title text-uppercase">
                    <?php echo __('experience.title') ?>
                </h2>

                <div class="timeline timeline-intercalate">
                    <?php
                        $left = false;
                        foreach (__('experience.content') as $row) { 
                        $left = !$left;
                    ?>
                    <div class="timemark-intercalate timemark-<?php echo $left? 'left':'right'; ?>">
                        <h3 class="mt-0 mb-0">
                            <?php echo $row['date'] ?>
                        </h3>
                        <span>
                            <?php echo $row['place'] ?>
                        </span>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </section>

        <section id="education" class="row mt-2 mb-4">
            <div class="col-12">
                <h2 class="section-title text-uppercase">
                    <?php echo __('education.title') ?>
                </h2>
                <ul class="list-unstyled pl-0">
                    <?php foreach (__('education.content') as $row) { ?>
                    <li class="d-flex justify-content-center">
                        <div class="w-50">
                            <h3 class="mb-1">
                                <?php echo $row['institution'] ?>
                            </h3>
                            <span class="muted">
                                <?php echo $row['date'] ?>
                            </span>
                        </div>
                        <div class="w-50">
                            <h3 class="mb-1">
                                <?php echo $row['title'] ?>
                            </h3>
                            <p>
                                <?php echo $row['description'] ?>
                            </p>
                            <span class="icon-location text-info">
                                <?php echo $row['location'] ?>
                            </span>
                        </div>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </section>



        <section id="projects" class="row mt-2 mb-4">
            <div class="col-12">
                <h2 class="section-title text-uppercase">
                    <?php echo __('projects.title') ?>
                </h2>

                <div class="timeline timeline-left">
                    <?php foreach (__('projects.content') as $row) { ?>
                    <div class="timemark timemark-left">
                        <h3 class="mb-1 text-underline">
                            <a href="<?php echo $row['link'] ?>" rel="external">
                                <?php echo $row['title'] ?>
                            </a>
                        </h3>

                        <p class="mt-0 mb-0">
                            <?php echo $row['description'] ?>
                        </p>

                    </div>
                    <?php } ?>
                </div>
            </div>

        </section>

    </main>

    <footer class="bg-secondary  text-white">
        <div class="container">
            <div class="row mt-1 mb-2">
                <div class="col-12 align-center">
                    <p class="mb-0 mt-0">
                        <q>
                            <i>
                                <?php echo __('footer.qoute') ?>
                            </i>
                        </q>
                        <cite>
                            -
                            <?php echo __('footer.author') ?>
                        </cite>
                    </p>
                </div>
            </div>

            <div class="row mt-2 mb-2">
                <div class="col-12 align-center">
                    <hr>
                    <small class="muted">Copyright © 2024 Daniel Rojas</small>
                </div>
            </div>
        </div>
    </footer>
</body>
<script src="/assets/js/index.js"></script>

</html>
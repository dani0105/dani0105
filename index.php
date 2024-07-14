<?php
const ACCEPT_LANG =  ['en', 'es'];
const DEFAULT_LANG = ACCEPT_LANG[0];

const VIEWS_DIR = '/views/';

// /
// /en/
// /es/
// /en/main
$request = trim($_SERVER['REQUEST_URI']);

//redirect to lang page in case for empty url
if ($request== '' || $request == '/' ){
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $lang = in_array($lang, ACCEPT_LANG) ? $lang : DEFAULT_LANG;
    if(empty($lang)){
        $lang = DEFAULT_LANG;
    }

    header("Location: /".$lang);
    die();
} 

$parts = explode('/',$request);
array_shift($parts); // remove white space
$lang = array_shift($parts); // get lang target
if( !in_array($lang, ACCEPT_LANG) ){
    header("Location: /".DEFAULT_LANG);
    die();
}

switch ($parts[0]) {
    case '':
    case '/':
        require __DIR__ . VIEWS_DIR . 'main.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . VIEWS_DIR . '404.php';
}

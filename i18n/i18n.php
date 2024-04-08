<?php
require 'en.php';
require 'es.php';

const ACCEPT_LANG =  ['en', 'es'];
const TRANSLATIONS = array(
    'en' => EN,
    'es' => ES
);


$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
$lang = in_array($lang, ACCEPT_LANG) ? $lang : 'en';


function __($token) {
    global $lang;
    if (   empty($lang)
        || !array_key_exists($lang, TRANSLATIONS)
        || !array_key_exists($token, TRANSLATIONS[$lang])
    ) {
        return $token;
    } else {
        return TRANSLATIONS[$lang][$token];
    }
}




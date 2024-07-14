<?php
require 'en.php';
require 'es.php';

const TRANSLATIONS = array(
    'en' => EN,
    'es' => ES
);


function __($token) {
    global $lang;
    if (!array_key_exists($lang, TRANSLATIONS) || !array_key_exists($token, TRANSLATIONS[$lang])) {
        return $token;
    } else {
        return TRANSLATIONS[$lang][$token];
    }
}




<?php
if (!defined('ABSPATH')) exit;

class MyPlugin_Settings {

    public static function init() {
        register_setting('myplugin_group', 'myplugin_settings');
    }
}

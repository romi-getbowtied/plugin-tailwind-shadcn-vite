<?php
if (!defined('ABSPATH')) exit;

class MyPlugin_AJAX {

    public static function init() {
        add_action('wp_ajax_myplugin_action', [__CLASS__, 'handle']);
    }

    public static function handle() {
        check_ajax_referer('myplugin_nonce');

        wp_send_json([
            "success" => true,
            "message" => "AJAX handled correctly",
        ]);
    }
}

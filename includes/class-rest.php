<?php
if (!defined('ABSPATH')) exit;

class MyPlugin_REST {

    public static function init() {
        add_action('rest_api_init', [__CLASS__, 'register_routes']);
    }

    public static function register_routes() {
        register_rest_route('myplugin/v1', '/settings', [
            'methods'  => 'GET',
            'callback' => [__CLASS__, 'get_settings'],
            'permission_callback' => function() {
                return current_user_can('manage_options');
            }
        ]);
    }

    public static function get_settings() {
        return [
            "status" => "ok",
            "settings" => get_option("myplugin_settings", [])
        ];
    }
}

<?php
if (!defined('ABSPATH')) exit;

class MyPlugin_Admin {

    public static function init() {
        add_action('admin_menu', [__CLASS__, 'register_menu']);
        add_action('admin_enqueue_scripts', [__CLASS__, 'enqueue_assets']);
    }

    public static function register_menu() {
        add_menu_page(
            'My Modern Plugin',
            'My Plugin',
            'manage_options',
            'my-modern-plugin',
            [__CLASS__, 'render_page'],
            'dashicons-admin-generic'
        );
    }

    public static function render_page() {
        include MYPLUGIN_PATH . "admin/page.php";
    }

    private static function get_asset_version($filename) {
        $path = MYPLUGIN_PATH . "assets/{$filename}";
        return file_exists($path) ? filemtime($path) : '1.0.0';
    }

    public static function enqueue_assets($hook) {
        if ($hook !== 'toplevel_page_my-modern-plugin') {
            return;
        }

        wp_enqueue_style(
            'myplugin-style',
            MYPLUGIN_URL . 'assets/plugin.css',
            [],
            self::get_asset_version('plugin.css')
        );

        wp_enqueue_script(
            'myplugin-script',
            MYPLUGIN_URL . 'assets/plugin.js',
            [],
            self::get_asset_version('plugin.js'),
            true
        );

        wp_localize_script('myplugin-script', 'MyPluginData', [
            'ajax_url'  => admin_url('admin-ajax.php'),
            'nonce'     => wp_create_nonce('myplugin_nonce'),
            'site_url'  => get_site_url(),
            'admin_url' => admin_url()
        ]);
    }
}

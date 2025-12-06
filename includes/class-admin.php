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
        include plugin_dir_path(__FILE__) . "../admin/page.php";
    }

    public static function enqueue_assets($hook) {
        // Only enqueue on our plugin page
        if ($hook !== 'toplevel_page_my-modern-plugin') {
            return;
        }

        wp_enqueue_script('wp-element');

        wp_enqueue_style(
            'myplugin-style',
            plugin_dir_url(__FILE__) . '../assets/plugin.css',
            [],
            file_exists(plugin_dir_path(__FILE__) . '../assets/plugin.css') 
                ? filemtime(plugin_dir_path(__FILE__) . '../assets/plugin.css') 
                : '1.0.0'
        );

        wp_enqueue_script(
            'myplugin-script',
            plugin_dir_url(__FILE__) . '../assets/plugin.js',
            ['wp-element'],
            file_exists(plugin_dir_path(__FILE__) . '../assets/plugin.js')
                ? filemtime(plugin_dir_path(__FILE__) . '../assets/plugin.js')
                : '1.0.0',
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

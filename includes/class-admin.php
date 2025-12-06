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
        if ($hook !== 'toplevel_page_my-modern-plugin') {
            return;
        }

        $assets_dir = plugin_dir_path(__FILE__) . '../assets';
        $assets_url = plugin_dir_url(__FILE__) . '../assets';

        wp_enqueue_script('wp-element');

        $css_path = $assets_dir . '/plugin.css';
        $css_version = file_exists($css_path) ? filemtime($css_path) : '1.0.0';
        wp_enqueue_style('myplugin-style', $assets_url . '/plugin.css', [], $css_version);

        $js_path = $assets_dir . '/plugin.js';
        $js_version = file_exists($js_path) ? filemtime($js_path) : '1.0.0';
        wp_enqueue_script('myplugin-script', $assets_url . '/plugin.js', ['wp-element'], $js_version, true);

        wp_localize_script('myplugin-script', 'MyPluginData', [
            'ajax_url'  => admin_url('admin-ajax.php'),
            'nonce'     => wp_create_nonce('myplugin_nonce'),
            'site_url'  => get_site_url(),
            'admin_url' => admin_url()
        ]);
    }
}

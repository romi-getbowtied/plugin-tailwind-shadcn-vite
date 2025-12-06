<?php
/**
 * Plugin Name: My Modern Plugin
 * Description: Modern WP plugin boilerplate using React, Tailwind v4, Vite, shadcn, REST + AJAX architecture.
 * Version: 1.0
 * Author: ChatGPT
 */

if (!defined('ABSPATH')) exit;

// Plugin constants
define('MYPLUGIN_PATH', plugin_dir_path(__FILE__));
define('MYPLUGIN_URL', plugin_dir_url(__FILE__));

// Load includes
require_once MYPLUGIN_PATH . "includes/class-admin.php";
require_once MYPLUGIN_PATH . "includes/class-rest.php";
require_once MYPLUGIN_PATH . "includes/class-ajax.php";

// Init backend systems
MyPlugin_Admin::init();
MyPlugin_REST::init();
MyPlugin_AJAX::init();

<?php
/**
 * Plugin Name: My Modern Plugin
 * Description: Modern WP plugin boilerplate using React, Tailwind v4, Vite, shadcn, REST + AJAX architecture.
 * Version: 1.0
 * Author: ChatGPT
 */

if (!defined('ABSPATH')) exit;

// Load includes
require_once plugin_dir_path(__FILE__) . "includes/class-admin.php";
require_once plugin_dir_path(__FILE__) . "includes/class-rest.php";
require_once plugin_dir_path(__FILE__) . "includes/class-ajax.php";
require_once plugin_dir_path(__FILE__) . "includes/class-settings.php";

// Init backend systems
MyPlugin_Admin::init();
MyPlugin_REST::init();
MyPlugin_AJAX::init();
MyPlugin_Settings::init();

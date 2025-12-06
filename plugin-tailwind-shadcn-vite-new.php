<?php
/**
 * Plugin Name: Tailwind Scoped Plugin
 * Plugin URI: https://example.com
 * Description: A minimal WordPress plugin with Tailwind 4 scoped styling
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

if (!defined('ABSPATH')) exit;

define('TW_PLUGIN_VERSION', '1.0.0');
define('TW_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('TW_PLUGIN_URL', plugin_dir_url(__FILE__));

class Tailwind_Scoped_Plugin {
	public function __construct() {
		add_action('admin_menu', [$this, 'add_admin_page']);
		add_action('admin_enqueue_scripts', [$this, 'enqueue_assets']);
	}
	
	public function add_admin_page() {
		add_menu_page(
			'Tailwind Page',
			'Tailwind Page',
			'manage_options',
			'tailwind-scoped-page',
			[$this, 'render_admin_page'],
			'dashicons-admin-appearance',
			30
		);
	}
	
	public function enqueue_assets($hook) {
		if ($hook !== 'toplevel_page_tailwind-scoped-page') return;
		$css_path = TW_PLUGIN_DIR . 'assets/plugin.css';
		$js_path = TW_PLUGIN_DIR . 'assets/plugin.js';
		$version = file_exists($css_path) ? filemtime($css_path) : TW_PLUGIN_VERSION;
		wp_enqueue_style('tailwind-scoped-style', TW_PLUGIN_URL . 'assets/plugin.css', [], $version);
		wp_enqueue_script('tailwind-scoped-script', TW_PLUGIN_URL . 'assets/plugin.js', [], $version, true);
	}
	
	public function render_admin_page() {
		?>
		<div class="wrap">
			<hr class="wp-header-end">
			<div class="tw-plugin-scope">
				<div id="tw-plugin-app"></div>
			</div>
		</div>
		<?php
	}
}
new Tailwind_Scoped_Plugin();

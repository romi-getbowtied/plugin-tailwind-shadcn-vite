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
		
		wp_enqueue_script('tailwind-scoped-script', TW_PLUGIN_URL . 'assets/plugin.js', ['wp-element'], $version, true);
		
		// Fix: Dequeue 'svg-painter' to prevent console errors on this custom React page.
		// This script depends on DOM elements/globals that might be absent or conflicting.
		wp_dequeue_script('svg-painter');
	}
	
	public function render_admin_page() {
		?>
		<div class="wrap">
			<hr class="wp-header-end">
			
			<!-- Scoped Container for Tailwind -->
			<div id="tw-plugin-app">
				<div class="p-6 space-y-6">
					
					<!-- Header Section (Static HTML) -->
					<div class="flex items-center justify-between">
						<div class="space-y-2">
							<h1 class="text-3xl font-bold text-foreground">Tailwind Scoped Plugin</h1>
							<p class="text-muted-foreground">Static HTML with React Islands</p>
						</div>
						<!-- Dynamic Theme Toggle Island -->
						<div data-island="theme-toggle"></div>
					</div>

					<!-- Navigation Menu Island -->
					<div data-island="navigation-menu"></div>

					<!-- Content Section (Mixed) -->
					<div class="flex flex-wrap gap-4 pt-4">
						<div class="flex gap-2">
							<!-- Static Buttons with Tailwind classes -->
							<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
								Static Button
							</button>
							<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
								Static Secondary
							</button>
						</div>

						<!-- Dynamic Dropdown Menu Island -->
						<div data-island="dropdown-menu"></div>
					</div>

					<!-- Sonner Toast Buttons -->
					<div class="pt-4">
						<div data-island="sonner-button"></div>
					</div>

					<!-- Switch Component -->
					<div class="pt-4">
						<div data-island="switch"></div>
					</div>
					
				</div>
			</div>
		</div>
		<?php
	}
}
new Tailwind_Scoped_Plugin();


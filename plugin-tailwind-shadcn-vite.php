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

add_filter('tw_component_loader_active_components', function($components) {
	$components['server-side'] = [
		'navigation-menu-enhanced',
		// 'hero-parallax-enhanced',
		// 'bento-grid-enhanced',
		// 'apple-cards-carousel-enhanced',
	];
	return $components;
});

include_once dirname(__FILE__) . '/components/index.php';

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
		global $tw_components_paths, $tw_component_loader;
		
		// Use global if available, otherwise calculate directly from plugin file
		if (!isset($tw_components_paths)) {
			$tw_components_paths = [
				'path' => plugin_dir_path(__FILE__) . 'components',
				'url'  => plugin_dir_url(__FILE__) . 'components'
			];
		}
		
		$base = $tw_components_paths['path'] . '/assets';
		$version = file_exists("$base/styles.css") ? filemtime("$base/styles.css") : '1.0.0';
		$url = $tw_components_paths['url'] . '/assets';

		wp_enqueue_style('tailwind-scoped-style', "$url/styles.css", [], $version);
		wp_enqueue_script('tailwind-scoped-script', "$url/scripts.js", ['wp-element'], $version, true);
		
		if (isset($tw_component_loader)) {
			wp_localize_script('tailwind-scoped-script', 'twActiveComponents', [
				'serverSide' => $tw_component_loader->get_active_server_side_components(),
			]);
		}
		wp_dequeue_script('svg-painter');
	}
	
	public function render_admin_page() {
		?>
		<div class="wrap">
			<hr class="wp-header-end">
			<div id="tw-theme-app">
				<div class="p-6 space-y-6">
					<div class="flex items-center justify-between">
						<div class="space-y-2">
							<h1 class="text-3xl font-bold text-foreground">Tailwind Scoped Plugin</h1>
							<p class="text-muted-foreground">Static HTML with React Islands</p>
						</div>
					<div data-island="theme-toggle"></div>
				</div>
					<div class="flex flex-wrap pt-4 pb-4 border-b">
						<?php if (function_exists('tw_render_nav_menu')) : ?>
							<?php tw_render_nav_menu('primary'); ?>
						<?php endif; ?>
					</div>
					<div class="flex flex-wrap gap-4 pt-4">
						<div class="flex gap-2">
							<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
								Static Button
							</button>
							<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
								Static Secondary
							</button>
						</div>
						<div data-island="dropdown-menu"></div>
					</div>
					<div class="pt-4">
						<div data-island="sonner-button"></div>
					</div>
					<div class="pt-4">
						<div data-island="switch"></div>
					</div>
					<div data-island="toaster"></div>
				</div>
			</div>
		</div>
		<?php
	}
}
new Tailwind_Scoped_Plugin();


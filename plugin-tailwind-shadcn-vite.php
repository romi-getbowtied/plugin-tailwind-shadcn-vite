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

require_once dirname(__FILE__) . '/inc/class-tools.php';
require_once dirname(__FILE__) . '/inc/class-assets.php';
require_once dirname(__FILE__) . '/ui/index.php';

class Tailwind_Scoped_Plugin {
	public function __construct() {
		TW_Tools::init(__FILE__);
		new TW_Assets();

		add_action('admin_menu', fn() => add_menu_page(
			'Tailwind Page',
			'Tailwind Page',
			'manage_options',
			'tailwind-scoped-page',
			[$this, 'render'],
			'dashicons-admin-appearance',
			30
		));
	}
	
	public function render() {
		?>
		<div class="wrap">
			<hr class="wp-header-end">
			<div id="gbt-ui-app">
				<div class="p-6 space-y-6">
					<div class="flex items-center justify-between">
						<div class="space-y-2">
							<h1 class="text-3xl font-bold text-foreground">Tailwind Scoped Plugin</h1>
							<p class="text-muted-foreground">Static HTML with React Islands</p>
						</div>
					<div data-island="theme-toggle"></div>
				</div>
					<div class="flex flex-wrap pt-4 pb-4 border-b">
						<?php TW_Nav_Menu::render('primary'); ?>
					</div>
				</div>
				<?php TW_Hero_Parallax::render(); ?>
				<div class="p-6 space-y-6">
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
					<div data-island="animated-testimonials"></div>
					<div class="pt-4">
						<div data-island="floating-dock"></div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
new Tailwind_Scoped_Plugin();

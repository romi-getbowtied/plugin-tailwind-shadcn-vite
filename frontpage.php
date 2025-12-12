<?php
/**
 * Frontpage component
 * 
 * Adds empty div to frontend footer
 */

if (!defined('ABSPATH')) exit;

class Tailwind_Scoped_Plugin_Frontpage {
	public function __construct() {
		add_action('wp_footer', [$this, 'render']);
	}

	public function render() {
		if (is_admin()) {
			return;
		}
		?>
		<div id="gbt-ui-app">
			<div class="fixed bottom-0 left-0 right-0 z-50 pb-4 flex items-center justify-center">
				<?php
				$dock_items = [
					['title' => 'Home', 'icon' => 'IconHome', 'href' => 'https://www.google.com'],
					['title' => 'Products', 'icon' => 'IconTerminal2', 'href' => '#'],
					['title' => 'Components', 'icon' => 'IconNewSection', 'href' => '#'],
					['title' => 'Aceternity UI', 'icon' => 'https://img.icons8.com/search', 'href' => '#'],
					['title' => 'Changelog', 'icon' => 'IconExchange', 'href' => '#'],
					['title' => 'Twitter', 'icon' => 'IconBrandX', 'href' => '#'],
					['title' => 'GitHub', 'icon' => 'IconBrandGithub', 'href' => '#'],
				];
				UI_Tools::render_island('floating-dock', [
					'items' => $dock_items,
					'mobileClassName' => 'translate-y-20'
				]);
				?>
			</div>
		</div>
		<?php
	}
}

new Tailwind_Scoped_Plugin_Frontpage();


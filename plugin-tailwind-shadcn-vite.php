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
				</div>
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
					<div class="pt-4">
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
						?>
						<div 
							data-island="floating-dock" 
							data-props="<?php echo UI_Tools::data_props([
								'items' => $dock_items,
								'mobileClassName' => 'translate-y-20'
							]); ?>"
						></div>
					</div>
					<div class="pt-4">
						<?php
						$menu_items = [
							['id' => 1, 'label' => 'Copy', 'icon' => 'Copy'],
							['id' => 2, 'label' => 'Cut', 'icon' => 'Scissors'],
							['id' => 3, 'label' => 'Paste', 'icon' => 'ClipboardPaste'],
							['id' => 4, 'label' => 'Favorite', 'icon' => 'Star'],
							['id' => 5, 'label' => 'Pin', 'icon' => 'Pin'],
							['id' => 6, 'label' => 'Delete', 'icon' => 'Trash2'],
						];
						?>
						<div 
							data-island="radial-menu-demo" 
							data-props="<?php echo UI_Tools::data_props(['menuItems' => $menu_items]); ?>"
						></div>
					</div>
					<div class="pt-4">
						<?php
						$images = [
							'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format',
							'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format',
							'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format',
							'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format',
						];
						?>
						<div 
							data-island="stack-demo" 
							data-props="<?php echo UI_Tools::data_props([
								'images' => $images,
								'randomRotation' => false,
								'sensitivity' => 180,
								'sendToBackOnClick' => true,
								'animationConfig' => [
									'stiffness' => 260,
									'damping' => 20
								],
								'autoplay' => true,
								'autoplayDelay' => 1000,
								'pauseOnHover' => true,
								'dragElastic' => 0.3,
								'dragEnabled' => true,
								'width' => 250,
								'height' => 250
							]); ?>"
						></div>
					</div>
					<div class="pt-4">
						<?php
						$expandable_cards = [
							[
								'title' => 'Summertime Sadness',
								'description' => 'Lana Del Rey',
								'src' => 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
								'ctaText' => 'Play',
								'ctaLink' => 'https://ui.aceternity.com/templates',
								'content' => 'Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics.',
							],
							[
								'title' => 'Mitran Di Chhatri',
								'description' => 'Babbu Maan',
								'src' => 'https://assets.aceternity.com/demos/babbu-maan.jpeg',
								'ctaText' => 'Play',
								'ctaLink' => 'https://ui.aceternity.com/templates',
								'content' => 'Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics that resonate deeply with his audience. Born in the village of Khant Maanpur in Punjab, India, he has become a cultural icon in the Punjabi music industry.',
							],
							[
								'title' => 'For Whom The Bell Tolls',
								'description' => 'Metallica',
								'src' => 'https://assets.aceternity.com/demos/metallica.jpeg',
								'ctaText' => 'Play',
								'ctaLink' => 'https://ui.aceternity.com/templates',
								'content' => 'Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances that resonate deeply with their audience. Formed in Los Angeles, California, they have become a cultural icon in the heavy metal music industry.',
							],
						];
						GBT_Component_Expandable_Card_Demo::render($expandable_cards);
						?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
new Tailwind_Scoped_Plugin();

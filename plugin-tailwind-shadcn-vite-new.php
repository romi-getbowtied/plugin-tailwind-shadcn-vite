<?php
/**
 * Plugin Name: Tailwind Scoped Plugin
 * Plugin URI: https://example.com
 * Description: A minimal WordPress plugin with Tailwind 4 scoped styling
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

define('TW_PLUGIN_VERSION', '1.0.0');
define('TW_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('TW_PLUGIN_URL', plugin_dir_url(__FILE__));

class Tailwind_Scoped_Plugin {
	
	public function __construct() {
		add_action('admin_menu', array($this, 'add_admin_page'));
		add_action('admin_enqueue_scripts', array($this, 'enqueue_styles'));
	}
	
	public function add_admin_page() {
		add_menu_page(
			'Tailwind Page',
			'Tailwind Page',
			'manage_options',
			'tailwind-scoped-page',
			array($this, 'render_admin_page'),
			'dashicons-admin-appearance',
			30
		);
	}
	
	public function enqueue_styles($hook) {
		if ($hook !== 'toplevel_page_tailwind-scoped-page') {
			return;
		}
		
		wp_enqueue_style(
			'tailwind-scoped-style',
			TW_PLUGIN_URL . 'css/style.css',
			array(),
			TW_PLUGIN_VERSION
		);
	}
	
	public function render_admin_page() {
		?>
		<!-- WordPress Wrapper -->
		<div class="wrap">
			<h1></h1>
			<hr class="wp-header-end">
			
			<!-- Tailwind Scoped Content -->
			<div class="tw-plugin-scope">
				<div class="overflow-hidden py-24 sm:py-32">
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<div class="mx-auto max-w-2xl text-center">
							<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Tailwind 4 Component
							</h2>
							<p class="mt-6 text-lg leading-8 text-gray-600">
								This is a minimal WordPress plugin with Tailwind 4 scoped styling.
							</p>
						</div>
						
						<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
							<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-10">
								<div class="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow">
									<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
										<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
										</svg>
									</div>
									<h3 class="mt-4 text-base font-semibold text-gray-900">Feature One</h3>
									<p class="mt-2 text-sm text-gray-600">Description of the first feature goes here.</p>
								</div>
								
								<div class="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow">
									<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
										<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
										</svg>
									</div>
									<h3 class="mt-4 text-base font-semibold text-gray-900">Feature Two</h3>
									<p class="mt-2 text-sm text-gray-600">Description of the second feature goes here.</p>
								</div>
								
								<div class="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow">
									<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
										<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
										</svg>
									</div>
									<h3 class="mt-4 text-base font-semibold text-gray-900">Feature Three</h3>
									<p class="mt-2 text-sm text-gray-600">Description of the third feature goes here.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}

new Tailwind_Scoped_Plugin();


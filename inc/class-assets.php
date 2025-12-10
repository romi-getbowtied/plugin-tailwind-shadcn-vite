<?php
if (!defined('ABSPATH')) exit;

class TW_Assets {
	public function __construct() {
		add_action('wp_enqueue_scripts', fn() => $this->enqueue('frontend'));
		add_action('admin_enqueue_scripts', fn() => $this->enqueue('backend'));
	}

	private function enqueue($context) {
		$url = TW_Tools::get('url');
		$source = TW_Tools::get('source');
		$version = TW_Tools::get('version');
		
		wp_enqueue_style("tw-$source-$context", "$url/ui/assets/$context/styles.css", [], $version);
		wp_enqueue_script("tw-$source-$context", "$url/ui/assets/$context/scripts.js", ['wp-element'], $version, true);
	}
}

new TW_Assets();

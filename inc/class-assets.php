<?php
if (!defined('ABSPATH')) exit;

class GBT_Assets {
	public function __construct() {
		add_action('wp_enqueue_scripts', fn() => $this->enqueue('frontend'));
		add_action('admin_enqueue_scripts', fn() => $this->enqueue('backend'));
	}

	private function enqueue($context) {
		$url = GBT_Tools::get('url');
		$source = GBT_Tools::get('source');
		$version = GBT_Tools::get('version');
		
		wp_enqueue_style("gbt-$source-$context", "$url/ui/assets/$context/styles.css", [], $version);
		wp_enqueue_script("gbt-$source-$context", "$url/ui/assets/$context/scripts.js", ['wp-element'], $version, true);
	}
}

new GBT_Assets();

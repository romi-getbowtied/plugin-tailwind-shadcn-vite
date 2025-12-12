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
		<div id="frontpage-container"></div>
		<?php
	}
}

new Tailwind_Scoped_Plugin_Frontpage();


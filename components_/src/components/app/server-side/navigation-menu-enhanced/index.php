<?php
/**
 * Navigation Menu Enhanced Component
 * 
 * NOTE: This is a stub file. The actual component files should come from
 * the shared components submodule.
 * 
 * @package Tailwind_Scoped_Plugin
 */

if (!defined('ABSPATH')) exit;

// Stub function - replace with actual implementation from shared components
if (!function_exists('tw_render_nav_menu')) {
	function tw_render_nav_menu($location = 'primary') {
		// Fallback to default WordPress menu
		wp_nav_menu([
			'theme_location' => $location,
			'fallback_cb' => false,
		]);
	}
}


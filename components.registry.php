<?php
/**
 * Component Registry
 * 
 * Activate/deactivate server-side components by modifying this file.
 * Components listed here will be loaded and their JavaScript enhancements will be executed.
 * 
 * To deactivate a component, comment it out or remove it from the array.
 */

if (!defined('ABSPATH')) exit;

tw_register_components([
	'navigation-menu-enhanced',
	'hero-parallax-enhanced',
	// 'bento-grid-enhanced',
	// 'apple-cards-carousel-enhanced',
]);


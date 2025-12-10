<?php
if (!defined('ABSPATH')) exit;

class GBT_Tools {
	private static $data;

	private static function init() {
		if (self::$data) return;

		$root = dirname(dirname(__FILE__));
		$file = glob("$root/*.php")[0] ?? '';

		$headers = get_file_data($file, [
			'name' => 'Plugin Name',
			'version' => 'Version',
		]);

		self::$data = [
			'source' => 'plugin',
			'name' => $headers['name'] ?? 'Unknown Plugin',
			'version' => $headers['version'] ?? '1.0.0',
			'path' => plugin_dir_path($file),
			'url' => rtrim(plugin_dir_url($file), '/'),
		];
	}

	public static function get($key) {
		self::init();
		return self::$data[$key] ?? null;
	}
}

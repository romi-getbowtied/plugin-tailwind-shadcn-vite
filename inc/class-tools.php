<?php
if (!defined('ABSPATH')) exit;

class TW_Tools {
	private static $data;

	public static function init($file) {
		if (self::$data) return;

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
		return self::$data[$key] ?? null;
	}
}


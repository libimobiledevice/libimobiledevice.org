#!/usr/bin/env node

// Copies the JavaScript files used by the layouts from node_modules to
// assets/vendor, as Cecil can only handle assets located in assets directory.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = [
	'jquery/dist/jquery.slim.min.js',
	'bootstrap/dist/js/bootstrap.bundle.min.js',
	'smoothscroll-polyfill/dist/smoothscroll.min.js',
	'waypoints/lib/noframework.waypoints.min.js',
	'waypoints/lib/shortcuts/inview.min.js',
];

const vendorDir = path.join(root, 'assets', 'vendor');
fs.rmSync(vendorDir, { recursive: true, force: true });

for (const file of files) {
	const target = path.join(vendorDir, file);
	fs.mkdirSync(path.dirname(target), { recursive: true });
	fs.copyFileSync(path.join(root, 'node_modules', file), target);
}

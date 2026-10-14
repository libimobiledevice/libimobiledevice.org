#!/usr/bin/env node

// Builds a Font Awesome subset with only the icons used by the website:
// - fonts in assets/fonts/fontawesome
// - styles in assets/vendor/fontawesome/_fontawesome.scss (imported by main.scss)
// Icons must be added to the list below to be available.

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const { fontawesomeSubset } = require('fontawesome-subset');

const icons = {
	solid: [
		'angle-left',
		'angle-right',
		'angles-left',
		'angles-right',
		'chart-line',
		'chevron-up',
		'clock-rotate-left',
		'download',
		'envelope',
		'gear',
		'hashtag',
		'microchip',
		'mobile-screen-button',
		'rocket',
		'rss',
		'scale-balanced',
		'sitemap',
		'terminal',
		'triangle-exclamation',
		'up-right-from-square',
		'wifi',
	],
	brands: [
		'android',
		'apple',
		'github',
		'linux',
		'paypal',
		'raspberry-pi',
		'stack-overflow',
		'telegram',
		'twitter',
		'windows',
	],
};

const root = path.resolve(__dirname, '..');
const faDir = path.join(root, 'node_modules', '@fortawesome', 'fontawesome-free');
const fontsDir = path.join(root, 'assets', 'fonts', 'fontawesome');
const scssFile = path.join(root, 'assets', 'vendor', 'fontawesome', '_fontawesome.scss');
const fontsUrl = '../fonts/fontawesome';

const metadata = yaml.parse(fs.readFileSync(path.join(faDir, 'metadata', 'icons.yml'), 'utf8'));
const css = (file) => fs.readFileSync(path.join(faDir, 'css', file), 'utf8');
// keeps the CSS before the first icon rule, with fonts URL updated
const head = (file) => css(file).split(/^\.fa-[a-z0-9-]+ \{\n  --fa:/m)[0].replaceAll('../webfonts', fontsUrl);

let rules = '';
for (const [style, names] of Object.entries(icons)) {
	for (const name of names) {
		if (!metadata[name] || !metadata[name].styles.includes(style)) {
			throw new Error(`Font Awesome icon "${name}" not found in "${style}" style.`);
		}
		rules += `.fa-${name} {\n  --fa: "\\${metadata[name].unicode}";\n}\n`;
	}
}

fs.rmSync(fontsDir, { recursive: true, force: true });
fontawesomeSubset(icons, fontsDir, { targetFormats: ['woff2'] }).then(() => {
	fs.mkdirSync(path.dirname(scssFile), { recursive: true });
	fs.writeFileSync(scssFile, [head('fontawesome.css'), head('solid.css'), head('brands.css'), rules].join('\n'));
});

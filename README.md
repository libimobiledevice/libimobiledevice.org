# Official Website of libimobiledevice

*Contains the sources to generate the official website of libimobiledevice.*

## About

This repository contains the content, assets and logic to generate the official
website for the libimobiledevice project. It is automatically build and deployed
on changes pushed to the `master` branch or new releases related to the project.

The main purpose is to provide a central hub to learn about and to download
libimobiledevice and related components.

Brief technology outline:

* Static website generated using [Cecil](https://cecil.app/) 9
* [Twig](https://twig.symfony.com/) HTML templates using [Bootstrap](https://getbootstrap.com/) 5
* Responsive design optimized for mobile, tablet and desktop
* SASS based styles and optimized assets pipeline
* Icons by [Font Awesome](https://fontawesome.com/) 7, subset to the icons used by the website
* Syntax highlighting by [Prism](https://github.com/PrismJS/prism/)
* Dynamic content based on GitHub API data
* Automatically deployed using a [GitHub Actions](https://github.com/features/actions) workflow for [GitHub Pages](https://pages.github.com)
* Hero animation using CSS and SVG image
* Various CSS animations by [animate-sass](https://github.com/tgdev/animate-sass/)

## Getting Started

Requirements:

* PHP 8.3 or later with the `intl`, `gd` and `mbstring` extensions, and [Composer](https://getcomposer.org/)
* [Node.js](https://nodejs.org/) and npm
* `bash`, `curl` and `jq` (to download data from the GitHub API)

Clone the actual project repository:
```shell
git clone https://github.com/libimobiledevice/libimobiledevice.org.git
cd libimobiledevice.org
```

Build the development version:
```shell
make development
```

This should install the dependencies and finally build the website into a
`public/` directory. Use your favourite browser to open `public/index.html`.

Live-rebuild run of development version:
```shell
make watch
```

This should install the dependencies, build the website and run a local
webserver at [`http://localhost:8000`](http://localhost:8000) to view the result.

Any changes to the content, assets and other files should trigger a rebuild and
a refresh of the website.

Build the production version (as deployed):
```shell
make production
```

### Without make

Install the dependencies and download the GitHub data once:
```shell
composer install
npm install
./bin/github-download-organization-repos-latest-releases-data libimobiledevice
```

`npm install` also copies the vendor scripts into `assets/vendor/` and
generates the Font Awesome subset (see below).

Then build or serve the website with [Cecil](https://cecil.app/):
```shell
./vendor/bin/cecil build
./vendor/bin/cecil serve
```

Add `--config=config.production.yml` to use the production configuration.

If a change to a Sass partial (`assets/scss/_*.scss`) is not reflected, run the
command again with `--clear-cache`: the assets cache does not track imported
files.

### Configuration

* `cecil.yml`: website configuration, used for development
* `config.production.yml`: production overrides (base URL, analytics, assets
  minification and fingerprinting)

### Icons

To keep the fonts small, only the icons used by the website are included. To
use a new [Font Awesome icon](https://fontawesome.com/search?ic=free), add its
name to the list in `bin/build-fontawesome.js`, then run:
```shell
node bin/build-fontawesome.js
```

## Contributing

We welcome contributions from anyone and are grateful for every pull request!

If you'd like to contribute, please fork the `master` branch, change, commit and
send a pull request for review. Once approved it can be merged into the main
code base.

If you plan to contribute larger changes or a major refactoring, please create a
ticket first to discuss the idea upfront to ensure less effort for everyone.

Please make sure your contribution adheres to:
* Try to follow the code style of the project
* Commit messages should describe the change well without being to short
* Try to split larger changes into individual commits of a common domain
* Use your real name and a valid email address for your commits

We are still working on the guidelines so bear with us!

## Links

* Homepage: https://libimobiledevice.org/
* Repository: https://github.com/libimobiledevice/libimobiledevice.org.git
* Issue Tracker: https://github.com/libimobiledevice/libimobiledevice.org/issues
* Mailing List: https://lists.libimobiledevice.org/mailman/listinfo/libimobiledevice-devel
* Twitter: https://twitter.com/libimobiledev

## License

This website and assets are licensed under the [GNU Affero General Public License v3](https://www.gnu.org/licenses/agpl-3.0.html),
also included in the repository in the `LICENSE` file.

## Credits

Apple, iPhone, iPad, iPod, iPod Touch, Apple TV, Apple Watch, Mac, iOS,
iPadOS, tvOS, watchOS, and macOS are trademarks of Apple Inc.

Logo, Artwork & UI by [Martin Szulecki](https://github.com/FunkyM/).

This project is an independent software and has not been authorized, sponsored,
or otherwise approved by Apple Inc.

README Updated on: 2026-10-14

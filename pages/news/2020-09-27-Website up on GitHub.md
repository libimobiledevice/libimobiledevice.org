---
title: Website up on GitHub
date: 2020-09-27 21:42 CEST
author: https://github.com/FunkyM
image: img/news/website-edit-markdown.png
---
This website is now up on GitHub! As announced before we have made the move to allow public contributions from the community.
<!-- excerpt -->
This milestone switches hosting to use [Github Pages](https://pages.github.com).

If you want to contribute [head over to the repository](https://github.com/libimobiledevice/libimobiledevice.org).
It contains all the sources to generate this website and any changes are deployed upon pushing it to the master branch.

*Fork it*, *change it* and send a *pull request*.

A brief technology outline:

* Static website generated using [Cecil](https://cecil.app/)
* [Twig](https://twig.symfony.com/) HTML templates using [Bootstrap](https://getbootstrap.com/)
* Responsive design optimized for mobile, tablet and desktop
* SASS based styles and optimized assets pipeline
* Icons by [Font Awesome](https://fontawesome.com/)
* Syntax highlighting by [Prism](https://github.com/PrismJS/prism/)
* Dynamic content based on GitHub API data
* Automatically deployed using a [GitHub Actions](https://github.com/features/actions) workflow for [GitHub Pages](https://pages.github.com)
* Hero animation using CSS and SVG image
* Various CSS animations by [animate-sass](https://github.com/tgdev/animate-sass/)

Some areas that need work:

* Migrate more content from templates into markdown files
* Provide more examples and usage guides
* Improve frequently asked questions and other sections
* Automate generation of status page from external data

... and much more, looking forward to see great improvements from the community!

I really hope you guys enjoy the effort.

Next up are some releases and refactoring.

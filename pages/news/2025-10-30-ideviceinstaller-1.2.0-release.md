---
title: ideviceinstaller 1.2.0
date: 2025-10-30 20:24 CET
author: https://github.com/nikias
---
[ideviceinstaller 1.2.0](/#download-ideviceinstaller) has been released.
## Breaking changes
* Command line options are now using subcommands like `install`, `list`, etc. instead of the old `-i`, `-l`
<!-- excerpt -->
## Changes
* Add options for using external sinf and iTunes metadata
* Add JSON output capability
* Use CFBundleShortVersionString to display the app version
* Add -a command line switch to specify return attributes for 'list' command
* Add -b, --bundle-identifier command line switch to allow querying for bundle identifier

## Bug Fixes:
* Fix picking wrong app directory from zip/ipa when there are other directories
* Fix wrong exit code on specific output format (xml or json)
* Make sure to always return an error code if something goes wrong

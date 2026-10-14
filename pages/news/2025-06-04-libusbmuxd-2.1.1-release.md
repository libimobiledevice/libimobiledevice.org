---
title: libusbmuxd 2.1.1
date: 2025-06-04 15:26 CEST
author: https://github.com/nikias
---
[libusbmuxd 2.1.1](/#download-libusbmuxd) has been released.
<!-- excerpt -->
## Changes
* tools: Fix potential issue with `select()` in case the network fd is higher than the usbmux fd
* Switch to better initializer strategy
* Fix compilation on MSVC
* iproxy: Make sure to print correct socket error messages
* inetcat: Make sure to report correct error messages

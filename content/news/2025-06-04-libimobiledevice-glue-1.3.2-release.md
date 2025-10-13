---
title: libimobiledevice-glue 1.3.2
date: 2025-06-04 12:07 CEST
author: https://github.com/nikias
---
[libimobiledevice-glue 1.3.2](/#download-libimobiledevice-glue) has been released.
<!-- excerpt -->
## Changes
* socket: [macOS] Fix build on older macOS
* socket: [Windows] Prevent crash by properly initializing memory buffers
* Switch to better initializer strategy
* Fix compilation on MSVC
* Add `extern "C"` guards to public headers
* socket: Improve error message output/verbose logging
* socket: [Windows] Make sure errno is set in error conditions
* socket: Allow setting debug level via environment variable
* socket: [Windows] Use `WSAAddressToStringA` (ANSI version)
* socket: [Windows] Use `inet_ntop` instead of `WSAAddressToStringA` for >= Vista

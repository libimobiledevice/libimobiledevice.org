---
title: libimobiledevice 1.4.0
date: 2025-10-10 18:08 CEST
author: https://github.com/nikias
---
[libimobiledevice 1.4.0](/#download-libimobiledevice) has been released.
Finally a new official release!
<!-- excerpt -->
## Changes
* Add support for MbedTLS
* Add Reverse Proxy implementation
* Add support for wireless pairing (AppleTV)
* Embed 3rd party libraries for *ed25519* and *SRP6a*
* Fixes in idevicedebug
* idevicecrashreport: Allow filtering crash reports by filename
* Add `idevicedevmodectl` tool
* Fixes for `idevicebackup2`
* Add `property_list_client_get_service_client()` and `service_get_connection()` functions
* Add `idevicebtlogger` tool
* Add new `idevice_events_subscribe`/`unsubscribe` API
* Move `LIBIMOBILEDEVICE_API` to public headers
* Add `afc_strerror` function
* Add `libimobiledevice_version()` function
* Use libimobiledevice-glue's SHA1 implementation
* Add support for iOS 17+ Personalized Developer Disk image mounting
* Fix compilation on MSVC
* Add `idevice_strerror()` to interface
* Add new `idevice_get_device_version()` to interface
* Add `os_trace_relay` service implementation
* Fixes for `idevicesyslog`
* afc: Add `afc_get_file_info_plist` and `afc_get_device_info_plist` functions
  ... and several other internal changes

## Bug fixes
* definitely some, it has been to long to go through everything


---
title: libplist 2.7.0
date: 2025-05-14 20:36 CEST
author: https://github.com/nikias
---
[libplist 2.7.0](/#download-libplist) has been released.
<!-- excerpt -->
## Changes
* Add `plist_new_unix_date`, `plist_get_unix_date_val`, `plist_set_unix_date_val` functions
   that work with `int64_t` values representing a UNIX timestamp instead of
   using the 'MAC epoch'.
   These new functions should be used instead of `plist_new_date`,
   `plist_get_date_val`, and `plist_set_date_val`, which are now marked deprecated
   and might be removed in a future version of libplist.
* Allow building the library without tool(s)
* Switch to more generic global initializer method
* json: Allow e+/E+ in exponent as per RFC 8259
* C++: Add more convenience functions to the interface
* C++: Add more type variants to different constructors and operators
## Bugfixes:
* Fix segmentation fault when calling `plist_sort()` on an empty dictionary
* Fix compilation on MSVC
* C++: Fix bug in internal helper function of Array class
* C++: Fix String::GetValue memory leaking and support assignment of `const char*`

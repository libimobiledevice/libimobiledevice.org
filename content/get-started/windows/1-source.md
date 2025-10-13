---
title: MSYS2 <em>(recommended)</em>
section: get-started/windows
exclude: true
---
# Building from source

Using [MSYS2](https://www.msys2.org/) is the official way of compiling this project on Windows.
Download the MSYS2 installer and follow the installation steps.

The provided build script will build the entire libimobiledevice stack with the least
amount of external dependencies for Windows.

# Prerequesites

It is recommended to use the MSYS2 MinGW 64-bit shell. Run it and make sure the required dependencies are installed:

```shell-session
pacman -S base-devel \
	git \
	mingw-w64-x86_64-gcc \
	make \
	libtool \
	autoconf \
	automake-wrapper
```

Note that usbmuxd is currently not fully supported on Windows. To use this library you need to have Apple Mobile Device Support package installed (part of iTunes).

# Installation

In the MSYS2 MinGW shell, type the following commands:

```shell-session
$ mkdir -p limd-build
$ cd limd-build
$ curl -Ls -o limd-build-msys2.sh https://is.gd/limdmsys2
$ bash ./limd-build-msys2.sh
```

The script can be reviewed [here](https://gist.github.com/nikias/f4447669d5ff51313c7ae57b0adf88aa).

---
title: From Source <em>(Pi OS)</em>
section: get-started/raspberry-pi
exclude: true
---
# Open Terminal

Open a command-line terminal on your machine.

# Install Dependencies

Enter the commands provided below.

```shell-session
$ sudo apt-get install \
	build-essential \
	checkinstall \
	git \
	autoconf \
	automake \
	libtool-bin \
	libplist-dev \
	libusbmuxd-dev \
	libssl-dev \
	usbmuxd
```

# Build

Enter the commands provided below.

```shell-session
$ ./autogen.sh \
	--prefix=/opt/local \
	--enable-debug
$ make
```

# Install

Enter the commands provided below.

```shell-session
$ sudo make install
```
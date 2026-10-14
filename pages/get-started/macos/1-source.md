---
title: From Source <em>(recommended)</em>
section: get-started/macos
exclude: true
---
# Building from source

The provided build script will build the entire libimobiledevice stack with the least
amount of external dependencies for macOS. Make sure to have Xcode Command Line Tools
installed. It will build the latest code of every single libimobiledevice sub-project.

# Installation

Open a terminal and type the following commands. During the process you will be asked
for your user password which has the purpose of allowing the installation of the built
libraries and tools to **/usr/local/lib** and **/usr/local/bin** via sudo.

```shell-session
$ mkdir -p limd-build
$ cd limd-build
$ curl -Ls -o limd-build-macos.sh https://is.gd/limdmacos
$ bash ./limd-build-macos.sh
```

The script can be reviewed [here](https://gist.github.com/nikias/84c79469a1d0f16ff95250f0d51858c3).

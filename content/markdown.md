---
title: Markdown Example
published: false
menu:
  resources:
    weight: 1
---
Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](another-page.md).

There should be whitespace between paragraphs.

# Header 1

This is a normal paragraph following a header.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```c
...
#include <libimobiledevice/libimobiledevice.h>

/* Unique Device Identifier */
static char *udid = NULL;

/* Device Handle */
idevice_t device = NULL;

/* Try to connect to first USB device */
if (idevice_new_with_options(&device, NULL, IDEVICE_LOOKUP_USBMUX) != IDEVICE_E_SUCCESS) {
  printf("ERROR: No device found!\n");
  return -1;
}

/* Retrieve the udid of the connected device */
if (idevice_get_udid(device, &udid) != IDEVICE_E_SUCCESS) {
  printf("ERROR: Unable to get the device UDID.\n");
  idevice_free(device);
  return -1;
}

/* Outputs device identifier */
printf("Connected with UDID: %s\n", udid);

/* Cleanup */
idevice_free(device);
free(udid);
...
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png?responsive)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```

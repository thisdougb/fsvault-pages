---
date: {{ .Date }}
description: 'A short description for RSS feeds'
draft: true
image: 'example.jpg'
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
---

![ALT TEXT](/images/article-img.jpg)

Introduction text.

Everything here before more will appear in an RSS reader.

<!--more-->

Main article text.

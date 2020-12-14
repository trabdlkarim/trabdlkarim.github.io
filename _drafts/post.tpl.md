---
layout: post
title: project name
category: projects
tags: stable build passing new-release
excerpt: A simple project description
license: MIT
---

# {{page.title}}
{: .no_toc}

Some description goes here

---

# Table of contents
{: .no_toc .text-delta }

1. TOC 
{:toc}

---

## <i class="fa fa-file-alt"></i> Project Description

---

## <i class="fa fa-stream"></i> Release History

---

## <i class="fa fa-download"></i> Download Files

---

## <i class="fa fa-book"></i> Documentation

---

## <i class="fa fa-chart-pie"></i> Statistics

---

## <i class="fa fa-info-circle"></i> Meta

<dl>
  <dt>License</dt>
  <dd>{{page.license}}</dd>
  <dt>Author</dt>
  <dd>{{site.author.name}}</dd>
</dl>

---

## <i class="fa fa-users"></i> Maintainers

This index is mainly maintained on GitHub by the <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> and other contributors. We happily accept any [contributions and feedback]({{ site.baseurl }}{% link issues/feedback.md %}). 😊

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

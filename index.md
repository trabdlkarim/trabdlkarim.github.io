---
layout: default
title: Home
nav_order: 1
description: "Toure Abdoul Karim's Project Index hosted on GitHub Pages."
permalink: /
---

# Toure A. Karim Project Index
{: .no_toc .fs-9 }

TAK Project Index (TAK PI) is just a simple hub for some of <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> most important software development projects. You can think of it as a personal development lab  with various projects that you could customize for your own use upon downloading.
{: .fs-6 .fw-300 }

[Trending projects]({{ site.baseurl }}{% link projects/trending-projects.md %}){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [New releases]({{ site.baseurl }}{% link projects/new-releases.md %}){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Welcome 
{: .fs-7}

Welcome to the TAK PI, a collection of projects and references to help you download and share software packages. TAK Project Index is a core set of various types of personal software projects.

---

## TAK PI Projects
{: .fs-7}

Packages exist to be installed (or deployed), so before you package anything, you’ll want to have some answers to the deployment questions below:

- Who are your software’s users? Will your software be installed by other developers doing software development, operations people in a datacenter, or a less software-savvy group?

- Is your software intended to run on servers, desktops, mobile clients (phones, tablets, etc.), or embedded in dedicated devices?

- Is your software installed individually, or in large deployment batches?

Packaging is all about target environment and deployment experience. There are many answers to the questions above and each combination of circumstances has its own solutions. With this information, the following overview will guide you to the packaging technologies best suited to your project.


Some types of Python applications, like web site backends and other network services, are common enough that they have frameworks to enable their development and packaging. Other types of applications, like dynamic web frontends and mobile clients, are complex enough to target that a framework becomes more than a convenience.

In all these cases, it makes sense to work backwards, from the framework’s packaging and deployment story. Some frameworks include a deployment system which wraps the technologies outlined in the rest of the guide. In these cases, you’ll want to defer to your framework’s packaging guide for the easiest and most reliable production experience.

If you ever wonder how these platforms and frameworks work under the hood, you can always read the sections beyond.

---

## Recent Projects
{: .fs-7}

As a general-purpose programming language, Python is designed to be used in many ways. You can build web sites or industrial robots or a game for your friends to play, and much more, all using the same core technology.

Python’s flexibility is why the first step in every Python project must be to think about the project’s audience and the corresponding environment where the project will run. It might seem strange to think about packaging before writing code, but this process does wonders for avoiding future headaches.


1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project One](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Two](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Three](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Four](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Five](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Six](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Seven](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Eight](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Nine](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Ten](#some-link)
{: .fs-6}

---

## New Releases
{: .fs-7}

The Python Packaging Authority (PyPA) is a working group that maintains a core set of software projects used in Python packaging.

The software developed through the PyPA is used to package, share, and install Python software and to interact with indexes of downloadable Python software such as PyPI, the Python Package Index. Click the logo below to download pip, the most prominent software used to interact with PyPI.

Hot off the press: the newest project releases

- [<i class="fas fa-cube" arial-hidden="true"></i> voce-browser v1.4.7](#some-link)
- [<i class="fas fa-cube" arial-hidden="true"></i> onyx v0.9.97](#some-link)
- [<i class="fas fa-cube" arial-hidden="true"></i> firestone v4.15.34](#some-link) 
- [<i class="fas fa-cube" arial-hidden="true"></i> arsh v8.10.6](#some-link) 
- [<i class="fas fa-cube" arial-hidden="true"></i> hashashin v15.70](#some-link) 
{: .fs-6}

---

## Code Snippets
{: .fs-7}

Snippet is a programming term for a small region of re-usable source code, machine code, or text. Ordinarily, these are formally defined operative units to incorporate into larger programming modules. That is why TAK PI doesn't only indexes some important projects, but also it is a pool of code snippets from GitHub gists. They allow you to avoid repetitive typing in the course of routine edit operations.

Find out about [TAK PI Snippets]({{ site.baseurl }}{% link snippets/index.md %}) for more information.

---

## Learn More
{: .fs-7}

Beyond the projects, this index has several other resources:

- [<i class="fas fa-link" arial-hidden="true"></i> Some link one](#some-link)
- [<i class="fas fa-link" arial-hidden="true"></i> Some link two](#some-link)
- [<i class="fas fa-link" arial-hidden="true"></i> Some link three](#some-link)

---

## Maintainers
{: .fs-7}

This index is mainly maintained on GitHub by the <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> and other contributors. We happily accept any [contributions and feedback]({{ site.baseurl }}{% link issues/feedback.md %}). 😊

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

See [About TAK PI]({{ site.baseurl }}{% link takpi.md %}) for more information about this project hub.

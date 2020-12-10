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

Just the Docs is built for [Jekyll](https://jekyllrb.com), a static site generator. View the [quick start guide](https://jekyllrb.com/docs/) for more information. Just the Docs requires no special plugins and can run on GitHub Pages' standard Jekyll compiler. The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default (no need to run any special installation) to inject SEO and open graph metadata on docs pages. For information on how to configure SEO and open graph metadata visit the [Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).

### Deployment

Packages exist to be installed (or deployed), so before you package anything, you’ll want to have some answers to the deployment questions below:

- Who are your software’s users? Will your software be installed by other developers doing software development, operations people in a datacenter, or a less software-savvy group?

- Is your software intended to run on servers, desktops, mobile clients (phones, tablets, etc.), or embedded in dedicated devices?

- Is your software installed individually, or in large deployment batches?

Packaging is all about target environment and deployment experience. There are many answers to the questions above and each combination of circumstances has its own solutions. With this information, the following overview will guide you to the packaging technologies best suited to your project.

### Source Code

TAK PI projects source code consists of multiple files, it’s usually organized into a directory structure. 

Because packages consist of multiple files, they are harder to distribute. Most protocols support transferring only one file at a time (when was the last time you clicked a link and it downloaded multiple files?). It’s easier to get incomplete transfers, and harder to guarantee code integrity at the destination.

So long as your code contains nothing but pure Python code, and you know your deployment environment supports your version of Python, then you can use Python’s native packaging tools to create a source Distribution Package, or sdist for short.

Python’s sdists are compressed archives (.tar.gz files) containing one or more packages or modules. If your code is pure-Python, and you only depend on other Python packages, you can go here to learn more.

If you rely on any non-Python code, or non-Python packages (such as libxml2 in the case of lxml, or BLAS libraries in the case of numpy), you will need to use the format detailed in the next section, which also has many advantages for pure-Python libraries.

### Binaries

So much of Python’s practical power comes from its ability to integrate with the software ecosystem, in particular libraries written in C, C++, Fortran, Rust, and other languages.

Not all developers have the right tools or experiences to build these components written in these compiled languages, so Python created the Wheel, a package format designed to ship libraries with compiled artifacts. In fact, Python’s package installer, pip, always prefers wheels because installation is always faster, so even pure-Python packages work better with wheels.

Binary distributions are best when they come with source distributions to match. Even if you don’t upload wheels of your code for every operating system, by uploading the sdist, you’re enabling users of other platforms to still build it for themselves. Default to publishing both sdist and wheel archives together, unless you’re creating artifacts for a very specific use case where you know the recipient only needs one or the other.

Python and PyPI make it easy to upload both wheels and sdists together. Just follow the Packaging Python Projects tutorial.

---

## Recent Projects
{: .fs-7}

1. [Project One](#some-link)
1. [Project Two](#some-link)
1. [Project Three](#some-link)
1. [Project Four](#some-link)
1. [Project Five](#some-link)
1. [Project Six](#some-link)
1. [Project Seven](#some-link)
1. [Project Eight](#some-link)
1. [Project Nine](#some-link)
1. [Project Ten](#some-link)

---

## New Releases
{: .fs-7}

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

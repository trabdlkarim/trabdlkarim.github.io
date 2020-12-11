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

## <i class="fas fa-hand-holding-heart" arial-hidden="true"></i> Welcome 
{: .fs-7}

Welcome to the TAK PI, a collection of projects and references to help you download and share software packages. TAK Project Index is a core set of various types of personal software projects.

### TAK PI Stats

| Projects | Releases  | Files     |
|:---------|:----------|:----------|
| 277,052  | 2,249,691 | 3,612,047 |

---

## <i class="fas fa-archive" arial-hidden="true"></i> TAK PI Projects
{: .fs-7}

Packages exist to be installed (or deployed), so before you package anything, you’ll want to have some answers to the deployment questions below:

- Who are your software’s users? Will your software be installed by other developers doing software development, operations people in a datacenter, or a less software-savvy group?

- Is your software intended to run on servers, desktops, mobile clients (phones, tablets, etc.), or embedded in dedicated devices?

- Is your software installed individually, or in large deployment batches?

Packaging is all about target environment and deployment experience. There are many answers to the questions above and each combination of circumstances has its own solutions. With this information, the following overview will guide you to the packaging technologies best suited to your project.

---

## <i class="fas fa-file-archive" arial-hidden="true"></i> Recent Projects
{: .fs-7 .d-inline-block .mt-1}

New Projects 
{: .label .label-danger}

As a general-purpose programming language, Python is designed to be used in many ways. You can build web sites or industrial robots or a game for your friends to play, and much more, all using the same core technology.


1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project One](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Two](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Three](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Four](#some-link)
1. [<i class="fas fa-file-archive" arial-hidden="true"></i> Project Five](#some-link)
{: .fs-5}

For finding TAK PI projects, see [Browse all projects]({{ site.baseurl }}{% link projects/new-releases.md %}) for more information.

---

## <i class="fas fa-cube" arial-hidden="true"></i> New Releases
{: .fs-7}

stable
{: .label .label-green }

new-release
{: .label .label-purple }

build-passing
{: .label .label-green }


The Python Packaging Authority (PyPA) is a working group that maintains a core set of software projects used in Python packaging.
Hot off the press: the newest project releases

- [<i class="fas fa-cube" arial-hidden="true"></i> voce-browser v1.4.7](#some-link)
- [<i class="fas fa-cube" arial-hidden="true"></i> onyx v0.9.97](#some-link)
- [<i class="fas fa-cube" arial-hidden="true"></i> firestone v4.15.34](#some-link) 
- [<i class="fas fa-cube" arial-hidden="true"></i> arsh v8.10.6](#some-link) 
- [<i class="fas fa-cube" arial-hidden="true"></i> hashashin v15.70](#some-link) 
{: .fs-5}

See [Newest Project Releases]({{ site.baseurl }}{% link projects/new-releases.md %}) for more information.

---

## <i class="fas fa-info-circle" arial-hidden="true"></i> Learn More
{: .fs-7}

Beyond the projects, this index has several other resources:

- [<i class="fas fa-link" arial-hidden="true"></i> Source Distributions](#some-link)
- [<i class="fas fa-link" arial-hidden="true"></i> Binary Distributions](#some-link)
- [<i class="fas fa-link" arial-hidden="true"></i> Deploying packages](#some-link)
- [<i class="fas fa-link" arial-hidden="true"></i> Downloading packages](#some-link)
{: .fs-5}

Find out more about all available [other resources]({{ site.baseurl }}{% link resources/index.md %}).

---

## <i class="fas fa-users" arial-hidden="true"></i> Maintainers
{: .fs-7}

This index is mainly maintained on GitHub by the <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> and other contributors. We happily accept any [contributions and feedback]({{ site.baseurl }}{% link issues/feedback.md %}). 😊

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

<!-- Prepare a container for your calendar. -->
<div class="calendar"></div>
<script>GitHubCalendar(".calendar", "trabdlkarim", { responsive: true, global_stats: false });</script>

See [About TAK PI]({{ site.baseurl }}{% link takpi.md %}) for more information about this project hub.

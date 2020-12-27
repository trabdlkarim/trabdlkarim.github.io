---
layout: default
title: Home
nav_order: 1
description: "Toure Abdoul Karim's Project Index hosted on GitHub Pages."
permalink: /
last_modified_date: "2020-12-27 03:31:57 am"
---

# Toure A. Karim Project Index
{: .no_toc .fs-9 }

TAK Project Index (TAK PI) is just a simple hub for some of <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> most important software development projects. You can think of it as a personal development lab  with various projects that you could customize for your own use upon downloading.
{: .fs-6 .fw-300 }

[Trending projects]({{ site.baseurl }}{% link projects/trending-projects.md %}){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [New releases]({{ site.baseurl }}{% link projects/new-releases.md %}){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## <i class="fas fa-hand-holding-heart" ></i> Welcome 
{: .fs-7}

Welcome to the Toure A. Karim Project Index, a collection of projects and references to help you download and share software packages. TAK Project Index is a core set of various types of personal software projects.

### Stats

| Projects | Releases  | Files     |
|:---------|:----------|:----------|
| 77       | 691       | 3,047     |

---

## <i class="fas fa-archive" ></i> Recent Projects
{: .fs-7 .d-inline-block .mt-1}

New Projects 
{: .label .label-danger}

You can check out here the most recent projects that have been added to TAK PI. This section is designed to present you the five newest projects in this index. You will find here different new projects for you to play with, and much more.

  <ol class="fs-5">
  {% for post in site.posts limit:5 %}
    <li >
        <a href="{{ site.url }}{{ post.url }}">
         <i class="fas fa-file-archive" arial-hidden="true"></i> {{ post.title }}
        </a>
   </li> 
  {% endfor %}
  </ol>

 See all the details in [Browse all projects]({{ site.baseurl }}{% link projects/browse/index.html %}) for more information.

---

## <i class="fas fa-cubes"></i> New Releases
{: .fs-7}

stable
{: .label .label-green }

new-release
{: .label .label-purple }

build-passing
{: .label .label-green }


You may choose to upgrade to the newest project releases with more features or bug fixes.

Hot off the press: the newest project releases

<ul class="fs-5">
  {% for tag in site.tags %}
      {% if tag[0] == "new-release" %}
          {% for post in tag[1] limit:5 %}
            <li >
                <a href="{{ site.url }}{{ post.url }}">
                 <i class="fas fa-cube" arial-hidden="true"></i> {{ post.title }}
                </a>
           </li> 
          {% endfor %}
          {% break %}
      {% endif %}
  {% endfor %}
  </ul>
  
See all [Newest Project Releases]({{ site.baseurl }}{% link projects/new-releases.md %}) for more information.

---

## <i class="fas fa-layer-group"></i> Developer Resources
{: .fs-7}

TAK PI produces a wide variety of projects, code snippets, plugins and other resources that can be useful or helpful. Below is a collection of links to some of the most popular TAK PI resources.

- [<i class="fas fa-link" arial-hidden="true"></i> Frequently Asked Questions]({{ site.baseurl }}{% link resources/faqs.md %})
- [<i class="fas fa-link" arial-hidden="true"></i> How to contribute to a project?]({{ site.baseurl }}{% link resources/contributing.md %})
- [<i class="fas fa-link" arial-hidden="true"></i> Community Code of Conduct]({{ site.baseurl }}{% link resources/conduct.md %})
- [<i class="fas fa-link" arial-hidden="true"></i> What about TAK projects licenses?]({{ site.baseurl }}{% link resources/licensing.md %})
- [<i class="fas fa-link" arial-hidden="true"></i> Tools and Code Snippets]({{ site.baseurl }}{% link snippets/index.md %})
{: .fs-5}

<i class="fas fa-hand-point-right"></i> Find out more about all available [other resources]({{ site.baseurl }}{% link resources/index.md %}).

---

## <i class="fas fa-users"></i> Maintainers
{: .fs-7}

This index is mainly maintained on GitHub by <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> and other contributors. We happily accept any [contributions]({{ site.baseurl }}{% link resources/contributing.md %}) and [feedback]({{ site.baseurl }}{% link issues/feedback.md %}). 😊

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

<i class="fas fa-hand-point-right"></i> See [About TAK PI]({{ site.baseurl }}{% link about/index.md %}) for more information.

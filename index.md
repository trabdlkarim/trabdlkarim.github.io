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

### Find a project

1. Add Just the Docs to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: pmarsceill/just-the-docs
```
<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/pmarsceill/jtd-remote)</small>

### Source Distributions

```bash
$ gem install just-the-docs
```
```yaml
# .. or add it to your your Jekyll site’s Gemfile
gem "just-the-docs"
```
2. Add Just the Docs to your Jekyll site’s `_config.yml`
```yaml
theme: "just-the-docs"
```
3. _Optional:_ Initialize search data (creates `search-data.json`)
```bash
$ bundle exec just-the-docs rake search:init
```
3. Run you local Jekyll server
```bash
$ jekyll serve
```
```bash
# .. or if you're using a Gemfile (bundler)
$ bundle exec jekyll serve
```
4. Point your web browser to [http://localhost:4000](http://localhost:4000)

If you're hosting your site on GitHub Pages, [set up GitHub Pages and Jekyll locally](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll) so that you can more easily work in your development environment.

### Binary Distributions

- [See configuration options]({{ site.baseurl }}{% link help.md %})

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

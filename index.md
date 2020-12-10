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

[Trending projects](#trending-projects){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [New releases](#new-releases){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Welcome

Welcome to the TAK PI, a collection of projects and references to help you download and share software packages.

### Dependencies

Just the Docs is built for [Jekyll](https://jekyllrb.com), a static site generator. View the [quick start guide](https://jekyllrb.com/docs/) for more information. Just the Docs requires no special plugins and can run on GitHub Pages' standard Jekyll compiler. The [Jekyll SEO Tag plugin](https://github.com/jekyll/jekyll-seo-tag) is included by default (no need to run any special installation) to inject SEO and open graph metadata on docs pages. For information on how to configure SEO and open graph metadata visit the [Jekyll SEO Tag usage guide](https://jekyll.github.io/jekyll-seo-tag/usage/).

### Quick start
1. Add Just the Docs to your Jekyll site's `_config.yml` as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/)
```yaml
remote_theme: pmarsceill/just-the-docs
```
<small>You must have GitHub Pages enabled on your repo, one or more Markdown files, and a `_config.yml` file. [See an example repository](https://github.com/pmarsceill/jtd-remote)</small>

### Local installation
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

### Configuration

- [See configuration options]({{ site.baseurl }}{% link help.md %})

---

## Trending Projects

---

## New Releases

---

## Code Snippets

Snippet is a programming term for a small region of re-usable source code, machine code, or text. Ordinarily, these are formally defined operative units to incorporate into larger programming modules. That is why TAK PI doesn't only indexes some important projects, but also it is a pool of code snippets from GitHub gists. They allow you to avoid repetitive typing in the course of routine edit operations.

Find out about [TAK PI Snippets]({{ site.baseurl }}{% link snippets/index.md %}) for more information.

---

## Learn More

Beyond the projects, this index has several other resources:


---


## Maintainers

This index is mainly maintained on GitHub by the <a href="https://github.com/trabdlkarim" target="_blank">@trabdlkarim</a> and other contributors. We happily accept any [contributions and feedback]({{ site.baseurl }}{% link issues/feedback.md %}). 😊

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

See [About TAK PI]({{ site.baseurl }}{% link takpi.md %}) for more information about this project hub.

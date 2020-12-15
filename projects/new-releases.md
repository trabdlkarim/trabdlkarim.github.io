---
layout: page
title: New Releases
parent: Projects
---

# Newest Project Releases

Hot off the press: the newest project releases

stable
{: .label .label-green }

new-release
{: .label .label-purple }

build-passing
{: .label .label-green }

---

<div class="projects">
  {% assign new_release_found = false %}
   {% for tag in site.tags %}
     {% if tag[0] == "new-release" %}
      {% assign new_release_found = true %}
      <ul class="unstyled-list">
      {% for post in tag[1] %}
        <li>
          <a class="project-snippet" href="{{ site.url }}{{ post.url }}">
            <h3 class="project-title">{{ post.title }}</h3>
            <p class="project-desc"> {{ post.excerpt }} </p>
          </a> 
        </li>
      {% endfor %}
      </ul>
      {% break %}
    {% endif %}
  {% endfor %}
{% if new_release_found  != true %}
  <p class="text-small text-grey-dk-000">No new project release found</p>
{% endif %}
</div>

---
layout: page
title: Trending Projects
parent: Projects
nav_order: 1
---

# Trending Projects

Trending projects as downloaded by the community

---

<div class="projects">
  {% assign trending_found = false %}
   {% for tag in site.tags %}
     {% if tag[0] == "trending" %}
      {% assign trending_found = true %}
      <ul class="unstyled-list">
      {% for post in tag[1] %}
        <li>
          <a class="project-snippet" href="{{ site.url }}{{ post.url }}">
            <h3 class="project-title">{{ post.title }}</h3>
            <p class="project-desc"> {{ post.content }} </p>
          </a> 
        </li>
      {% endfor %}
      </ul>
      {% break %}
    {% endif %}
  {% endfor %}
{% if trending_found  != true %}
  <p class="text-small .grey-dk-000">No trending project found</p>
{% endif %}
</div>

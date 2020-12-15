---
layout: default
title: Project Summaries 
parent: Projects
---

# Project Summaries

Summaries and links for the most relevant projects in the space of TAK PI.
{: .fs-6 .fw-300}

---


<div class="projects">
  {% assign summary_found = false %}
   {% for tag in site.tags %}
     {% if tag[0] == "relevant" %}
      {% assign summary_found = true %}
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
{% if summary_found  != true %}
  <p class="text-small text-grey-dk-000">No relevant project found</p>
{% endif %}
</div>

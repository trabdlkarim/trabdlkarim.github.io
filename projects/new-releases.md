---
layout: page
title: New Releases
parent: Projects
nav_order: 2
---

# Hot off the press: the newest project releases

<div class="projects">
  <ul class="unstyled-list">
   {% for tag in site.tags %}
     {% if tag[0] == "new-release" %}
      {% for post in tag[1] %}
        <li>
          <a class="project-snippet" href="{{ site.url }}{{ post.url }}">
            <h3 class="project-title">{{ post.title }}</h3>
            <p class="project-desc"> {{ post.content }} </p>
          </a> 
        </li>
      {% endfor %}
      {% break %}
    {% endif %}
  {% endfor %}
  </ul>
</div>

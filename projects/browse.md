---
layout: page
title: Browse all projects
parent: Projects

pagination:
  enabled: true
---

# Find, download and share packages with the TAK Project Index

---

<div class="posts">
  {% for post in paginator.posts %}
    <div class="post">
      <h1 class="post-title">
        <a href="{{ site.url }}{{ post.url }}">
         {{ post.title }}
        </a>
      </h1>
      <span class="post-date">{{ post.date | date_to_string }}</span>
     {{ post.content }} 
     <p><i class="fas fa-hand-point-right"></i> <a href="{{ site.url }}{{ post.url }}" class="btn btn-primary text-uppercase"> Visit Project GitHub Page</a>.</p>
    </div>
   <hr/>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}/page{{paginator.next_page}}">Previous</a>
  {% else %}
    <span class="pagination-item older">Previous</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="{{ site.baseurl }}/">Next</a>
    {% else %}
      <a class="pagination-item newer" href="{{ site.baseurl }}/page{{paginator.previous_page}}">Next</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Next</span>
  {% endif %}
</div>

{% if paginator.total_pages > 1 %}
<ul>
  {% if paginator.previous_page %}
  <li>
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Newer</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li>
    <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">Older</a>
  </li>
  {% endif %}
</ul>
{% endif %}

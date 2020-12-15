---
layout: page
title: Python Sytle Guide
parent: Source Code Style Guides
grand_parent: Resources
---

# Python Style Guide
{: .no_toc}

The TAK PI styleguide applies to all TAK Projects. This styleguide is a requirement for patches to the projects and a recommendation for other code in the ecosystem.
In general the styleguide closely follows [PEP 8](https://www.python.org/dev/peps/pep-0008/){:target="_blank"} with some small differences and extensions.
{: .fs-6 .fw-300}

---
## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}
---

## General Layout

These are the general code layout rules.

### Indentation

4 real spaces. No tabs, no exceptions.

### Maximum line length

79 characters with a soft limit for 84 if absolutely necessary. Try to avoid deeply nested code by cleverly placing break, continue and return statements.

### Continuing long statements

To continue a statement, use backslashes. Align the next line with the last dot or equal sign, or indent four spaces.

```python
this_is_a_very_long(function_call, 'with many parameters') \
    .that_returns_an_object_with_an_attribute

MyModel.query.filter(MyModel.scalar > 120) \
             .order_by(MyModel.name.desc()) \
             .limit(10)
When breaking in a statement with parentheses or braces, align to the braces.

this_is_a_very_long(function_call, 'with many parameters',
                    23, 42, 'and even more')
For lists or tuples with many items, break immediately after the opening brace.

items = [
    'this is the first', 'set of items', 'with more items',
    'to come in this line', 'like this'
]
```

### Blank lines

Top level functions and classes are separated by two lines, everything else by one. Do not use too many blank lines to separate logical segments in code.

```python
def hello(name):
    print('Hello %s!' % name)

def goodbye(name):
    print('See you %s.' % name)
class MyClass(object):
    """This is a simple docstring"""

    def __init__(self, name):
        self.name = name

    def get_annoying_name(self):
        return self.name.upper() + '!!!!111'
 ```
 
 ---
 
# Expressions and Statements
 
---
 
# Naming Conventions
 
---
 
# Docstrings
 
All docstrings are formatted with reStructuredText as understood by Sphinx. Depending on the number of lines in the docstring, they are laid out differently. If it's just one line, the closing triple quote is on the same line as the opening, otherwise the text is on the same line as the opening quote and the triple quote that closes the string on its own line.

```python
def foo():
    """This is a simple docstring"""


def bar():
    """This is a longer docstring with so much information in
    there that it spans three lines.  In this case the closing
    triple quote is on its own line.
    """
```
The module header consists of an utf-8 encoding declaration (if non ASCII letters are used, but it is recommended all the time) and a standard docstring:

```python
# -*- coding: utf-8 -*-
"""
    package.module
    ~~~~~~~~~~~~~~

    A brief description goes here.

    :copyright: (c) YEAR by AUTHOR.
    :license: LICENSE_NAME, see LICENSE_FILE for more details.
"""
```
 
 ---
 
 # Comments
 
 Rules for comments are similar to docstrings. Both are formatted with reStructuredText. If a comment is used to document an attribute, put a colon after the opening pound sign (`#`). If a comment is on the same line as code, use two spaces before the `#`.

```python
class User(object):
    #: the name of the user as unicode string
    name = Column(String)
    #: the sha1 hash of the password + inline salt
    pw_hash = Column(String)

    _groups = None  # cache groups after loading

```

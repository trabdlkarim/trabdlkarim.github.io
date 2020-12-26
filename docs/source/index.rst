.. TAK PI Documentation master file, created by
   sphinx-quickstart on Fri Jul 17 10:38:59 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to TAK PI Docs
======================

This is the top level of the TAK PI’s technical documentation tree. TAK PI documentation, like the projects themselves, is very much a work in progress; that is especially true as we work to integrate our many scattered documents into a coherent whole. Please note that improvements to the documentation are welcome; send us a feedback if you want to help out.

Getting Started with TAK Project Index 
======================================

These manuals contain overall information about how TAK Projects are developed. The TAK Projects community might be quite large, with thousands of developers contributing over the course of a year. As with any large community, knowing how things are done will make the process of getting your changes merged much easier.

.. toctree::
   :maxdepth: 2
   :caption: Quick Reference
   :glob:

   intro*
   about/projects
   about/snippets
   
.. toctree::
   :maxdepth: 2
   :caption: Licensing
   :glob:
   
   about/licensing
   about/copyright*
   
User-oriented Documentation
===========================

The following manuals are written for users of the TAK Project Index — those who are trying to download and install a given package from a project.

.. toctree::
   :maxdepth: 2
   :caption: Using TAK PI
   :glob:
   
   autodoc
   usage/pack*
   usage/build*
   

Developer Resource Center
=========================

There are several resources and unsorted documents that don’t seem to fit on other parts of the documentation body, or may require some adjustments and/or conversion to ReStructured Text format, or are simply too old.

.. toctree::
   :maxdepth: 2
   :caption: Contributing
   :glob:
   
   resources/contrib*
   usage/conduct*
   resources/styleguide*
   
   
.. toctree::
   :maxdepth: 2
   :caption: Support
   :glob:

   help*
   resources/feedback*
   
   

Indices & Tables
================

* :ref:`genindex`

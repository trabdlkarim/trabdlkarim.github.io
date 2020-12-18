---
layout: page
title: Contributing
parent: Resources
---

# Contribution Guidelines
{: .no_toc}

`This page is under construction, some of its sections might not be complete.`

First of all, thanks for taking the time to read this contribution guidelines!
{: .fs-6 .fw-300}

The following is a set of guidelines for contributing to TAK projects and its packages, which are hosted in the [@trabdlkarim repos](https://github.com/trabdlkarim){:target="_blank"} on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a [feedback]({{ site.url}}{% link issues/feedback.md %}).

This guide covers ways in which you can become a part of the ongoing development of TAK Projects.

---

## Contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---

## Code of Conduct

The TAK projects and everyone participating in them are governed by the [TAK PI Code of Conduct]({% link resources/conduct.md %}). By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@trabdlkarim.com](mailto:contact@trabdlkarim.com).

---

## I don't want to read this whole thing I just have a question!!!


We have an official message board with a detailed FAQ and where the community chimes in with helpful advice if you have questions.
* [Common Questions & Answers]({% link resources/faqs.md %})
* [Send feedback]({% link issues/feedback.md %})


**Note:** Please **DO NOT** file an issue to ask a question. You'll get faster results by using the resources below.

---

## How Can I Contribute?

### Did you find a bug?
{: .mb-5}

- Do not open up a GitHub issue if the bug is a security vulnerability, and instead send us [a security feedback]({% link issues/feedback.md %}).

- Ensure the bug was not already reported by searching on GitHub under Issues.

- If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a title and clear description, as much relevant information as possible, and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

- If possible, use the relevant [bug report template]({% link issues/templates.md %}#bug-report-template) to create the issue. Simply copy the content of the appropriate template, make the necessary changes to demonstrate the issue, and paste the content into the issue description.

- For more detailed information on submitting a bug report and creating an issue, visit our [bug reporting guidelines]({% link issues/bug-report.md %}#reporting-bugs-in-github).

### Pull Requests
{: .mb-5}

The process described here has several goals:

- Maintain Projects' quality
- Fix problems that are important to users
- Engage the community in working toward the best possible solution
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [Git Commit Messages](#git-commit-messages)
2. Follow the [styleguides]({% link resources/styleguides/index.md %})
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/){:target="_blank"} are passing

**What if the status checks are failing?**

If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.


While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

### Git Commit Messages
{: .mb-5}

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * `:art:` when improving the format/structure of the code
    * `:racehorse:` when improving performance
    * `:non-potable_water:` when plugging memory leaks
    * `:memo:` when writing docs
    * `:penguin:` when fixing something on Linux
    * `:apple:` when fixing something on macOS
    * `:checkered_flag:` when fixing something on Windows
    * `:bug:` when fixing a bug
    * `:fire:` when removing code or files
    * `:green_heart:` when fixing the CI build
    * `:white_check_mark:` when adding tests
    * `:lock:` when dealing with security
    * `:arrow_up:` when upgrading dependencies
    * `:arrow_down:` when downgrading dependencies
    * `:shirt:` when removing linter warnings


### Did you write a patch that fixes a bug?
{: .mb-5}

- Open a new GitHub pull request with the patch.

- Ensure the **Pull Request** description clearly describes the problem and solution. Include the relevant issue number if applicable.

- Before submitting, please read the [source code styleguides]({% link resources/styleguides/index.md %}) to know more about coding conventions and benchmarks.


### Suggesting Enhancements
{: .mb-5}

**Do you intend to add a new feature or change an existing one?**

- Suggest your change by sending us [an enhancement suggestion feedback]({% link issues/feedback.md %}) using [this feature suggestion template]({% link issues/templates.md %}#feature-suggestion-template) and start writing code.

- Do not open an issue on GitHub until you have collected positive feedback about the change. GitHub issues are primarily intended for bug reports and fixes.

- For more detailed information on submitting a feature suggestion about a project, visit our [enhancement suggestion guidelines]({% link issues/bug-report.md %}#suggesting-enhancements).

---

## Additional Notes

TAK Projects are works of volunteers. We encourage you to pitch in and join the community!

Thanks <i class="fa fa-heart text-danger"></i> <i class="fa fa-heart text-danger"></i> <i class="fa fa-heart text-danger"></i> !!!

.PHONY: templates


MAINTAINER := $(shell head -n 1 MAINTAINER.md)


all: list

templates:
	sed -i -E "s/@(\w*)/@$(MAINTAINER)/" .github/issue_template.md
	sed -i -E "s/@(\w*)/@$(MAINTAINER)/" .github/pull_request_template.md

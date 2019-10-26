.PHONY: templates


LEAD := $(shell head -n 1 LEAD.md)


all: list

templates:
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/issue_template.md
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/pull_request_template.md

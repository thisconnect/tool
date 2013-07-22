REPORTER = spec # list

all: test

test:
	@./node_modules/.bin/mocha --reporter $(REPORTER) ./test/*

.PHONY: test

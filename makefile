export PATH := $(shell pwd)/node_modules/.bin/:$(PATH)

REPORTER = spec # list

all: test

test:
	@mocha --reporter $(REPORTER) ./test/*

.PHONY: test

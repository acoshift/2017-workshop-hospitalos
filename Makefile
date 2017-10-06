TESTS = $(shell find microservices/auth/test -name "*.test.js")
TESTS += $(shell find microservices/user/test -name "*.test.js")

default:
	# make build -- run test and build
	# make test -- run test

build: test build-frontend

test:
	nyc mocha $(TESTS)

build-frontend:
	make -C timesheet-frontend

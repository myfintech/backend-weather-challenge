# run the test suite
test.all:
	pnpm run test
.PHONY: test.all

# run the test suite and re-run when files change
test.watch:
	pnpm run test:watch
.PHONY: test.watch
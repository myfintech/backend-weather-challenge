# run the server test suite
test.all:
	pnpm run test
.PHONY: server.test.all

# run the server test suite and re-run when files change
test.watch:
	pnpm run test:watch
.PHONY: server.test.watch
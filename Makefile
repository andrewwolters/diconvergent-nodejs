.PHONY: install test clean

install:
	docker run --rm -v $(shell pwd):/app -w /app node:alpine npm install

test:
	docker run --rm -v $(shell pwd):/app -w /app node:alpine npm test

clean:
	rm -rf node_modules


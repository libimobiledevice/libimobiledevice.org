.PHONY: development production watch watch-production

all: production

composer.lock:
	@composer update

yarn.lock:
	@if [ ! -f ./yarn.lock ]; then yarn --silent install; else yarn --silent upgrade; fi

data/github:
	@./bin/github-download-organization-repos-latest-releases-data libimobiledevice

watch: export CECIL_DEBUG=true
watch: composer.lock yarn.lock data/github
	@rm -rf .cache && ln -sf config.development.yml config.yml && ./vendor/bin/cecil serve

watch-production: export CECIL_DEBUG=false
watch-production: composer.lock yarn.lock data/github
	@rm -rf .cache && ln -sf config.production.yml config.yml && ./vendor/bin/cecil serve

development: export CECIL_DEBUG=true
development: composer.lock yarn.lock data/github
	@rm -rf .cache && ln -sf config.$@.yml config.yml && ./vendor/bin/cecil -vvv build

production: composer.lock yarn.lock data/github
	@rm -rf .cache && ln -sf config.$@.yml config.yml && ./vendor/bin/cecil -vvv build

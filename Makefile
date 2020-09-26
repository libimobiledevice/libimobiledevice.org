.PHONY: development production watch watch-production

all:

composer.lock:
	@composer update

yarn.lock:
	@yarn upgrade

data/github:
	@./bin/github-download-organization-repos-latest-releases-data libimobiledevice

watch: export CECIL_DEBUG=true
watch: composer.lock yarn.lock data/github
	@rm -rf .cache && ./vendor/bin/cecil serve --config config.development.yml

watch-production: export CECIL_DEBUG=false
watch-production: composer.lock yarn.lock data/github
	@rm -rf .cache && ./vendor/bin/cecil serve --config config.production.yml

development: export CECIL_DEBUG=true
development: composer.lock yarn.lock data/github
	@rm -rf .cache && ./vendor/bin/cecil build --config config.$@.yml

production: composer.lock yarn.lock data/github
	@rm -rf .cache && ./vendor/bin/cecil build --config config.$@.yml

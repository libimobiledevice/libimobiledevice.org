.PHONY: development production watch watch-production assets/vendor

all: production

composer.lock:
	@composer update

package-lock.json:
	@if [ ! -f ./package-lock.json ]; then npm install --silent; else npm update --silent; fi

assets/vendor: package-lock.json
	@node bin/copy-vendor-assets.js && node bin/build-fontawesome.js

data/github:
	@./bin/github-download-organization-repos-latest-releases-data libimobiledevice

watch: export CECIL_DEBUG=true
watch: composer.lock package-lock.json assets/vendor data/github
	@rm -rf .cache && ./vendor/bin/cecil serve

watch-production: export CECIL_DEBUG=false
watch-production: composer.lock package-lock.json assets/vendor data/github
	@rm -rf .cache && ./vendor/bin/cecil serve --config=config.production.yml

development: export CECIL_DEBUG=true
development: composer.lock package-lock.json assets/vendor data/github
	@rm -rf .cache && ./vendor/bin/cecil -vvv build

production: export CECIL_DEBUG=true
production: composer.lock package-lock.json assets/vendor data/github
	@rm -rf .cache && ./vendor/bin/cecil -vvv build --config=config.$@.yml

.PHONY: css build watch serve

css:
	gulp pkgcss

build: css
	stylemark -i docs/ -o dist

watch: css
	stylemark -i docs/ -o dist -w

serve: css
	stylemark -i docs/ -o dist -b -w

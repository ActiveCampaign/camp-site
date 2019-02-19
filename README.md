# 🏕 camp-site

> The official website for Camp

## Getting Started
The first time you spin up this repo:
```
npm install -g stylemark gulp-cli
npm install
```

## Make Commands
There are commands you can run to generate the styleguide:
  - `make css` to bundle all CSS files in `dev/` folder
  - `make build` to _only_ update the generated distributable files
  - `make watch` to update the files _and_ update on change
  - `make serve` to update the files, update on change _and_ serve them locally

Be aware that _only_ changes in the docs folder are automatically reloaded. CSS changes made to files in `dev/` require the re-running of one of the three `build`, `watch`, or `serve`.

## Contributing
Stylemark can be interacted with without the need to edit CSS files. All documentation can be found in the `docs/` folder and vanilla [Markdown](https://daringfireball.net/projects/markdown/syntax). See the [Stylemark Spec](https://github.com/nextbigsoundinc/stylemark/blob/master/README-SPEC.md) for how to write KSS.

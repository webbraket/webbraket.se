## Dependencies
Detta projekt kräver att `node`, `npm` och `gulp` alla finns tillgängliga i din PATH. Övriga dependencies installeras genom `npm` och finns alltså specificerade i `package.json`.

## Getting started

__1. Installera Git__

Om du inte redan har git, läs mer på [git-scm.com](https://git-scm.com).


__2. Installera Node__

Om du inte redan har `node`, läs mer på [nodejs.org](https://nodejs.org/).


__3. Installera Gulp__

Om du inte har `gulp` tillgängligt i din PATH, behöver du installera det, genom `npm`. Alltså `$ npm install -g gulp`. Dokumentation för `gulp` hittar du på deras webbplats [gulp](http://gulpjs.com/).


__4. Klona repo:t__

`$ git clone git@github.com:webbraket/webbraket.se.git`


__5. Öppna mappen__

`$ cd webbraket.se`


__6. Hämta projektets dependencies__

Använd `npm` för att installera projektets övriga dependencies. Alltså `$ npm install`.


__7. Kör tasks__

Nu är det bara att köra tasks genom gulp (läs mer nedan). Have a beer and celebrate!


## Tasks
När alla dependencies är installerade är det bara att börja köra tasks. Du kan kolla i `gulpfile.js` för att närmare undersöka vilka tasks som finns och vad de gör. Men grundläggande tasks finns beskrivna här:





```bash
$ gulp
# Alias för `gulp watch:development`

$ gulp watch:development
# Webbserver på http://localhost:8080, bygger till 'build', livereload.

$ gulp watch:production
# Som ovan fast för `production`.

$ gulp build:development
# Bygger till mappen `build` utan att minifiera.

$ gulp build:production
# Bygger till mappen `build` med minifiering.

$ gulp publish
# Publicerar till Github Pages (dvs live).
```




## Struktur
Källkod finns i mappen `src`. Genererad build finns i mappen `build` (om mappen inte finns så är det för att du inte ännu kört någon task som skapar en build).


## Publicering
webbraket.se hostas genom [Github Pages](https://pages.github.com/).


## Branches
Vi använder tre branches.

- __development__
Arbeta _alltid_ i denna branch och _aldrig_ direkt i någon annan branch.

- __master__
Denna branch ska _alltid_ innehålla [produktionsredo](https://agilewarrior.wordpress.com/2011/01/04/production-readiness/) kod. Commits i denna branch uppstår genom merges med development.

- __gh-pages__
Denna branch innehåller vår live build och ska således aldrig manuellt arbetas med.


## Workflow
Arbeta i development. När development har nått ett produktionsredo stadie, gå över till master. Merge:a development in i master. Använd gulp för att publicera master till gh-pages.

__Viktigt__: När du merge:ar development in i master, tillåt inte fast-forward -- använd `--no-ff`.

Med andra ord...

```
$ git checkout development
... do some work ...
$ git add -A
$ git commit -m "Add a fancy message about a fancy feature"
$ git checkout master
$ git merge development --no-ff
$ gulp publish
```

## Style guide
#### Block quotes
```markup
<!-- Med attribution och verk -->
<figure>
  <blockquote>Where our universe lies in the space of all possible universes.</blockquote>
  <figcaption>Stephen Wolfram, <cite>A New Kind Of Science</cite></figcaption>
</figure>
```
Läs mer om varför vi använder denna stil för blockquotes [här](http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required).

## Dependencies
Detta projekt kr�ver att `node`, `npm` och `gulp` alla finns tillg�ngliga i din PATH. �vriga dependencies installeras genom `npm` och finns allts� specificerade i `package.json`.

## Getting started

__1. Installera Git__
Om du inte redan har git, l�s mer p� [git-scm.com](https://git-scm.com).

__2. Installera Node__
Om du inte redan har `node`, l�s mer p� [nodejs.org](https://nodejs.org/).

__3. Installera Gulp__
Om du inte har `gulp` tillg�ngligt i din PATH, beh�ver du installera det, genom `npm`. Allts�...

`$ npm install -g gulp`

Dokumentation f�r `gulp` hittar du p� deras webbplats [gulp](http://gulpjs.com/).

__4. Klona repo:t__
`$ git clone git@github.com:webbraket/webbraket.se.git`

__5. �ppna mappen__
`$ cd webbraket.se`

__6. H�mta projektets dependencies__
Anv�nd `npm` f�r att installera projektets �vriga dependencies. Allts�...

`$ npm install`

__7. K�r tasks__
Nu �r det bara att k�ra tasks genom gulp (l�s mer nedan). Have a beer and celebrate!

## Tasks
N�r alla dependencies �r installerade �r det bara att b�rja k�ra tasks. Du kan kolla i `gulpfile.js` f�r att n�rmare unders�ka vilka tasks som finns och vad de g�r. Men grundl�ggande tasks finns beskrivna h�r:

__`$ gulp`__
Alias f�r `gulp watch:development`

__`$ gulp watch:development`__
Startar en statisk webbserver p� `http://localhost:8080` som automatiskt laddas om vid filf�r�ndringar i `src`. Bygger filer f�r `development` till mappen `build`.

__`$ gulp watch:production`__
Som ovan fast f�r `production`.

__`$ gulp build:development`__
Bygger till mappen `build` utan att minifiera.

__`$ gulp build:production`__
Bygger till mappen `build` med minifiering.


__`$ gulp compile`__
Kompilerar allt i mappen `src` och placerar resultatet i `dist`. Notera att �ven filen `index.html` genereras. Detta eftersom `Github Pages` (som anv�nds f�r publicering) kr�ver en index-fil i roten av projektet. L�s mer om `Github Pages` [h�r](http://pages.github.com/).

__`$gulp server`__
Startar en server som serverar webbsidan p� `localhost:4000`.

__`$ gulp watch`__
Startar en server, en livereload-server och lyssnar sedan p� filf�r�ndringar. Vid f�r�ndring i `src`-mappen kompileras projektet om och webbl�saren livereload:ar. Servern hittas under `localhost:4000`.

__`$ gulp publish`__
Publicera till Github Pages.



## Struktur
K�llkod finns i mappen `src`. Genererad build finns i mappen `build` (om mappen inte finns s� �r det f�r att du inte �nnu k�rt n�gon task som skapar en build).


## Publicering
webbraket.se hostas genom [Github Pages](https://pages.github.com/).


## Branches
Vi anv�nder tre branches.

- __development__
Arbeta _alltid_ i denna branch och _aldrig_ direkt i n�gon annan branch.

- __master__
Denna branch ska _alltid_ inneh�lla [produktionsredo](https://agilewarrior.wordpress.com/2011/01/04/production-readiness/) kod. Commits i denna branch uppst�r genom merges med development.

- __gh-pages__
Denna branch inneh�ller v�r live build och ska s�ledes aldrig manuellt arbetas med.


## Workflow
Arbeta i development. N�r development har n�tt ett produktionsredo stadie, g� �ver till master. Merge:a development in i master. Anv�nd gulp f�r att publicera master till gh-pages.

__Viktigt__: N�r du merge:ar development in i master, till�t inte fast-forward -- anv�nd `--no-ff`.

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


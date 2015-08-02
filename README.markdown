## Dependencies
Detta projekt kr�ver att `node`, `npm` och `gulp` alla finns tillg�ngliga i din PATH. �vriga dependencies installeras genom `npm` och finns allts� specificerade i `package.json`.

### 1) Installera Gulp
Om du inte har `gulp` tillg�ngligt i din PATH, beh�ver du installera det. Allts�...

`$ npm install -g gulp`

Dokumentation f�r `gulp` hittar du p� deras webbplats [gulp](http://gulpjs.com/).

### 2) H�mta �vriga dependencies
Anv�nd `npm` f�r att installera projektets �vriga dependencies. Allts�...

`$ npm install`

## Tasks
N�r alla dependencies �r installerade �r det bara att b�rja k�ra tasks. Du kan kolla i `gulpfile.js` f�r att n�rmare unders�ka vilka tasks som finns och vad de g�r. Men de som du oftast kommer beh�va k�ra �r f�ljande.


- `$ gulp compile` Kompilerar allt i mappen `src` och placerar resultatet i `dist`. Notera att �ven filen `index.html` genereras. Detta eftersom `Github Pages` (som anv�nds f�r publicering) kr�ver en index-fil i roten av projektet. L�s mer om `Github Pages` [h�r](http://pages.github.com/).

- `$gulp server` Startar en server som serverar webbsidan p� `localhost:4000`.

- `$ gulp watch` Startar en server, en livereload-server och lyssnar sedan p� filf�r�ndringar. Vid f�r�ndring i `src`-mappen kompileras projektet om och webbl�saren livereload:ar. Servern hittas under `localhost:4000`.



## Skapa kapitel
F�r att skapa ett kapitel r�cker det med att du skapar en fil under `src/chapters/*.jade` som f�ljer namngivningskonventionen:
```
[part_number]-[chapter_number]-[part_name]-[chapter_name].jade
```
Exempelvis:
```
02-02-html-kommentarer.jade
```

Sen �r det bara att skriva p�. Resten genereras. Kolla in n�got annat kapitel f�r att vara s�ker p� att du f�ljer konventionerna.

### Viktigt
- Ett kapitel f�r endast inneh�lla antingen `<h1>` eller en `<h2>`. Endast **en** g�ng p� fil.
- `<h1>` f�r endast f�rekomma i f�rsta kapitlet f�r en ny del ("part"). Anv�nd i alla andra fall `<h2>`.

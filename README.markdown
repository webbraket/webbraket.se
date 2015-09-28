
# How to contribute
Webbraket vill bli sveriges st�rsta utbildningsresurs f�r webbutveckling. Det b�sta s�ttet att n� det m�let, tror vi, �r att arbeta tillsammans.

Detta �r ett projekt f�r studenter, drivet av studenter.

Detta initiativ drivs av en grupp studenter vid Uppsala Universitet, men hj�lp mottas sj�lvklart gladeligen ifr�n alla h�ll och kanter. Om du hittar n�got som verkar galet s� blir vi mer �n glada om du skickar en *pull request*.

Att bidra till Webbraket �r inte bara nyttigt f�r din egen utveckling och ditt CV, utan hj�lper �ven hundratals nya studenter som varje �r befattar sig med denna resurs. Om du vill bidra mer permanent, och bli en del av ett team, l�s vidare nedan.


## Core contributors
Vi v�lkomnar varmt alla som vill vara en del av ett team och hj�lpa oss att driva Webbraket. Kontakta n�gon i core-team om du vill ans�ka till ett team. Om du vill arbeta med kod s� ber vi dig att f�rst skicka en pull-request med valfri fix till n�got av v�ra repo:n innan du skickar din ans�kan. F�r n�rvarande accepterar vi endast studenter som antagna p� ett program under Informatik och Media vid Uppsala Universitet, vilket sj�lvklart inkluderar Campus Gotland.

Vi arbetar f�r nuvarande i nedan team:

**Developers**
Arbetar med webbraketens back-end. Repositories, static site generation, deployment etc. Bash, node, ssh, git etc.

**Designers**
Arbetar med webbraketens front-end. UX s�v�l som design. Genom HTML, CSS, JavaScript etc. Underh�ller Webbraketens style guide.

**Curators**
Arbetar med webbraketens content. Text, kodexempel, bilder, struktur etc.

**Marketing**
Arbetar med strategisk positionering. N�rvaro i social media, kontakt med universitet och n�ringsliv, etc.

**Styrelse**
Detta �r ett f�tal personer som �r anst�llda vid Uppsala Universitet, med full commit access. Denna grupp har r�tt att ut�va veto i alla fr�gor. Detta veto ska ej anv�ndas men finns av s�kerhetssk�l d� Informatik och Media vid Uppsala Universitet st�djer detta projekt.


## Pull requests
Vem du �n �r annars s� �r du mer �n v�lkommen att skicka en pull request f�r vad som helst. All webbraketskod �r �ppen, med sj�lvklart undantag f�r vissa l�senordsmoduler.

__Hittat en bugg?__
Skicka g�rna en *pull request* eller skapa en *issue* i respektive repository.


# Uppsatser och Forskning
Om du ska skriva en kandidat-, masteruppsats eller �r forskare s� �r du varmt v�lkommen att kontakta oss. Vi �r en sj�lvorganiserad grupp av studenter som producerar �ppen k�llkod, s� det finns utrymme f�r m�nga intressanta m�jligheter f�r forskningsarbeten. V�nligen kontakta i f�rsta hand n�gon i gruppen Styrelsen.



# Historia
- __2013 HT__
htmlhunden.se registreras och byggds upp utav Christopher Okhravi och Madelen Hermelin med st�d ifr�n Owen Eriksson och Anneli Edman. M�let �r att ers�tta den tekniska kurslitteraturen i kursen _E-tj�nster och webbprogrammering_.

- __2014 VT__
htmlhunden.se anv�nds bl.a. i kurserna _E-tj�nster och webbprogrammering_ samt _Multimedia_.

- __2014 HT__
htmlhunden.se anv�nds bl.a. i kursen _Grundl�ggande Multimedia_.

- __2015 VT__
htmlhunden.se anv�nds bl.a. i kurserna _E-tj�nster och webbprogrammering_ samt _Multimedia_.

- __2015 sommar__
htmlhunden.se doneras av Christopher och Madelen till det, av samma personer, nystartade projektet Webbraket. Namnbyte sker f�r att undestryka att detta (1) �r ett studentdrivet projekt, samt (2) �r ett projekt med holistisk syn p� webbutveckling.


# Fr�gor
Vid tekniska fr�gor v�nligen kontakta n�gon i Developers. Vid �vriga fr�gor v�nligen kontakta Styrelsen.


# Styrelsen
Nedan f�ljer kort information om Webbraketens styrelse.

## Stadgar
1. Styrelsen skall alltid best� av ett oj�mnt antal personer, och minst tre.
1. Majoriteten av styrelsen skall vara fast anst�lld vid Uppsala Universitet.
1. F�r�ndringar i stadgarna m�ste godk�nnas av en majoritet i styrelsen.
1. En styrelsemedlem kan endast r�stas ut av en majoritet i styrelsen.
1. En ny styrelsemedlem m�ste godk�nnas av en majoritet av styrelsen.
1. Ordf�rande sitter ett �r och v�ljs p� eller n�ra efterf�ljande den 1:a Februari.
1. Om inga nomineringar eller sj�lvnomineringar till ny ordf�rande har inkommit till den 1:a Februari forts�tter sittande ordf�rande som ordf�rande.
1. Styrelsemedlemmarnas uppgift �r att strategiskt styra, och operationellt m�jligg�ra organisationens fortlevnad och expansion.

## Medlemmar
- Christopher Okhravi <christopher.okhravi@im.uu.se> (ordf�rande)
- Madelen Hermelin <madelen.hermelin@im.uu.se>
- John Larsson <john.larsson@im.uu.se>


# Disclaimer
Detta projekt �r f�r nuvarande ej vinstdrivet och kostnader t�cks av individer i projektet. Slutprodukten kommer alltid vara gratis f�r slutkonsumenten.

Webbraket representerar inte Uppsala Universitets �sikter i n�gon fr�ga. Projektet drivs ej av Uppsala Universitet, utan av studenter antagna p� systemvetenskapliga program vid Uppsala Universitet och Campus Gotland. Styrelsen best�r av anst�llda p� Uppsala Universitet. Projektet �r startat av l�rare vid Uppsala Universitet och anv�nds som utbildningsmaterial i utvalda kurser, men b�r ses som extern resurs utifr�n Uppsala Universitets perspektiv.

## Dependencies
Detta projekt kr�ver att `node`, `npm` och `gulp` alla finns tillg�ngliga i din PATH. �vriga dependencies installeras genom `npm` och finns allts� specificerade i `package.json`.

## Getting started

__1. Installera Git__

Om du inte redan har git, l�s mer p� [git-scm.com](https://git-scm.com).


__2. Installera Node__

Om du inte redan har `node`, l�s mer p� [nodejs.org](https://nodejs.org/).


__3. Installera Gulp__

Om du inte har `gulp` tillg�ngligt i din PATH, beh�ver du installera det, genom `npm`. Allts� `$ npm install -g gulp`. Dokumentation f�r `gulp` hittar du p� deras webbplats [gulp](http://gulpjs.com/).


__4. Klona repo:t__

`$ git clone git@github.com:webbraket/webbraket.se.git`


__5. �ppna mappen__

`$ cd webbraket.se`


__6. H�mta projektets dependencies__

Anv�nd `npm` f�r att installera projektets �vriga dependencies. Allts� `$ npm install`.


__7. K�r tasks__

Nu �r det bara att k�ra tasks genom gulp (l�s mer nedan). Have a beer and celebrate!


## Tasks
N�r alla dependencies �r installerade �r det bara att b�rja k�ra tasks. Du kan kolla i `gulpfile.js` f�r att n�rmare unders�ka vilka tasks som finns och vad de g�r. Men grundl�ggande tasks finns beskrivna h�r:





```bash
$ gulp
# Alias f�r `gulp watch:development`

$ gulp watch:development
# Webbserver p� http://localhost:8080, bygger till 'build', livereload.

$ gulp watch:production
# Som ovan fast f�r `production`.

$ gulp build:development
# Bygger till mappen `build` utan att minifiera.

$ gulp build:production
# Bygger till mappen `build` med minifiering.

$ gulp publish
# Publicerar till Github Pages (dvs live). Publicera alltid ifr�n master-branch.
```




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

## Style guide
Anv�nd [Markdown](http://daringfireball.net/projects/markdown/)-syntax i st�rsta m�jliga m�n och undvik ad-hoc-HTML. Eftersom Markdown �r v�ldigt limiterat kommer vi ju tyv�rr inte undan. F�rs�k is�fall h�lla dig till f�ljande undantag. Om du introducerar nya undantag, v�nligen skriv om de h�r i README:n.

#### Block quotes with attribution
L�s mer om varf�r vi anv�nder denna stil f�r blockquotes [h�r](http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required).
```markup
<figure>
  <blockquote>Where our universe lies in the space of all possible universes.</blockquote>
  <figcaption>Stephen Wolfram, <cite>A New Kind Of Science</cite></figcaption>
</figure>
```

#### Code examples (iframe)
```markup
<figure class="example">
  <iframe src="examples/example-name"></iframe>
</figure>
```

#### Boxes
F�r att skapa den d�r klassiska l�roboksk�nslan :) Info-boxen anv�nds f�r by-the-way information, och warning-boxen anv�nds f�r se-upp-notiser.
```markup
<div class="box-info"> ... </div>
<div class="box-warning"> ... </div>
```


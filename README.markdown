
# How to contribute
Webbraket vill bli sveriges största utbildningsresurs för webbutveckling. Det bästa sättet att nå det målet, tror vi, är att arbeta tillsammans.

Detta är ett projekt för studenter, drivet av studenter.

Detta initiativ drivs av en grupp studenter vid Uppsala Universitet, men hjälp mottas självklart gladeligen ifrån alla håll och kanter. Om du hittar något som verkar galet så blir vi mer än glada om du skickar en *pull request*.

Att bidra till Webbraket är inte bara nyttigt för din egen utveckling och ditt CV, utan hjälper även hundratals nya studenter som varje år befattar sig med denna resurs. Om du vill bidra mer permanent, och bli en del av ett team, läs vidare nedan.


## Core contributors
Vi välkomnar varmt alla som vill vara en del av ett team och hjälpa oss att driva Webbraket. Kontakta någon i core-team om du vill ansöka till ett team. Om du vill arbeta med kod så ber vi dig att först skicka en pull-request med valfri fix till något av våra repo:n innan du skickar din ansökan. För närvarande accepterar vi endast studenter som antagna på ett program under Informatik och Media vid Uppsala Universitet, vilket självklart inkluderar Campus Gotland.

Vi arbetar för nuvarande i nedan team:

**Developers**
Arbetar med webbraketens back-end. Repositories, static site generation, deployment etc. Bash, node, ssh, git etc.

**Designers**
Arbetar med webbraketens front-end. UX såväl som design. Genom HTML, CSS, JavaScript etc. Underhåller Webbraketens style guide.

**Curators**
Arbetar med webbraketens content. Text, kodexempel, bilder, struktur etc.

**Marketing**
Arbetar med strategisk positionering. Närvaro i social media, kontakt med universitet och näringsliv, etc.

**Styrelse**
Detta är ett fåtal personer som är anställda vid Uppsala Universitet, med full commit access. Denna grupp har rätt att utöva veto i alla frågor. Detta veto ska ej användas men finns av säkerhetsskäl då Informatik och Media vid Uppsala Universitet stödjer detta projekt.


## Pull requests
Vem du än är annars så är du mer än välkommen att skicka en pull request för vad som helst. All webbraketskod är öppen, med självklart undantag för vissa lösenordsmoduler.

__Hittat en bugg?__
Skicka gärna en *pull request* eller skapa en *issue* i respektive repository.


# Uppsatser och Forskning
Om du ska skriva en kandidat-, masteruppsats eller är forskare så är du varmt välkommen att kontakta oss. Vi är en självorganiserad grupp av studenter som producerar öppen källkod, så det finns utrymme för många intressanta möjligheter för forskningsarbeten. Vänligen kontakta i första hand någon i gruppen Styrelsen.



# Historia
- __2013 HT__
htmlhunden.se registreras och byggds upp utav Christopher Okhravi och Madelen Hermelin med stöd ifrån Owen Eriksson och Anneli Edman. Målet är att ersätta den tekniska kurslitteraturen i kursen _E-tjänster och webbprogrammering_.

- __2014 VT__
htmlhunden.se används bl.a. i kurserna _E-tjänster och webbprogrammering_ samt _Multimedia_.

- __2014 HT__
htmlhunden.se används bl.a. i kursen _Grundläggande Multimedia_.

- __2015 VT__
htmlhunden.se används bl.a. i kurserna _E-tjänster och webbprogrammering_ samt _Multimedia_.

- __2015 sommar__
htmlhunden.se doneras av Christopher och Madelen till det, av samma personer, nystartade projektet Webbraket. Namnbyte sker för att undestryka att detta (1) är ett studentdrivet projekt, samt (2) är ett projekt med holistisk syn på webbutveckling.


# Frågor
Vid tekniska frågor vänligen kontakta någon i Developers. Vid övriga frågor vänligen kontakta Styrelsen.


# Styrelsen
Nedan följer kort information om Webbraketens styrelse.

## Stadgar
1. Styrelsen skall alltid bestå av ett ojämnt antal personer, och minst tre.
1. Majoriteten av styrelsen skall vara fast anställd vid Uppsala Universitet.
1. Förändringar i stadgarna måste godkännas av en majoritet i styrelsen.
1. En styrelsemedlem kan endast röstas ut av en majoritet i styrelsen.
1. En ny styrelsemedlem måste godkännas av en majoritet av styrelsen.
1. Ordförande sitter ett år och väljs på eller nära efterföljande den 1:a Februari.
1. Om inga nomineringar eller självnomineringar till ny ordförande har inkommit till den 1:a Februari fortsätter sittande ordförande som ordförande.
1. Styrelsemedlemmarnas uppgift är att strategiskt styra, och operationellt möjliggöra organisationens fortlevnad och expansion.

## Medlemmar
- Christopher Okhravi <christopher.okhravi@im.uu.se> (ordförande)
- Madelen Hermelin <madelen.hermelin@im.uu.se>
- John Larsson <john.larsson@im.uu.se>


# Disclaimer
Detta projekt är för nuvarande ej vinstdrivet och kostnader täcks av individer i projektet. Slutprodukten kommer alltid vara gratis för slutkonsumenten.

Webbraket representerar inte Uppsala Universitets åsikter i någon fråga. Projektet drivs ej av Uppsala Universitet, utan av studenter antagna på systemvetenskapliga program vid Uppsala Universitet och Campus Gotland. Styrelsen består av anställda på Uppsala Universitet. Projektet är startat av lärare vid Uppsala Universitet och används som utbildningsmaterial i utvalda kurser, men bör ses som extern resurs utifrån Uppsala Universitets perspektiv.

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
# Publicerar till Github Pages (dvs live). Publicera alltid ifrån master-branch.
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
Använd [Markdown](http://daringfireball.net/projects/markdown/)-syntax i största möjliga mån och undvik ad-hoc-HTML. Eftersom Markdown är väldigt limiterat kommer vi ju tyvärr inte undan. Försök isåfall hålla dig till följande undantag. Om du introducerar nya undantag, vänligen skriv om de här i README:n.

#### Block quotes with attribution
Läs mer om varför vi använder denna stil för blockquotes [här](http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required).
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
För att skapa den där klassiska lärobokskänslan :) Info-boxen används för by-the-way information, och warning-boxen används för se-upp-notiser.
```markup
<div class="box-info"> ... </div>
<div class="box-warning"> ... </div>
```


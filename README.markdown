__Webbraket vill bli sveriges största utbildningsresurs för webbutveckling. Det bästa sättet att nå det målet tror vi är att arbeta tillsammans.__

Detta är ett projekt för studenter, drivet av studenter. Detta initiativ drivs av en grupp studenter vid Uppsala Universitet men hjälp mottas självklart gladeligen ifrån alla håll och kanter. Om du hittar något som verkar galet så blir vi mer än glada om du skickar en *pull request*.

Att bidra till Webbraket är inte bara nyttigt för din egen utveckling och ditt CV, utan hjälper även hundratals nya studenter som varje år befattar sig med denna resurs. Om du vill bidra mer regelbundet och bli en del av ett team så läs vidare nedan.


1. [How to contribute](#how-to-contribute)
    1. [Hittat en bugg?](#issues)
    1. [Pull requests](#pull-requests)
    1. [Branches](#branches)
    1. [Dependencies](#dependencies)
    1. [Style guide](#style-guide)
1. [Quickstart](#quickstart)
    1. [Struktur](#struktur)
    1. [Tasks](#tasks)
    1. [Publicering](#publicering)
    1. [Workflow](#workflow)
1. [Project Management](#project-management)
    1. [Slack](#slack)
    1. [Weekly video](#weekly-video)
    1. [Kalender](#kalender)
    1. [Meetups](#meetups)
1. [Om projektet](#om-projektet)
    1. [Core contributors](#core-contributors)
    1. [Uppsatser och forskning](#uppsatser-och-forskning)
    1. [Historia](#historia)
    1. [Kontakt](#kontakt)
    1. [Styrelsen](#styrelsen)
        1. [Stadgar](#stadgar)
        1. [Medlemmar](#medlemmar)
1. [Disclaimer](#disclaimer)
1. [License](#license)




[wiki]: https://github.com/webbraket/webbraket.se/wiki


# How to contribute
Webbraket drivs av dig och mig. Hittat något som inte verkar stämma? Eller bara vill hjälpa till? Skicka mer än gärna en pull-request. Vänligen följ våra [riktlinjer](#pull-requests) men var inte orolig för att göra fel. Vi hjälps åt :)

Om du undrar mer om någonting som står i denna readme eller känner att du behöver lära dig mer så finns det mycket matnyttig information i vår [wiki]. Kolla först där och om du inte hittar vad du letar efter, tveka inte, utan [kontakta någon av oss](#kontakt).

## Pull requests
Starta en ny topic-branch ifrån `master`. Vänligen följ våra [namngivningskonventioner](#branches) för branches. Du behöver inte squash:a dina commits innan du skickar en PR. Ifall ändringar har skett i `master` efter att du började arbeta på din branch så får du pluspoäng ifall du rebase:ar.

Vi merge:ar alltid med `--no-ff` p.g.a. [denna artikel](http://nvie.com/posts/a-successful-git-branching-model/).

Vi code-review:ar alla pull-requests för att vi ska kunna hjälpa varandra att utvecklas och bli bättre utvecklare. Kom ihåg att hålla god ton och vara trevliga mot varandra :)

## Branches
Vi följer i stort sett [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) men istället för att använda en separat `development`-branch eller separata release-branch:es så skickar vi pull requests direkt emot `master`. Detta gör vi eftersom vi ännu inte upplevt behovet av detta ytterligare steg. Vårt arbetssätt liknar [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) men det är [varje utvecklares ansvar](http://www.yegor256.com/2014/07/21/read-only-master-branch.html) att inte skicka pull requests med "broken code".

### `master`

Detta är vår "production branch" som alltid innehåller [produktionsredo](https://agilewarrior.wordpress.com/2011/01/04/production-readiness/) kod. Commits i denna branch skapas genom att core team merge:ar `development` in i `master`. Varje commit i denna branch kan ses som en ny "version". Topic-branches merge:as in i denna branch av core-team. Arbeta aldrig direkt i denna branch.

### ~~`development`~~

~~Denna branch är ["deprecated"](https://en.wikipedia.org/wiki/Deprecation) och bör för nuvarande inte användas. Arbeta således aldrig i denna branch och merge:a aldrig till eller ifrån denna branch.~~

### `gh-pages`

Denna branch är vår "production server" och förändringar i den reflekteras omgående på [webbraket.se](www.webbraket.se). Inget arbeta ska därmed ske direkt i denna branch. Denna branch uppdateras när core team kör publiceringsskriptet ifrån `master`.

### `topic branches`
Topic branches används för allt arbete. Vi följer nedan namngivningskonvention.

- `new/zzz` Nya features där zzz är ett kort namn på featuren.
- `fix/i111` Bug-fix där 111 antingen är ett namn eller [issue][repo-issues]-numret.
- `big/zzz` Branch som förväntas leva längre (såsom e.g. ramverksmigrering).
- `test/zzz` Används om du introducerar tester.

Notera att även dessa konventioner gäller för text-uppdateringar. Om du uppdaterar text är det en `fix` och om du skriver ny text är det en `new`.

Notera att issue-nummer prefixas med ett `i`. Detta gör vi för att undvika risker associerade med "bare numbers" i branch-namn. Läs mer [här][branch-naming].

[repo-issues]: http://github.com/webbraket/webbraket.se/issues
[repo-issue-new]: https://github.com/webbraket/webbraket.se/issues/new
[branch-naming]: http://stackoverflow.com/questions/273695/git-branch-naming-best-practices


### Issues
Hittat en bugg? Vi använder [issues](repo-issues), så om du upptäcker något som verkar vara galet, vill föreslå en ändring, eller någonting helt nytt, [skapa gärna en ny issue](repo-issue-new). Om du kan så får du förstås gärna fixa problemet själv och då istället skicka en [pull request](#pull-requests).




## Dependencies
Detta projekt kräver att `node`, `npm` och `gulp` alla finns tillgängliga i din PATH. Övriga dependencies installeras genom `npm` och finns alltså specificerade i `package.json`.



## Style guide
Använd [Markdown](http://daringfireball.net/projects/markdown/)-syntax i största möjliga mån och undvik ad-hoc-HTML. Eftersom Markdown är väldigt limiterat kommer vi ju tyvärr inte undan. Försök isåfall hålla dig till följande undantag. Om du introducerar nya undantag, vänligen skriv om de här i README:n.

#### Block quotes with attribution
Läs mer om varför vi använder denna stil för blockquotes [här](http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required).
```markup
<figure>
  <blockquote>Our universe in the space of possible universes.</blockquote>
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




# Quickstart
Här följer en extremt koncis quickstart för att ge en överblick över vad som krävs för att komma igång med projektet. Men livet är ju sällan så här enkelt :) Så kom ihåg att om du undrar något så konsultera [wiki] för mer information och/eller [kontakta](#kontakt) oss.

[git]: https://git-scm.com
[node]: https://nodejs.org
[gulp]: https://gulpjs.com

1. Installera [git].
1. Installera [node].
1. Installera [gulp] globalt genom `npm intall -g gulp`.
1. Klona repo:t: `$ git clone git@github.com:webbraket/webbraket.se.git`.
1. Öppna mappen: `$ cd webbraket.se`.
1. Hämta dependecies: `$ npm install`.
1. Starta servern: `$ gulp`.
1. Gå till `http://localhost:8080`.
1. Yay, drink beers :)


## Struktur
Källkod finns i mappen `src`. Genererad build finns i mappen `build` (om mappen inte finns så skapas den första gången du bygger projektet genom `gulp`).

## Tasks
När alla dependencies är installerade är det bara att börja köra tasks. Du kan kolla i `gulpfile.js` för att närmare undersöka vilka tasks som finns och vad de gör. De mest grundläggande tasks:en finns beskrivna här:

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


## Publicering
[Webbraket](http://www.webbraket.se) hostas genom [Github Pages](https://pages.github.com/).



## Workflow
Arbeta i din egen topic-branch. När du är klar med ditt arbeta, pusha din branch och skicka en pull request emot branchen `master`. Nedan följer ett exempel på en dag i en Webbraket-utvecklares liv :)

```
$ git clone git@github.com:webbraket/webbraket.se
$ git checkout master
$ git checkout -b new/cat-stories
... do some work ...
$ git add -A
$ git commit -m "Added stories about cats"
$ git push --set-upstream origin new/cat-stories
```








# Project Management
Vi strävar efter att arbeta så friktionsfritt, demokratiskt och transparent som möjligt. Idéer på hur vi kan bli bättre är alltid välkomna.

Vi arbetar för nuvarande på fyra plan. Vi arbetar med Slack, GitHub:s pull requests/issues, Video calls och med fysiska möten. Projektöverskridande diskussioner sker på Slack, feature/bug-relaterade diskussioner sker på GitHub, och när dessa tekniska plattformar inte räcker till så diskuterar vi frågor vid Video calls eller vid fysiska möten.

## Slack
Vi använder [Slack](http://webbraket.slack.com) för projektöverskridande diskussioner. D.v.s. all kommunikation som inte är relaterad till specifika [pull requests](https://github.com/webbraket/webbraket.se/pulls) eller [issues](https://github.com/webbraket/webbraket.se/issues). Det är förstås rimligt att använda Slack för att diskutera nya features etc. för att kunna nå koncensus. Men vi ber dig att så fort som möjligt försöka flytta diskussionen till GitHub, eftersom det möjliggör transparens och det blir lättare för utomstående att ge sig in i diskussionen.

Endast core contributors har för nuvarande tillgång till Slack. Detta eftersom det nästan uteslutande är praktiska diskussioner som förs på Slack. Strategiska diskusioner förflyttas så fort som möjligt till öppna fora såsom GitHub. Om du är en del av core contributors men inte har tillgång till Slack. Vänligen [kontakta](#kontakt) någon i styrelsen.

## Weekly video
Varje vecka kör vi ett video-call. För att stärka känslan av gemenskap, men även för att undvika att alla diskussioner ska behöva föras i kommentarsfält. Vi värdesätter demokrati och öppenhet och dessa möten är därför en utmärkt plats att lyfta vad än en har på hjärtat. Moderator för dessa möten är någon i styrelsen.

Dessa möten sker på en regelbunden basis, men listas även i vår gemensamma kalender.

Varje möte börjar som en SCRUM-inspirerad standup. D.v.s. vi tar ett "varv" där alla svarar på de tre frågorna:
1. Vad har jag gjort sen senast?
1. Vad ska jag göra framöver?
1. Vad har jag stött på för problem?

Efter att alla fått svara på de tre frågorna övergår vi till att diskutera övriga agendapunkter som ofta är av en mer strategisk och/eller planerande karaktär.

För att främja transparens kommer dessa möten (med start 2016) att filmas och publiceras på YouTube. För nuvarande filmas mötena ej.

## Kalender
Länkar till vår gemensamma kalender hittar du nedan. Om du vill ha write-access till kalendern vänligen kontakta [Christopher](#kontakt).

- [HTML](https://www.google.com/calendar/b/1/embed?src=okhravi.se_8f3r0gabui2fo30q8pi9tqrr3c@group.calendar.google.com&ctz=Europe/Stockholm)
- [iCal](https://www.google.com/calendar/ical/okhravi.se_8f3r0gabui2fo30q8pi9tqrr3c%40group.calendar.google.com/public/basic.ics)
- [XML](https://www.google.com/calendar/feeds/okhravi.se_8f3r0gabui2fo30q8pi9tqrr3c%40group.calendar.google.com/public/basic)

## Meetups
Ibland kör vi informella och formella fysiska meetups för att främja gemenskapen och för att diskutera viktiga frågor. Dessa möten visas i ovan publika kalender och annonseras/diskuteras först på Slack.






# Om projektet
Vi är ett projekt som drivs av ett gäng glada studenter, adjunkter och forskare under Institutionen för informatik och media vid Uppsala universitet.


## Core contributors
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
Detta är ett fåtal personer som är anställda vid Uppsala universitet och som har full commit access. Denna grupp har rätt att utöva veto i alla frågor. Detta veto ska ej behöva utövas men finns av säkerhetsskäl då Institutionen för informatik och media vid Uppsala universitet stödjer detta projekt.



# Uppsatser och forskning
Om du ska skriva en kandidat-, masteruppsats eller är forskare så är du varmt välkommen att kontakta oss. Vi är en självorganiserad grupp av studenter som producerar öppen källkod, så det finns utrymme för många intressanta möjligheter för forskningsarbeten. Vänligen [kontakta](#kontakt) i första hand någon i gruppen Styrelsen.



# Historia
- __2013 HT__
htmlhunden.se registreras och byggs upp utav Christopher Okhravi och Madelen Hermelin med stöd ifrån Owen Eriksson och Anneli Edman. Målet är att ersätta den tekniska kurslitteraturen i kursen _E-tjänster och webbprogrammering_.

- __2014 VT__
htmlhunden.se används bl.a. i kurserna _E-tjänster och webbprogrammering_ samt _Multimedia_.

- __2014 HT__
htmlhunden.se används bl.a. i kursen _Grundläggande Multimedia_.

- __2015 VT__
htmlhunden.se används bl.a. i kurserna _E-tjänster och webbprogrammering_ samt _Multimedia_.

- __2015 sommar__
htmlhunden.se doneras av Christopher och Madelen till det, av samma personer, nystartade projektet Webbraket. Namnbyte sker för att undestryka att detta (1) är ett studentdrivet projekt, samt (2) är ett projekt med holistisk syn på webbutveckling.


# Kontakt
Vid tekniska frågor vänligen kontakta någon i Developers. Vid övriga frågor vänligen kontakta [Styrelsen](#medlemmar). Förslagsvis Christopher.


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

Webbraket representerar inte Uppsala universitets åsikter i någon fråga. Projektet drivs ej av Uppsala universitet, utan av studenter antagna på systemvetenskapliga program vid Uppsala universitet och Campus Gotland. Styrelsen består av anställda på Uppsala universitet. Projektet är startat av lärare vid Uppsala universitet och används som utbildningsmaterial i utvalda kurser men bör ses som extern resurs utifrån Uppsala universitets perspektiv.

# License
TODO

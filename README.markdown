__Webbraket vill bli sveriges st�rsta utbildningsresurs f�r webbutveckling. Det b�sta s�ttet att n� det m�let tror vi �r att arbeta tillsammans.__

Detta �r ett projekt f�r studenter, drivet av studenter. Detta initiativ drivs av en grupp studenter vid Uppsala Universitet men hj�lp mottas sj�lvklart gladeligen ifr�n alla h�ll och kanter. Om du hittar n�got som verkar galet s� blir vi mer �n glada om du skickar en *pull request*.

Att bidra till Webbraket �r inte bara nyttigt f�r din egen utveckling och ditt CV, utan hj�lper �ven hundratals nya studenter som varje �r befattar sig med denna resurs. Om du vill bidra mer regelbundet och bli en del av ett team s� l�s vidare nedan.


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
Webbraket drivs av dig och mig. Hittat n�got som inte verkar st�mma? Eller bara vill hj�lpa till? Skicka mer �n g�rna en pull-request. V�nligen f�lj v�ra [riktlinjer](#pull-requests) men var inte orolig f�r att g�ra fel. Vi hj�lps �t :)

Om du undrar mer om n�gonting som st�r i denna readme eller k�nner att du beh�ver l�ra dig mer s� finns det mycket matnyttig information i v�r [wiki]. Kolla f�rst d�r och om du inte hittar vad du letar efter, tveka inte, utan [kontakta n�gon av oss](#kontakt).

## Pull requests
Starta en ny topic-branch ifr�n `development`. V�nligen f�lj v�ra [namngivningskonventioner](#branches) f�r branches. Du beh�ver inte squash:a dina commits innan du skickar en PR. Ifall �ndringar har skett i `development` efter att du b�rjade arbeta p� din branch s� f�r du pluspo�ng ifall du rebase:ar.

Vi merge:ar alltid med `--no-ff` p.g.a. [denna artikel](http://nvie.com/posts/a-successful-git-branching-model/).

Vi code-review:ar alla pull-requests f�r att vi ska kunna hj�lpa varandra att utvecklas och bli b�ttre utvecklare. Kom ih�g att h�lla god ton och vara trevliga mot varandra :)

## Branches
Vi f�ljer i stort sett [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) men ist�llet f�r separata release branches s� �teranv�nder vi branchen `development`.

### `master`

Detta �r v�r "production branch" som alltid inneh�ller [produktionsredo](https://agilewarrior.wordpress.com/2011/01/04/production-readiness/) kod. Commits i denna branch skapas genom att core team merge:ar `development` in i `master`. Varje commit i denna branch kan ses som en ny "version". Arbeta aldrig direkt i denna branch.

### `development`

Detta �r v�r "development branch" som alltid inneh�ller de uppdateringar som kommer att bli en del av n�sta "version". Topic-branches merge:as in i denna branch av core-team. Arbeta aldrig direkt i denna branch.

### `gh-pages`

Denna branch �r v�r "production server" och f�r�ndringar i den reflekteras omg�ende p� [webbraket.se](www.webbraket.se). Inget arbeta ska d�rmed ske direkt i denna branch. Denna branch uppdateras n�r core team k�r publiceringsskriptet ifr�n `master`.

### `topic branches`
Topic branches anv�nds f�r allt arbete. Vi f�ljer nedan namngivningskonvention.

- `new/zzz` Nya features d�r zzz �r ett kort namn p� featuren.
- `fix/111` Bug-fix d�r 111 antingen �r ett namn eller [issue][repo-issues]-numret.
- `big/zzz` Branch som f�rv�ntas leva l�ngre (s�som e.g. ramverksmigrering).
- `test/zzz` Anv�nds om du introducerar tester.

Notera att �ven dessa konventioner g�ller f�r text-uppdateringar. Om du uppdaterar text �r det en `fix` och om du skriver ny text �r det en `new`.

[repo-issues]: http://github.com/webbraket/webbraket.se/issues
[repo-issue-new]: https://github.com/webbraket/webbraket.se/issues/new


### Issues
Hittat en bugg? Vi anv�nder [issues](repo-issues), s� om du uppt�cker n�got som verkar vara galet, vill f�resl� en �ndring, eller n�gonting helt nytt, [skapa g�rna en ny issue](repo-issue-new). Om du kan s� f�r du f�rst�s g�rna fixa problemet sj�lv och d� ist�llet skicka en [pull request](#pull-requests).




## Dependencies
Detta projekt kr�ver att `node`, `npm` och `gulp` alla finns tillg�ngliga i din PATH. �vriga dependencies installeras genom `npm` och finns allts� specificerade i `package.json`.



## Style guide
Anv�nd [Markdown](http://daringfireball.net/projects/markdown/)-syntax i st�rsta m�jliga m�n och undvik ad-hoc-HTML. Eftersom Markdown �r v�ldigt limiterat kommer vi ju tyv�rr inte undan. F�rs�k is�fall h�lla dig till f�ljande undantag. Om du introducerar nya undantag, v�nligen skriv om de h�r i README:n.

#### Block quotes with attribution
L�s mer om varf�r vi anv�nder denna stil f�r blockquotes [h�r](http://alistapart.com/blog/post/more-thoughts-about-blockquotes-than-are-strictly-required).
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
F�r att skapa den d�r klassiska l�roboksk�nslan :) Info-boxen anv�nds f�r by-the-way information, och warning-boxen anv�nds f�r se-upp-notiser.
```markup
<div class="box-info"> ... </div>
<div class="box-warning"> ... </div>
```




# Quickstart
H�r f�ljer en extremt koncis quickstart f�r att ge en �verblick �ver vad som kr�vs f�r att komma ig�ng med projektet. Men livet �r ju s�llan s� h�r enkelt :) S� kom ih�g att om du undrar n�got s� konsultera [wiki] f�r mer information och/eller [kontakta](#kontakt) oss.

[git]: https://git-scm.com
[node]: https://nodejs.org
[gulp]: https://gulpjs.com

1. Installera [git].
1. Installera [node].
1. Installera [gulp] globalt genom `npm intall -g gulp`.
1. Klona repo:t: `$ git clone git@github.com:webbraket/webbraket.se.git`.
1. �ppna mappen: `$ cd webbraket.se`.
1. H�mta dependecies: `$ npm install`.
1. Starta servern: `$ gulp`.
1. G� till `http://localhost:8080`.
1. Yay, drink beers :)


## Struktur
K�llkod finns i mappen `src`. Genererad build finns i mappen `build` (om mappen inte finns s� skapas den f�rsta g�ngen du bygger projektet genom `gulp`).

## Tasks
N�r alla dependencies �r installerade �r det bara att b�rja k�ra tasks. Du kan kolla i `gulpfile.js` f�r att n�rmare unders�ka vilka tasks som finns och vad de g�r. De mest grundl�ggande tasks:en finns beskrivna h�r:

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


## Publicering
[Webbraket](http://www.webbraket.se) hostas genom [Github Pages](https://pages.github.com/).



## Workflow
Arbeta i din egen topic-branch. N�r du �r klar med ditt arbeta, pusha din branch och skicka en pull request emot branchen `development`. Nedan f�ljer ett exempel p� en dag i en Webbraket-utvecklares liv :)

```
$ git clone git@github.com:webbraket/webbraket.se
$ git checkout development
$ git checkout -b new/cat-stories
... do some work ...
$ git add -A
$ git commit -m "Added stories about cats"
$ git push --set-upstream origin new/cat-stories
```




# Om projektet
Vi �r ett projekt som drivs av ett g�ng glada studenter, adjunkter och forskare under Institutionen f�r informatik och media vid Uppsala universitet.


## Core contributors
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
Detta �r ett f�tal personer som �r anst�llda vid Uppsala universitet och som har full commit access. Denna grupp har r�tt att ut�va veto i alla fr�gor. Detta veto ska ej beh�va ut�vas men finns av s�kerhetssk�l d� Institutionen f�r informatik och media vid Uppsala universitet st�djer detta projekt.



# Uppsatser och forskning
Om du ska skriva en kandidat-, masteruppsats eller �r forskare s� �r du varmt v�lkommen att kontakta oss. Vi �r en sj�lvorganiserad grupp av studenter som producerar �ppen k�llkod, s� det finns utrymme f�r m�nga intressanta m�jligheter f�r forskningsarbeten. V�nligen [kontakta](#kontakt) i f�rsta hand n�gon i gruppen Styrelsen.



# Historia
- __2013 HT__
webbraket.se registreras och byggs upp utav Christopher Okhravi och Madelen Hermelin med st�d ifr�n Owen Eriksson och Anneli Edman. M�let �r att ers�tta den tekniska kurslitteraturen i kursen _E-tj�nster och webbprogrammering_.

- __2014 VT__
webbraket.se anv�nds bl.a. i kurserna _E-tj�nster och webbprogrammering_ samt _Multimedia_.

- __2014 HT__
webbraket.se anv�nds bl.a. i kursen _Grundl�ggande Multimedia_.

- __2015 VT__
webbraket.se anv�nds bl.a. i kurserna _E-tj�nster och webbprogrammering_ samt _Multimedia_.

- __2015 sommar__
webbraket.se doneras av Christopher och Madelen till det, av samma personer, nystartade projektet Webbraket. Namnbyte sker f�r att undestryka att detta (1) �r ett studentdrivet projekt, samt (2) �r ett projekt med holistisk syn p� webbutveckling.


# Kontakt
Vid tekniska fr�gor v�nligen kontakta n�gon i Developers. Vid �vriga fr�gor v�nligen kontakta [Styrelsen](#medlemmar). F�rslagsvis Christopher.


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

Webbraket representerar inte Uppsala universitets �sikter i n�gon fr�ga. Projektet drivs ej av Uppsala universitet, utan av studenter antagna p� systemvetenskapliga program vid Uppsala universitet och Campus Gotland. Styrelsen best�r av anst�llda p� Uppsala universitet. Projektet �r startat av l�rare vid Uppsala universitet och anv�nds som utbildningsmaterial i utvalda kurser men b�r ses som extern resurs utifr�n Uppsala universitets perspektiv.

# License
TODO

## Vart ska jag skriva JavaScript?

Innan vi lärt oss ett dugg om JavaScript ska vi köra en djupdyk med näsan först, och skriva vårt första skript. Samtidigt kommer vi att diskutera var vi väljer att placera vår kod och hur man bör arbeta med JavaScript.

### Ett exempelskript

Om det enkla skriptet i nästföljande figur körs på en webbsida så tar den helt sonika bort allt dokumentet innehåller och ersätter det med texten "Evil rabbits... osv". När vi använder det här skriptet som ett exempel i detta dokument så får du låtsas som om varje exempel-ruta är en egen webbsida. För om vis kulle köra `document.write("");` på hela denna sida skulle vi ju rensa hela sidan vilket skulle göra det väldigt svårt för dig att fortsätta läsa denna text.

Exempelskriptet

```javascript
document.write("Evil rabbits are taking over our servers! Must find carrots!");
```

Hursomhelst, låt oss nu istället diskutera lite olika platser vi skulle kunna lägga in detta skript på.

### Direkt i HEAD

Ett ställe vi kan placera vår JavaScript på är rakt upp och ner i `<HEAD>`-taggen. Så länge som vi snurrar in vår JavaScript emellan starttaggen `<script>` och sluttaggen `</script>`. Nedan följer ett exempel i ett minimalistiskt HTML-dokument. När du läser exemplet, tänk framförallt på vart `<script>`-taggarna och ovan nämn javascript-rad är placerad/-e.

JavaScript i `<HEAD>`-taggen

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exempel</title>
    <script>
      document.write("Evil rabbits...");
    </script>
  </head>
  <body>
    <p>Denna text kommer inte att synas eftersom JavaScriptet skriver över den.</p>
  </body>
</html>
```

Resultat

<figure>
Evil rabbits...
</figure>

För att illustrera att detta är någonting som verkligen skapas av JavaScript, så tar vi och _kommenterar ut_ rad 6 såsom nedan. Att kommentera ut en rad gör att den ignoreras av webbläsaren och således inte exekveras.

```javascript
// document.write("Evil rabbits...");
```

...så får vi istället nedan resultat.

Resultat

<figure>
Denna text kommer inte att synas eftersom JavaScriptet skriver över den.
</figure>

### onClick

Ett annat ställe vi kan placera vår JavaScript-kod på är i onClick-attributet. Som namnet `onClick` antyder kommer då koden att exekveras just då &mdash; "on click". Alltså när användaren klickar på elementet i fråga.

Låt oss se till ett exempel, som använder sig av samma kod.

Anonym funktion vid onClick

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exempel</title>
  </head>
  <body>
    <a onClick="document.write('Evil rabbits...');">Click to destruct!</a>
  </body>
</html>
```

Resultat

<figure class="exempel">
  <iframe src="examples/js-onclick"></iframe>
</figure>

I ovan exempel finns det tre viktiga skillnader att notera i relation till det första exemplet. Först och främst. Vår JavaScript ligger nu inte längre inom `<HEAD>`-taggen utan inom `<BODY>`. Det betyder alltså att vi har specificerat vårt skript bland vårt content och inte vårt meta-content. Eftersom skript inte är content så borde det här ringa en varningssignal om att vi sysslar med en dålig "practice", men det återkommer vi till senare.

Den andra viktiga skillnaden vi bör inse är att vi inte längre kör vårt JavaScript när sidan laddas utan istället när användaren klickar på en knapp. Vi har alltså inte bara lagt vårt skript rakt av, utan vi har lagt det som en _anonym funktion_ som kommer att köras när _event lyssnaren_ `onClick` avfyras. Vi kommer att prata mer om _event listeners_ senare men för nu kan du helt enkelt tänka dig det så här. Egenskapen `onClick` är ett nyckel-värde-par där värdet är en sträng. Denna sträng kommer inte att tolkas som vilken sträng som helst, utan kommer att exekveras som JavaScript. Vi hade således kunnat skriva vilken arbiträr mängd JavaScript som helst mellan de två citationstecknena som delimiterade värdet. Låt oss se till ett exempel till för att verkligen förstå hur det fungerar.

Anonym funktion vid onClick

```javascript
<a onClick="alert('Hello...'); alert('...you!');">Click for welcome message!</a>
```

Resultat

<figure class="exempel">
  <iframe src="examples/js-onclick-2"></iframe>
</figure>

> Glöm nu allt du lärt dig om att skriva inline-javascript i `onClick` och glöm nästan allt du lärt dig om att skriva JavaScript direkt i `<head>` &mdash; det finns bättre sätt!

Som vanligt är detta bättre sätt baserat på idéen om "[separation of concerns][0]" och innebär att vi flyttar vår JavaScript till en separat fil. Och det är detta vi kommer göra i nästa stycke.

### JS i separat fil

Om du inte har en medveten anledning till varför du inte ska göra det så är det bästa sättet att hantera JavsScript &mdash; i en separat fil. På precis samma sätt som vi arbetar med CSS så skapar vi en ny fil som vi döper till `ett-schysst-filnamn.js`. Notera alltså ändelsen `.js`. Sedan gör vi på precis (nästan) samma sätt som när vi har en extern CSS-fil. Alltså, vi lägger in ett element i `<head>` som pekar på vår JavaScript-fil. Som så:

Ladda in en extern javascript-fil

index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exempel</title>
    <script src="main.js"></script>
  </head>
  <body>
  </body>
</html>
```
main.js

```javascript
document.write("Oh noes evil rabbits...");
```

Resultat

<figure>
Oh noes evil rabbits...
</figure>

Notera alltså rad 5 i ovan exempel. Det är just rad 5 som berättar för webbläsaren vart JavaScript-filen finns. Vi anger .js-filens plats med en relativ sökväg genom att bara skriva `filnamnet.js` rakt upp och ned. Så webbläsaren kommer alltså leta efter en fil vid namn `filnamnet.js` i _samma mapp_ som index.html ligger.


### Överkurs

Kanske har du märkt att många webbutvecklare laddar in sina JavaScript-filer i `<body>` och inte i `<head>`. Detta har med performance och göra, och är egentligen en superb idé! Låt oss prata om varför.

När en webbläsare renderar en webbsida så går den uppifrån och ned. Och när den stöter på ett request till en extern resurs, såsom en bild, en css-fil, eller en javascript-fil etc. så behöver den stanna, vänta, och ladda in filen. Tänk på det en stund. När vi lägger in en bild i ett html-dokument så lägger vi ju faktiskt inte in bilden utan endast en _referens till den plats `url` där bilden befinner sig_. Detta innebär att webbläsaren alltså måste _hämta_ ("ladda ner") denna bild för att faktiskt kunna visa den.

Eftersom webbläsare endast kan hantera ett limiterat antal requests parallelt så betyder det att sidan lätt fastnar i en [flaskhals][1]. Standarden HTTP/1.1 specificerar att en browser max bör hålla [två öppna connections per server][2], detta vilket uppenbart orsakar en flaskhals ifall vi hämtar 10 bilder, 2 css-filer och 1 javascript-fil ifrån vår egen server.

Moderna browsers har dock valt att ignorera dessa maxtal och hanterar faktiskt fler [parallella uppkopplingar][3] men trots detta har det blivit praxis att låta JavaScript-filerna laddas in allra sist i `<body>`. Anledningen till detta är alltså att om webbläsaren får en chans att parse:a hela `<body>`:n innan den krockar med det element som pekar på en javascript-fil, så betyder det att webbläsaren kommer ha en chans att visuellt printa ut sidan för användaren och _SEN_ börja hämta denna javascript-fil.

Faktum är att det t.o.m. är [tillåtet enligt specifikation][4] att placera `<script>`-taggar i `<body>`. Låt oss se till ett exempel över hur detta skulle kunna se ut.

Ladda in JavaScript-filer i slutet av `<body>`

```html
<!DOCTYPE html>
<html>
  <head>
<title>Exempel</title>
  </head>
  <body>
<p>Först lägger vi allt vårt content</p>
<p>Och sen sist, laddar vi in js:</p>
<script src="main.js"></script>
  </body>
</html>
```

Således används alltså denna teknik för att ge användaren en känsla av att sidan har laddat klart snabbare än den egentligen gör. Om vi lägger våra javascript-filer i `<head>` kommer webbläsaren alltså att "blocka" sidan och inte printa ut någonting visuellt förrän _hela_ javascript-filen har laddats ned. Men om vi lägger referensen till vår javascript fil i slutet av `<body>` kommer webbläsaren att rendera hela `<body>`:n innan den börjar blocka och ladda in javascript-filen.

Såsom mycket annat i världen så är detta inte svart eller vitt, utan det finns många fall där vi faktiskt bör ladda in JavaScript i `<head>`. Du kan läsa mer om detta bl.a. [här][5].


[0]: http://en.wikipedia.org/wiki/Separation_of_concerns
[1]: http://en.wikipedia.org/wiki/Bottleneck
[2]: http://www.stevesouders.com/blog/2008/03/20/roundup-on-parallel-connections/
[3]: http://www.browserscope.org/?category=network&v=top
[4]: http://www.w3schools.com/js/js_howto.asp
[5]: http://stackoverflow.com/questions/14328449/when-do-you-put-javascript-in-body-when-in-head-and-when-use-doc-load

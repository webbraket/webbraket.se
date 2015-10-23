## $(document).ready

I vår första djupdykning in i jQuery pratade vi kort om att det är viktigt att vänta tills hela DOM:en är inladdad innan vi börjar exekvera vår jQuery-beroende kod. I det här kapitlet kollar vi närmare på hur just `.ready()`-funktionen fungerar. Detta kapitel hjälper dig att skapa en djupare förståelse för både jQuery såväl som JavaScript.

### När dokumentet är redo för manipulation

Denna mystiska ovan nämnda metod vid namn `.ready()` är en metod vi använder för att kunna vänta med att exekvera jQuery-kod tills webbläsaren har hunnit ladda in ("ned") hela sidan. Låt oss först se till ett exempel och sen diskutera det:

Att säga åt jQuery att vänta tills DOM:en är inläst

```javascript
    $(document).ready(function(){
      alert("Hello world from jQuery");
    });
```

Ovan exempel använder jQuery för att avvakta tills webbläsaren har laddat in hela sidan. Sedan använder vi helt vanlig JavaScript för att poppa up en alert-ruta med meddelandet "Hello world...". Låt oss dissekera ovan kod, rad för rad och del för del, för att faktiskt förstå vad det är som händer.

#### $() är syntaktiskt socker för jQuery()

Först ut är detta mystiska dollartecken. Förklaringen till vad detta _är_, är egentligen ganska enkel. Förklaringen till varför vi _använder_ tecknet inte lika. Men låt oss först diskutera vad det är. `$`-tecknet är egentligen ingenting annat än [syntaktiskt socker][0]. Alltså ett annat sätt att skriva någonting. Detta någonting är jQuery's huvudmetod med samma namn, alltså `jQuery`. Så, när vi med andra ord säger `$(document)` är det _exakt samma sak_ som när vi säger `jQuery(document)`. Det förstnämnda är helt enkelt bara ett kortare sätt att uttrycka det på för att vi som programmerare ska slippa skriva så mycket.

#### Variabeln document är dokumentets rot

`document` är helt enkelt en _variabel_. Men notera här alltså att vi säger att document är en variabel, vi säger inte att det är ett keyword. Varför är det viktigt att tänka på? Jo, `var` är ett keyword, en [language construct][1] som alltid finns i JavaScript oavsett vart vi kör språket. Variabeln window är däremot ett koncept som är uppfunnit sonika för browsers. Om vi kör en JavaScript-interpretator i en [terminal][2] (alltså inte en browser) så existerar inte variabeln `document`. I browsern däremot, för att överhuvudtaget kunna manipulera en webbsida, behöver vi något sätt att genom javascript komma åt noderna (elementen) i vårt HTML-dokument. Således är `document`, löst uttryckt, vår "entry-point" in till noderna i html-dokumentet. I variabeln `document` hittar vi elementet `<html>` och som barn till det elementet hittar vi förstås resten av noderna. För att sammanfatta så är alltså `document` den variabel som innehåller hela vårt html-dokument och således den variabel vi behöver interagera med för att manipulera vårt dokument.

#### $(document) eller jQuery(document)

Nu vet vi alltså att `$()` är en korthandssyntax, och således samma sak som att anropa `jQuery()`. Men vad gör då denna metod? Jo, metoden returnerar ett jQuery-objekt som innehåller det vi har skickat in till den. Vi kan alltså se det som att jQuery _dekorerar_ det vi har skickat in med alla dessa fantastiska jQuery-metoder. Låt oss exemplifiera.

```javascript
    // Dekorerar alla länkar med jquery
    // Sparar referensen i variabeln link
    var link = $('a');
```

Vi använder alltså denna "jquery-dekorerade version" av ett html-element för att anropa de fantastiska metoder jquery utökar våra element med. Låt oss exemplifiera.

```javascript
    // Fade:a ut alla länkar
    $('a').fadeOut();

    // Samma sak i två steg
    var link = $('a');
    link.fadeOut();
```

Det kan snabbt bli virrigt gällande vilka variabler som är jquery-dekorerade och vilka som inte är det. [Konventionen][3] brukar således vara döpa sina variabler med ett initial `$`-tecken. Som så:

```javascript
    // Konventionen är att döpa jquery variabler med ett intialt $-tecken
    var $link = $('a');
```

För att återgå till det här med `$(document)`. Vad betyder det då alltså att skicka in dokumentet till jquerys dekorationsmetod? Jo att vi nu kan anropa alla de fantastiska metoderna jquery erbjuder på vår rotnod. Det vill säga hela dokumentet. Att dekorera dokumentet med jquery har egentligen exakt samma effekt som att dekorera ett enskilt element (t.ex. en länk).

#### För att veta när dokumentet är redo använder vi .ready()

Precis som rubriken säger så använder vi metoden för att helt enkelt veta när dokumentet (DOM:en) är färdigladdat. Tänk efter. Eftersom vi använder jQuery-metoden för att dekorera element i vårt dokument. Så är det viktigt att alla element är "konstruerade" innan vi försöker komma åt dem. Hur ska vi kunna hitta alla länkar om vi inte är säker på att webbläsaren har hunnit läsa in alla länkar?

Vi kan använda [.ready()][4]-metoden, men vi kan också använda [.load()][5]-metoden. Den första nöjer sig med att [DOM][6]:en (vilket kan ses som dokumentets struktur) har laddat. Den senare väntar på att alla resurser såsom bilder o.s.v. har laddat.

#### Funktionen skickad till ready körs när dokumentet är redo

Så vad ska vi skicka som argument till denna funktion? Jo, en till funktion! Va? Vääänta nu. En funktion som tar en funktion som argument? Det låter ju helknäppt. Men det är faktiskt inte så knäppt. Faktum är att mycket kod vi skriver i JavaScript går ut på att just skicka funktioner till funktioner. För att kunna skapa ["callbacks"][7]. Den funktion vi skickar till `.ready()`-funktionen kan ses som ett callback som körs när dokumentet har laddat.

Tänk dig.. vi anropar jquery ready-metoden, och säger "Hej, nu vill jag att du säger till mig när sidans DOM har laddat klart". Sedan skickar vi in en funktion till ready-metoden och då är det som att vi säger "..och när sidans DOM har laddat klart, då vill jag att du utför allt som står i den här andra funktionen". Inga konstigheter!

#### Allt i ett svep

Så, låt oss repetera den kod vi pratar om i helhet.

```javascript
    $(document).ready(function(){
      alert("Hello world from jQuery");
    });
```

Låt oss beskriva koden i ord, rad för rad.

1. Skapa ett `jQuery`-objekt av innehållet i variabeln `document`. Anropa sedan funktionen `ready()` på det jquery-dekorerade dokumentet. Skicka en _anonym funktion_ som argument.
2. Låt den anonyma funktionen innehålla en enda rad. Denna rad anropar JavaScript-funktionen `alert()`, med strängen "Hello world.." som argument, och kommer således att visa göra så att alert-ruta "poppar upp" med texten "Hello world..".
3. Stäng den anonyma funktionen med `}`. Stäng sedan funktionsanropet med `)`. Terminera raden med `;`.

[0]: http://sv.wikipedia.org/wiki/Syntaktiskt_socker
[1]: http://en.wikipedia.org/wiki/Language_construct
[2]: http://en.wikipedia.org/wiki/Bash_(Unix_shell)
[3]: http://en.wikipedia.org/wiki/Coding_conventions
[4]: http://learn.jquery.com/using-jquery-core/document-ready/
[5]: http://api.jquery.com/load/
[6]: http://sv.wikipedia.org/wiki/Document_Object_Model
[7]: http://en.wikipedia.org/wiki/Callback_(computer_programming)

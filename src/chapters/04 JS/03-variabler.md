## Variabler

Eftersom JavaScript, som namnet antyder, är ett skriptspråk har vi tillgång till mäktiga koncept såsom variabler och funktioner. En variabel kan metaforiskt ses som en box vi lägger någonting i, och det är just denna box vi kommer att fokusera på i detta kapitel.

### Vad är variabler?

Variabler kan ses som en arbiträr box, av arbiträr storlek, där vi kan placera ett stycke, och endast ett stycke, arbiträr data. Tänk på det en stund. Låt oss formulera om samma sak. En variabel är en pekare mot en arbiträr plats i minnet, av arbiträr storlek, som innehåller arbiträr data. Det är lite närmare sanningen men fortfarande en metafor.

> Variabler kan ses som en arbiträr box, av arbiträr storlek, där vi kan placera ett och endast ett stycke arbiträr data.

Så hur deklarerar vi då en variabel? Låt oss se till ett exempel.

Variabeldeklaration och tilldelning

```javascript
var name = "Dr. Zaius";
```

I ovan exempel deklarerar ("skapar") vi alltså en variabel och tilldelar den värdet av texten "Dr. Zaius". Således finns det alltså två saker vi gör här. Vi (1) deklarerar, och vi (2) tilldelar. Låt oss se till ett nytt exempel där vi gör dessa steg för steg.

Deklarering och tilldelning

```javascript
// Deklaration
var name;     // name => undefined
var age;      // age  => undefined

 // Tilldelning
name = "Dr. Zaius";   // name => "Dr. Zaius"
age = 42;             // age  => 42

// Deklaration och tilldelning samtidigt
var species = "Orangutang";
```

Notera alltså att ovan exempel illustrerar att det är fullt möjligt att först deklarera en variabel och sedan tilldela den ett värde, i två steg. Detta kommer sig av den enkla anledningen att tilldelning och deklaration är två olika saker.

**Deklaration**

> Att säga att någonting _existerar_
> (`var foo;`)

**Tilldelning**

> Att säga vad någonting _innehåller_
> (`foo = "bar";`)

I många språk deklarerar vi variabler som olika _typer_ beroende på vad för typ av innehåll vi vill kunna lagra i variabeln (text, heltalsnummer, decimaltal etc.) men i JavaScript räcker det med att vi deklarerar att variabeln _finns_. Vilken typ den sedan är av, avgörs av vad vi sedan väljer att lagra i den. JavaScript är alltså vad vi brukar kalla för ett [Dynamiskt typat språk][0].

### Video

Nedan följer en kort videointroduktion till variabler i JavaScript.

Videointroduktion till variabler i JavaScript

<figure>
<iframe width="100%" height="375" src="//www.youtube.com/embed/J_XO0AzXE6Q?rel=0&vq=hd1080" frameborder="0" allowfullscreen></iframe>
</figure>

### Datatyper

Vad kan vi lagra? Kort sagt: vad som helst som faller under JavaScripts tre [datatypskategorier][1]: primära datatyper, komposit-datatyper, eller speciella datatyper. Dessa är som följer:DatatypFörklaringExempel (separerade med ;)


| Datatyp     | Kategori  | Förklaring                               | Exempel (separerade med ;)
|-------------|-----------|:-----------------------------------------|:---------------------------
| `number`    | Primary   | Siffror                                  | `0;   12;   -432;   11.4;   -32.4;`
| `string`    | Primary   | Text                                     | `"Ekonomikum 1A";`
| `boolean`   | Primary   | Sant eller falskt                        | `true;   false;`
| `array`     | Composite | Listor innehållandes andra datatyper     | `[1, 3, 2];   ["Hello", 123];`
| `object`    | Composite | Nycklar som pekar på värden              | `{ title:"Dr", name:"Snuggles" }`
| `null`      | Special   | Värdet för ingenting                     | `null;`
| `undefined` | Special   | Värdet för avsaknaden av ett värde       | `undefined;`

### Likhetstecknet

Någonting som ofta är förvirrande när det kommer till programmering är att likhetstecknet (`=`) i programmering skiljer sig signifikant ifrån likhetstecknet i matematik. Likhetstecknet i matematik implicerar ekvivalens medan likhetstecknet i programmering implicerar tilldelning. Vad är då skillnaden?

Om två uttryck är ekvivalenta menar vi att vi kan ersätta det första uttrycket med det andra och det betyder samma sak. Låt oss se till ett exempel.

Ekvivalens i matematik

(1 + 1)  =  (2)

De två uttrycken, isolerade av paranteser, är ekvivalenta och vänstra ledet kan således ersättas med det högra. Detta gäller inte i programmering.

> Likhetstecknet i matematik implicerar ekvivalens medan likhetstecknet i programmering implicerar tilldelning.

Men om ekvivalens inte gäller i programmering, vad gäller då istället? Jo, tilldelning. Med matematisk ekvivalens menar vi att evalueringen (resultatet av att beräkna) av det vänstra ledet är exakt samma sak som evalueringen av det högra ledet. Med tilldelning däremot, menar vi att evalueringen (resultatet av beräkningen) av det högra ledet _representeras_ av det vänstra ledet.

I matematik tänker vi ofta i termer av sanning, men för att lättare förstå hur imperativ programmering fungerar kan det vara fördelaktigt att istället försöka tänka i termer av att vi "räknar ut värden och lägger de i lådor (variabler)". Boxarna har ingen aning om vart värdena kom ifrån, och värdena har ingen aning om i vilka boxar de kommer placeras.

Kanske hade det varit lättare att förstå tilldelning om syntaxen (notationen) istället hade varit `a <= 23`. Alltså: lagra värdet 23 i variabeln a.

Tilldelning i programmering

```javascript
var a = 1;            // a => 1
var b = a + 3;        // b => 4
var c = a + b;        // c => 5
var d = a + b + c;    // d => 10
```

Läs ovan, rad för rad, och fundera över varför det resultat som sparas i variabeln blir det som visas i kommentaren till höger.

> När vi pratar om programmering är det lättare att tänka att vi "räknar ut värden och lägger resultaten i boxar".



[0]: http://sv.wikipedia.org/wiki/Typsystem
[1]: http://msdn.microsoft.com/en-us/library/ie/7wkd9z69(v=vs.94).aspx

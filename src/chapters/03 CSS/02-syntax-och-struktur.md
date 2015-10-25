## CSS Syntax

För att enklare förstå hur CSS hanteras, föreställ dig att webbläsaren består av två ninjateams. Det första ninjateamet läser HTML-filen och skriver ut en massa text, bilder, listor, tabeller och länkar på skärmen. När första teamet hittar en referens till en CSS-fil, skickar de det till det andra ninjateamet. Det andra ninjateamet går då lös med färgkritor och klipper och klistrar tills allt ser snyggt ut.

Även om ovanstående exempel är orimligt oseriöst är poängen att rendering av en webbsida (metaforiskt) sker i olika "pass". Där det första är att få ut resultatet av HTML:en på skärmen, och det andra att visuellt ändra på resultatet av HTML:en enligt det som definierats i CSS-filen. Du kommer upptäcka att det finns fler "pass" (och att ordningen kan variera) när vi kommer till JavaScript, men det lämnar vi för nu.

Varför är det då viktigt att förstå att CSS kommer i det "andra passet"? Jo, eftersom det är viktigt att förstå att CSS _appliceras_ på ett befintligt dokument. Med andra ord, ett CSS-dokument är i sig helt meningslöst. Eftersom ett CSS-dokument då appliceras på ett HTML-dokument så måste varje CSS-regel veta _vad_ den ska appliceras på. Och det är här `selectors` kommer in i bilden. Låt oss se till ett exempel.

> En css-`selector` definierar vilka html-`element` som ska påverkas av en viss effekt.

CSS-selector för HTML-element

index.html

```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>The morning</title>
        <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <p>As Gregor Samsa awoke one morning from uneasy dreams [..]</p>
      </body>
    </html>
```

main.css

```css
    body{
      background-color: lightblue;
    }
    p{
      color: #ffffff;
    }
```

Resultat

<figure class="example">
  <iframe src="examples/css-selectors-simple/"></iframe>
</figure>

Hur ska vi nu tänka kring det här? De viktigaste sakerna att poängtera är:

* _Rad 5_ i html-dokumentet är det som gör att det som säger åt HTML-ninjorna att de behöver hämta CSS-ninjorna och att de ska läsa filen `main.css`.
* _Rad 1_ i css-dokumentet är en `selector` vars `target` är `<body>`-elementet. Det betyder att allt mellan följande [måsvingar][0] (`{...}`) kommer att appliceras på _alla_ `<body>`-element i html-dokumentet. Nu bör det ju förstås bara finnas ett body-element men förhoppningsvis har du redan förstått att vi hade kunnat välja vilket annat html-element som helst.
* _Rad 2 och 5_ i css-dokumentet är faktiskt css-`deklarationer`. Det är de som således bestämmer vilken visuell effekt som ska appliceras på just den selector vi definierat.

> En css-`selector` kan vara vilket html-`element` som helst.

Låt oss se det rent generellt. Syntaxen är alltså som följande.

CSS-syntax uttryckt generellt

```css
    css-selector{
      declaration-property: declaration-value;
    }
```

Så, låt oss uttrycka syntaxen för `deklarationer` i ord: En css-`deklaration` består av en `egenskap` (även kallat: property, nyckel, key), följt av ett kolon (`:`) som fungerar som en avgränsare mellan nyckeln och värdet. Vidare följt av det faktiska `värdet` (som kan ges i en mängd olika format, såsom exempelvis `left`, `-32px`, `233%` eller `light`, beroende på vilken egenskap vi sätter värdet för). Slutligen anger vi ett semikolon (`;`) för att terminera raden. Det sistnämnda gör det möjligt att skriva flera deklarationer på samma rad (vilket dock oftast gör filen väldigt svårläslig).

> En css-`deklaration` består av en `property` (även kallat: nyckel, key, egenskap), ett kolon (`:`), ett `värde` och slutligen ett semikolon (`;`).

### Exempel på selectors genom klass och ID

Utöver att skriva css-selectors som träffar html-element så kan vi även skriva selectors för `ID`:n och `klasser`.

Vi använder ID:n för att definiera "unika" element. Vad menar vi med unika? Jo att om någonting har id:et `container` så får det endast finnas ett enda element på sidan som har just det ID:et. Vi kan självklart skriva flera css-regler som använder just den selectorn. Men i html-dokumentet får ID:t alltså endast förekomma en enda gång.

Behöver vi kunna referera till flera element så använder vi oss av klasser. Klasser fungerar på exakt samma sätt som ID:n förutom just det att det är tillåtet att flera element använder samma klass.

Enklast är nog att som vanligt se till ett exempel över hur detta fungerar.

Klasser och ID:n

index.html

```html
    ...
    <p class="redish">As Gregor Samsa awoke one morning</p>
    <p id="blueish">from uneasy dreams</p>
    <p>he found himself transformed in his bed</p>
    <p class="redish">into a monstrous vermin.</p>
    ...
```

main.css

```css
    p{
      color: orange;
    }
    .redish{
      color: red;
    }
    #blueish{
      color: blue;
    }
```

Resultat

<figure class="example">
  <iframe src="examples/css-selectors-many/"></iframe>
</figure>

[0]: http://en.wikipedia.org/wiki/Bracket#Curly_brackets_or_braces_.7B_.7D

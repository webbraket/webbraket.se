## Doctypes

HTML har funnits i mer än ett par år, och med de åren på nacken kommer en mer än brokig historia. Det har länge funnits fler än en enda browser. Och eftersom de flesta browsers (självklarligen) vill äga majoriteten av marknaden har gett upphov till uttrycket [The Browser Wars][0]. Webbläsare slåss om att vinna den stora majoriteten av användare.

Detta har (bland andra anledningar) gett upphov till att webbläsare i olika skeden implementerat olika delar av HTML-, CSS- och JavaScript-specifikationerna. Med andra ord, att olika "dialekter" av samma språk varit tillåtet i olika webbläsare. Med andra ord att vi kan skriva vissa saker i vissa webbläsare och andra i andra, vilket gör att webbläsare A kanske inte förstår uttryck B, som webbläsare C förstår.

För att försöka vara i framkant har webbläsare implementerat experimentell funktionalitet. Sedan har webbutvecklare börjat använda dessa funktioner, och börjat förlita sig på existensen av dessa funktioner. Vilket har lett till problem när dessa webbsidor sedan läses i webbläsare som inte implementerat dessa funktioner. Kort sagt, så är det en soppa.

### Kan jag använda...

Om du ska ta med dig en poäng ifrån det här kapitlet så bör det vara denna. Anta aldrig att alla webbläsare stödjer den funktionalitet du vill använda. För att ta reda på vilka webbläsare som stödjer en viss funktionalitet du vill använda brukar en enkel webbsökning på funktionaliteten plus termen "browser support" göra jobbet. Om du vill undersöka någonting som är relaterat till HTML5- eller CSS3-standarden så är även [caniuse.com][1] en mycket bra resurs.

### Doctypes

Webbläsarkrigen har (bland andra anledningar) gjort att det är viktigt att deklarera vilken HTML-standard våra dokument följer. Detta så att webbläsaren, "intelligent" (utan att gissa) kan parse:a (tolka) vår fil enligt rätt specifikation.

Om du har svårt att förstå varför vi behöver dessa standarder, stanna upp och fundera över faktumet att html-dokument egentligen bara är text. Ingenting annat. Precis som med naturligt språk, så måste mottagaren av meddelandet förstå hur den ska avkoda informationen. Vi kan alltså se doctype-deklarationen lite som att vi berättar för webbläsaren som ska läsa filen vilket dialekt av HTML vi pratar. Eller kanske snarare vilken grammatik vi använder i vårt dokument. Tänk tillbaka till filtypskapitlet.

Eftersom det finns olika HTML-standarder så finns det alltså olika sätt att uttrycka HTML. Således betyder samma sak olika saker beroende på vilken standard vi använder när vi läser dokumentet.

För att berätta för webbläsaren vilken standard dokumentet bör läsas med behöver vi på den absolut första raden i dokumentet ange en doctype. Vi definerar doctypes med syntaxen `<!DOCTYPE x>`. Där `x` ersätts med den faktiska doctype:en. Nedan följer ett par exempel för hur man deklarerar doctypes.

För att deklarera att ett dokument följer standarden HTML5 skriver vi helt enkelt följande...

```html
    <!DOCTYPE html>
```

Och i kontexten av ett HTML-dokument skulle det se ut som följande...

```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Min sida</title>
        ...
      </head>
      <body>
        ...
      </body>
    </html>
```

Om du inte har en medveten anledning till att använda någonting annat än HTML5, så hävdar vi att det inte finns någon anledning att göra det. Med andra ord, så skulle vi uppmana dig till att antingen hålla dig till HTML5 eller läsa på mer om doctypes om du vill använda någon annan.

> Håll dig till HTML5, alltså `<DOCTYPE html>`, så länge du inte har en annan medveten anledning.

#### Äldre doctypes

Men det finns ju onekligen ett antal äldre doctypes som motsvarar äldre standarder. Låt oss snabbt diskutera igenom några stycken för att skapa oss en uppfattning om varför de har funnits och vad de har gjort.

`HTML 4.01 Strict` tillåter alla HTML 4.01-element och -attribut, men tillåter _inte_ de som deprekerats ("deprecated") i HTML 4.01-standarden. Närmare bestämt, element och attribut som rör visuell presentation snarare än struktur och content, såsom elementet `<font>` eller attributet `bgcolor="#000000"`.

Doctype för HTML 4.01 Strict

```html
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Även `HTML 4.01 Transitional` tillåter alla element och attribut som är tillåtna i HTML 4.01, _inklusive_ de som rör presentation (se förklaring i ovan paragraf).

Doctype för HTML 4.01 Transitional

```html
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

Det finns som sagt markant fler doctypes än dessa. Men vi rekommenderar alltså att du helt enkelt håller dig till `HTML5`. Genom att således deklarera dokumenttypen `<!DOCTYPE html>`. Vill du läsa mer om doctypes kan du t.ex. göra det hos [W3 Schools][2] eller på [Wikipedia][3].

[0]: http://en.wikipedia.org/wiki/Browser_wars
[1]: http://caniuse.com/
[2]: http://www.w3schools.com/tags/tag_doctype.asp
[3]: http://en.wikipedia.org/wiki/Document_type_declaration

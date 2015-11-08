## Modifiera element

När vi väl lärt oss att välja element m.h.a. jQuery är det busenkelt att börja modifiera dessa. jQuery-objektet exponerar oss en mängd behändiga funktioner och egenskaper vi kan använda för att modifiera kollektionen av element som gömmer sig under objektet. I detta kapitel kommer vi att prata om några av de vanligaste.

### html()

Metoden `html()` kan ses som jQuery's motsvarighet till JavaScript's `innerHTML`. Lagom straight forward så hämtar den eller sätter helt enkelt elements `innerHTML`.

#### Exempel

jQuery-metoden html()

Om vi har följande html..

```html
    <p>
      <span>En katt</span>
    </p>
    <p>satt i en hatt</p>
```

Kan vi läsa första paragrafen genom att säga...

```javascript
    $('p').html();         // => "<span>En katt</span>"
```

Men vi kan även modifiera den genom att säga...

```javascript
    $('p').html('En hund'); // => Ändrar ALLA p-elements inre html till "En hund"
```

Vilket förändrar vår html så att vi nu har...

```html
    <p>En hund</p>
    <p>En hund</p>
```

Notera alltså att vi "blev av" med `<span>`-elementet. Samt att **båda** `<p>`-elementens inre html rensades.

Men vänta nu, vad hände nu? Om du var uppmärksam så märkte du att när vi använde metoden `html()` för att **läsa** ifrån en element-kollektion så fick vi endast värdet ifrån det första elementet i kollektionen. Men när vi däremot använda `html()`-funktionen för att **skriva** så opererade vi på alla element i objekt-kollektionen. Vad händer nu egentligen?

> Alla metoder på jQuery-objektet arbetar _inte alltid_ på alla element i kollektionen.

### Vilka metoder opererar över hela kollektionen?

Oavsett vilket jQuery-metod vi använder är det alltså alltid viktigt att vara medveten om huruvida den arbetar på hela kollektionen eller ett specifikt element. En tumregel vi kan använda är att många av metoderna **läser ifrån det första** elementet i kollektionen och **skriver till alla** i kollektionen. Anropar vi alltså `html()` för att **läsa** kommer vi bara att få all inre html för det första elementet, medan om vi använder metoden till att skriva `html('something')` kommer vi förändra `innerHTML` för alla element i kollektionen.

> En bra tumregel är att många jQuery-metoder läser ifrån första elementet i en objekt-kollektion, och skriver till alla.

### text()

Metoden `text()` påminner mycket om metoden `html()` förutom att den fantastiskt nog ger oss innehållet i det första elementet i en element-kollektion utan html. Vi får alltså allt som webbläsaren faktiskt uppfattat som text, utan all störande html. Detta är en mycket användbar metod! Vi kan förstås, precis som med metoden `html()` använda den för att även skriva text till alla element i en kollektion. Låt oss se till några exempel:

#### Exempel

jQuery-metoden html()

Om vi har följande html..

```html
    <p>
      En liten men
      <span>mästerlig</span>
      katt, satt en
      <span>solig dag </span>
      och beundrade en hatt.
    </p>
```

Och sedan hämtar `<p>`-elementets text så här...

```javascript
    $('p').text();   // Hämtar all text i elementet fritt ifrån alla html-element
```

Så får vi...

    "En liten men mästerlig katt, satt en solig dag och beundrade en hatt."

Vilket ju är fantastiskt, för om vi istället hade använt metoden `html()` eller JavaScript's egna `innerHTML` hade vi istället fått...

    "En liten men <span>mästerlig</span> katt, satt en <span>solig dag </span> och beundrade en hatt."

Vilket förstås skulle vara mycket jobbigt att arbeta med om det skulle vara så att vi faktiskt bara vill åt texten, oavsett dess inre elementstruktur.

### attr() & prop()

Låt oss nu prata om två metoder som till synes verkar likna varandra. Metoden `attr()` hämtar och sätter `attribut` (`attributes`), medan metoden `prop` hämtar och sätter `egenskaper` (`properties`). På samma sätt som `text()` och `html()` hämtar båda metoderna ifrån det första elementet, och skriver till alla i en kollektion. Men för att förstå skillnaderna mellan de två metoderna `attr()` och `prop()` behöver vi först förstå skillnaden mellan `attribut` och `egenskaper`.

#### Attribut

När vi pratar om attribut så pratar vi attribut på html-element. Exempel på attribut är alltså `id`, `class`, `name` och `name`, för att nämna några. Med andra ord, attribut är sådant som vi "tilldelar" ett element i vår html. Självklart kan vi både hämta och sätta attribut via JavaScript, men för att förstå skillnaden mellan attribut och egenskaper är det lättast att tänka på attribut som det som vi sätter i html. Nedan följer ett exempel på ett html-element med ett antal attribut.

Att läsa ett elements attribut

Om vi har ett element med ett antal attribut...

```html
    <p class="quote" id="welcome">
      What a wonderful world
    </p>
```

Så kan vi förstås läsa attributen med JavaScript som så...

```javascript
    document.getElementsByTagName('p')[0].getAttribute('class');
    // => "quote"

    document.getElementsByTagName('p')[0].getAttribute('id');
    // => "welcome"
```

Och förstås med jQuery som så...

```javascript
    $('p').attr('class');  // => "quote"
    $('p').attr('id');     // => "welcome"
```

#### Egenskaper

Egenskaper å andra sidan, refererar till egenskaper på ett `HTMLElement`-objekt när den hanteras i JavaScript. Med andra ord (löst uttryckt) publika instansvariabler på JavaScript-representationen av samma element. Vad skulle då egenskaper kunna vara för någonting?

Att läsa ett elements egenskaper

Anta att vi har ett `<p>`-element på sidan..

```javascript
    var p = document.getElementsByTagName('p')[0];
    var i = document.getElementsByTagName('input')[0];

    p.tagName;  // => "P"
    i.tagName;  // => "INPUT"
```

Således kan vi förstås göra samma sak genom jQuery...

```javascript
    $('p').prop('tagName');       // => "P"
    $('input').prop('tagName');   // => "INPUT"
```

#### Undantag

Av historiska skäl och förändringar över tid så beteer sig ovan metoder, i tidigare versioner av jQuery, tyvärr inte alltid såsom man kan tänka sig. Du kan läsa mer om det i jQuery-dokumentationen för[prop][0] eller[attr][1] eller helt enkelt på följande tråd på [StackOverflow][2].

[0]: http://api.jquery.com/prop/
[1]: http://api.jquery.com/attr/
[2]: http://stackoverflow.com/questions/5874652/prop-vs-attr

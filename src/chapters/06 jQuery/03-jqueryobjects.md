## Objektet jQuery

I JavaScript-kapitlet använde vi rå JavaScript för att hämta och manipulera objekt i DOM:en. Vi har alltså direkt interagerat med DOM:ens API. Eftersom det lätt blir frustrerande att t.ex. skriva `document.getElementsByTagName` gång på gång så finns det ramverk som kan hjälpa oss. Därför ska vi nu istället göra detta med jQuery, och därför behöver vi prata om det mest grundläggande objektet i jQuery, själva jQuery-objektet. Således även reflektera över skillnaden mellan att arbeta med jQuery-objekt och `HTMLElement`-objekt.

### Varför?

När vi hämtar element ifrån DOM:en m.h.a JavaScript får vi alltså tillbaka just DOM-element. Men när vi arbetar emot "råa" DOM-element blir många saker, som tidigare nämnt, ofta "tjatiga" och onödigt komplicerade. Beakta nedan exempel:

Hämta elementet `<body>`

Med JavaScript

```javascript
document.getElementsByTagName('body');
```

Med jQuery

```javascript
$('body')[0];
```

Uppenbart kräver jQuery-exempelet ovan att vi skriver markant mindre kod. Onödigt, kanske du tänker nu. Visst, vinsten i ovan exempel är inte massiv. Men låt oss istället se till ett mer avancerat exempel. Anta att vi skulle vilja ta bort alla `<p>`-element ur ett dokument. Nedan ser du hur vi först skulle kunna lösa det med JavaScript och sedan med jQuery.

Ta bort alla `<p>`-element

Med JavaScript

```javascript
var all = document.getElementsByTagName('p');
for(i=all.length-1; i>=0; i--){
  all[i].parentNode.removeChild(all[i]);
}
```

Med jQuery

```javascript
$('p').remove();
```

Förhoppningsvis ser du nu styrkan! jQuery försökt att ta hand om den del vanligt återkommande problem och således försökt erbjuda oss utvecklare lite mindre huvudvärk. Nu kanske du redan fått huvudvärk flera gånger och känner den komma igen av att du behöver lära dig någonting nytt &mdash; men lugn! När du väl fått kläm på syntaxen kommer jQuery hjälpa dig ofantligt, och förhoppningsvis kommer du vara arg på att vi försökte lära dig JavaScript först.

> Förutom att jQuery gör det lättare för oss att utföra omständiga DOM-operationer gör den också att vi får mer webbläsarkompatibel kod, eftersom jQuery bygger på mycket "best practices".

### Vad är det?

jQuery-objektet fungerar helt enkelt så att vi "wrappar" (omsluter/dekorerar) ett helt vanligt `HTMLElement` med jQuery. När vi har gjort det har vi helt plötsligt ett objekt som dels innehåller en referens till detta helt vanliga `HTMLElement` men även en massa smidiga hjälpmetoder som hjälper oss att interagera med detta `HTMLElement`.

jQuery-objekt kan göra mycket fler saker än att hämta och manipulera element men nu ska vi fokusera på att det kan göra just det sistnämnda &mdash; alltså hämta element, och sedan manipulera dem. Låt oss se till det tidigare diskuterade exempelet som tog bort alla `<p>`-element ur ett dokument.

Ta bort alla <p\>-element med jQuery

```javascript
$('p').remove();
```

Det viktigaste vi måste förstå med ovan exempel, är att jQuery opererar på kollektioner av element och inte på enstaka element. Nu är det ju förstås så att det är fullt möjligt att vår kollektion endast innehåller ett element, men det är ändock en kollektion. För att dra en parallell så kan du tänka på hur JavaScript-metoden `document.getElementsByTagName()` fungerar. Namnet på metoden är pluraliserad eftersom även den returnerar en kollektion av `HTMLElement`. Detta alltså till skillnad ifrån `document.getElementById` som i alla fall returnerar max ett `HTMLElement`.

> jQuery opererar på kollektioner av element.

Men vad betyder då detta i praktiken? Jo, det betyder alltså att jQuery inte bryr sig om huruvida vi hittade ett eller flera element, när vi i ovan exempel anropar metoden `.remove()` så tar den alltså bort alla element i hela den kollektion den hade hittat. Låt oss se till ytterligare ett exempel för att illustrera detta:

Tänk på att jQuery alltid arbetar på kollektioner av element

HTML

```html
<p> hello </p>
<p> world </p>
```

jQuery

```javascript
$('p')[0].innerHTML;    // => "hello"
$('p')[1].innerHTML;    // => "world"
$('p').text();          // => "hello world"
```

Vi kan hantera jQuery-objektet som en array. På rad 1 och 2 i ovan exempel gör vi just det. När vi använder klammerparantesnotationen (`[i]`) och ger ett index, så hämtar vi alltså det `HTMLElement` som gömmer sig under det indexet. När vi sedan anropar `innerHTML` får vi ut den text som finns i just det `HTMLElementet`. När vi däremot på rad 3 anropar `text()`-metoden (som alltså är en jQuery-specifik metod) så opererar vi alltså på kollektionen av alla träffade element. Anledningen till att vi inte använder `text()`-metoden på rad 1 och 2 är alltså för att den metoden är specifik för jQuery. Eftersom vi på rad 1 och 2 redan plockat ut ett `HTMLElement` ur jQuery-objektet så har vi alltså inte längre tillgång till jQuery's metoder. Vice versa gäller alltså på rad 3\. Eftersom vi inte plockat ut något `HTMLElement` ur jQuery-kollektionen kan vi inte använda "vanliga" `HTMLElement`-metoder (eftersom det är ett `jQuery object`) utan måste istället använda jQuery-specifika metoder. Vill vi använda de vanliga `HTMLElement`-metoderna behöver vi plocka ut ett specifikt element ur kollektionen.

### Hämta element

Låt oss nu prata om vi hämtar element-kollektioner m.h.a. jQuery. Att hämta element med jQuery är egentligen mycket enkelt. Vi skriver helt enkelt `$(x)` där `x` ersätts med vilken css-selektor som helst. Med andra ord kan vi återanvända alla våra css-kunskaper nu när vi dyker in i jQuery.

Utan att snöa ner oss i svårare selektorer så kommer du förhoppningsvis ihåg de enklaste. De vanligaste css-selektorerna är:

**` x`**

> Element av typ x

**`#x`**

> Element med id x

**`.x`**

> Element med klassen x

> Om du behöver läsa på om css-selektorer, läs mer i css-kapitlet!

Ok, men nu var det ett väldigt generellt prat här. Låt oss istället se till några exempel där vi faktiskt använder dessa selektorer.

Hämta element av typ x

```html
<div> Anta </div>
<div> att vi har </div>
<div> ett par div:ar </div>
```
```javascript
// Då väljer vi alla så här:
var allaDivar = $('div');
```

Ovan hämtade vi alltså element baserat på deras `tagName`. Låt oss nu istället hämta alla element, oavsett typ, som har en viss `class`.

Hämta element med klassnamn

```html
<div class="dog"> Woof! </div>
<div class="cat"> Mjau! </div>
<div class="dog"> Bark! </div>
```
```javascript
 // Använd klass-selektorn för att hämta alla element med en viss klass
 var dogs = $(".dog");

 // För att illustrara att det verkligen fungerar
 dogs.text();    // => "Woof! Bark!"
```

Busenkelt! Du börjar se mönstret? Låt oss nu istället prova en sista gång genom att hämta alla element med ett visst `ID`.

Hämta element med ID

```javascript
<p id="super-woman">Kryptonite!</p>
<p id="cat-woman">In your house eating your cat food!</p>
<p id="modesty-blaise">Secret agent</p>

// Vi använder css-selektorn för ID
var hero = $('#super-woman');

// Och har nu valt rätt element
hero.text();   // => "Kryptonite!"
```

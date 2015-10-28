## Event listeners i jQuery

En av styrkorna med jQuery är att vi kan binda event-lyssnare till flera element samtidigt. Jämför detta med att behöva iterera över en array med element, plocka ut ett för ett och applicera samma lyssnare. Markant enklare att göra det på alla samtidigt!

jQuery har några generella metoder för att applicera event-lyssnare (som med fördel kan jämföras med JavaScripts `addEventListener()`). Men jQuery har även några specifika för vanligt förekommande events som `click` och `hover`. Låt oss kolla på ett exempel, och kom ihåg att jQuery arbetar på kollektioner av element, alltså flera stycken samtidigt.

Exempel att applicera lyssnare på alla divar samtidigt

HTML

```html
<div>Oh no no no...</div>
<div>Please do not click me, oh no no, please...</div>
<div>I don't want to fade, please...</div>
```

jQuery

```javascript
$('div').click(function(){
  $(this).fadeOut();
});
```

Resultat

<figure class="example">
<iframe src="examples/jquery-event-listeners"></iframe>
</figure>

Om du försöker bygga ovan exempel med ren JavaScript kommer du snabbt märka varför det gör livet så hiskelens mycket enklare att arbeta med ett JavaScript-bibliotek såsom jQuery.

### Vem avfyrade ett event?

Som du kanske märkte i senaste exemplet, så använde vi oss av följande syntax: `$(this)`. Mystiskt kan tyckas, men mycket smidigt faktiskt. När vi kör jQuery-funktionen (`$()`) och ger den en css-selektor så kommer jQuery att välja alla element som matchar den selektorn. Men vi kan faktiskt också ge jQuery-metoden ett annat `HTMLElement`. T.ex. så här:

Wrappa ett HTMLElement i jQuery

```javascript
// First grab the first <p>-element using regular JavaScript
var paragraph = document.getElementsByTagName('p')[0];

// Then wrap it as a jQuery object
var $paragraph = $(paragrah);

// And now we can do all the regular cool jQuery stuff
$paragraph.fadeOut();
```

Men vänta nu, i det tidigare diskuterade exemplet så skickade vi ju faktiskt inte ett html-element, utan vi skickade nyckelordet `this`. Löst uttryckt så refererar nyckelordet `this` i JavaScript alltid till den nuvarande kontexten. Det intressanta är alltså att om vi skickar den nuvarande kontexten till jQuery-metoden så kommer den försöka skapa ett jQuery-objekt av det. Om vi då befinner oss i en `event handler` (t.ex. den kod som exekveras när en knapp klickas på) så kommer det element som avfyrade elementet bli det objekt som hamnar i jQuery-objektet. Låt oss se till ett exempel.

Att identifiera den som avfyrade ett event med jQuery

Om vi har följande html...

```html
<p>Hello world</p>
```

Kan vi göra följande i jQuery...

```javascript
// First define a click function, that we want to
// execute whenever something is clicked.
var onClick = function(){
  var sender = $(this);  // Creates a jQuery object of the element that was clicked
  alert(sender.text());  // Sends a message with the contents of the clicked element
}

// Then we need to attach our click function to the <p>-element,
// so that it will be fired when the element is clicked.
$('p').click(onClick);
```

Detta kommer nu alltså att ge oss följande...

Resultat (testa att klicka på paragrafen)

<figure class="example">
<iframe src="examples/jquery-events-this"></iframe>
</figure>

Detta går självklart även att göra med helt vanlig JavaScript, såsom du förhoppningsvis kommer ihåg ifrån JavaScript-kapitlet. Att det är enklare att göra i jQuery är ju förstås ett plus! Men det viktiga att komma ihåg är här alltså att detta gör det möjligt för oss att skriva mycket mer generella `event handlers` (alltså metoden som körs när ett event avfyras). Om vi t.ex. har tre knappar som alla gör väldigt liknande saker, så finns det alltså ingen anledning att binda separata event-hanterare (`event handler`) för varje knapp. Istället generaliserar vi koden i event-hanteraren och binder alla events till samma hanterare. Sött som sylt!

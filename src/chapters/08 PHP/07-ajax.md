## AJAX och PHP

AJAX (Asynkron JavaScript och XML) är ett samlingsnamn som innefattar flera olika tekniker. Kombinationen används för att kunna uppdatera en sida utan att ladda om hela dokumentet. Detta kan vara praktiskt då vi kan behöva göra något på servern utan att störa användaren genom att behöva vänta på att sidan laddas om.

De tekniker som i huvudsak används i samband med AJAX är...

* `XMLHttpRequest` är ett API för att kunna överföra och ta emot XML mellan server och klienten.
* `DOM` (Document Object Model) är ett API som tillåter oss att interagera med ett dokument (HTML/XML/XHTML). Det är språk- och plattformsoberoende men vi kommer använda JavaScript-implementationen.
* `HTML` & `CSS` är ett märkesspråk och stylesheet-språk som vi använder för att först "märka upp" ett dokument och sedan definera hur det ska presenteras.
* `XML` är ett märkesspråk där dokumentkreatören själv kan välja (i stort sett) vilka element- och attributnamn som helst. Om HTML är mer dokumentfokuserat så är XML mer datafokuserat. Det används ofta för att transportera data.
* `Javascript` är det programmeringspråk vi använder för att kunna interagera med DOM:en, alltså den nuvarande webbsidan.

AJAX är som sagt en teknikfamilj. Notera att denna familj inte inkluderar något server-side-språk. Detta betyder att vi självklart kan använda AJAX-tekniker i kombination med i stort sett vilket server-side-språk som helst. `ASP.NET` eller `Ruby` till exempel. Men eftersom vi i denna guide använt oss av `php` så är det just det vi kommer att fokusera på här.

Vi kommer även använda oss av `jQuery` istället för att skriva "ren" `JavaScript`. Detta av den enkla anledningen att det är krångligare att arbeta med AJAX direkt i `JavaScript`. Vi föreslår dock att du för eller senare absolut undersöker provar på att arbeta med AJAX i ren JavaScript. Det är alltid bra att veta vad som händer "under huven".

Så, låt oss då utan om och men sluta jiddra och börja trolla!

### jQuery get()

Denna metod kan vi använda för att göra ett asynkront `GET request`. Alltså i `JavsaScript`. Och alltså utan att sidan vi är på laddas om.

Ändra innehåll med utan att ladda om sidan med jQuery.

```javascript
    $('button').click(function(){
      $.get('test.php',function(data, status){
        // the argument 'data' now contains the response
        $('.result').html(data);
      });
    });
```

Som ni ser har vi på en knapp som vid ett knapptryck gör ett `HTTP GET` request till servern. Innan vi tittar lite närmare på vad som faktiskt kommer att hända. Låt oss först undersöka vad sidan vi skickar ett request till (alltså `test.php`) innehåller.

Sidan som efterfrågas (i.e. `test.php`)

```php
    <?php
      echo "Hello from AJAX!";
    ?>
```

jQuery-metoden get tar emot två argument. Först en (1) URL som motsvarar den sida vi vill request:a. Vidare en (2) callback-funktion. Alltså en funktion som kommer att anropas när request:et är avslutat och vi får ett response tillbaka.

### jQuery get() med parametrar

Tänk på hur ett `HTTP GET request` fungerar. Kanske kommer du ihåg att vi alltid kan skicka parametrar. Alltså såsom nedan:

    http://example.com?name=Tarzan&breed=manape

Självklart tillåter även jQuery-metoden GET att vi skickar parametrar. För att vi ska slippa konstruera denna url med url-enkodade parametrar själva, så är jQuery-metoden get konstruerad så att vi istället kan skicka ett javascript-objekt med nycklar och värden som motsvarar den data vi vill skicka.

Parametrarna skickar vi som andra argument. Och eftersom vårt callback ska vara det sista argument så blir det nu det tredje argumentet. Såsom i exemplet nedan.

Att göra ett anrop via jQuery get() med parametrar

```javascript
    $('button').click(function(){
      $.get('test.php',
        {
          name:  'Tarzan',
          breed: 'manape'
        },
        function(data, status){
          alert(data);
        }
      );
    });
```

Anta då att vår php-sida (`test.php`) istället ser ut så här:

Sidan som efterfrågas

```php
    <?php
      $name  = $_GET["name"];
      $breed = $_GET["breed"];
      echo "$name is a $breed";
    ?>
```

Om vi har ovan server-side-sida, och kör klientkoden &mdash; så kommer callbacket som avfyras att öppna en `alert`-ruta. I den rutan kommer det att stå:

    Tarzan is a manape  

### jQuery load()

Denna metod är mycket lik `get()`. Men den är till för att snabbare kunna lösa ett vanligt problem. Eftersom det är mycket vanligt att asynkront göra ett request till en annan sida och sedan visa body:t av det response vi får tillbaka i ett element så gör denna metod just dessa två saker. Vi kan alltså se metoden `load()` som en kombination av `get()` och `html()`. Låt oss exemplifiera.

Göra ett asynkront request och ersätta innehållet i ett element med det response som kommer tillbaka &mdash; load()

Anta att vi uttrycker följande med hjälp av `load()`...

```javascript
    $('.result').load('test.php', function() {
      alert('Success! The contents of .result are now updated.');
    });
```

..då ger det alltså samma effekt som om vi hade uttryckt följande med hjälp av `get()`...

```javascript
    $.get('test.php', function(data, status){
      alert('Success! The contents of .result are now updated.');
      $('.result').html(data);
    });
```

Vi slipper alltså explicit uppdatera html-elementet genom `html()`. Så om vi skippar callback:et helt så skulle vi t.o.m. kunna kondensera vår kod ner till följande...

```javascript
    $('.result').load('test.php');
```

### jQuery post()

Vi vill sedan även bara poängtera att vi nu bara har pratat om hur vi använder jQuery för att göra `GET request`:s. Men det går förstås även utmärkt att göra `POST`-anrop. Detta genom `post()`. Men eftersom användandet är mycket likt, så lämnar vi det till dig att [läsa på hur metoden ska användas][0].

### Notis

Att jobba med asynkrona anrop är kraftfullt och bör vara en viktig kunskap i verktygslådan som webbutvecklare. Dagens webb är snabb och interaktiv. Vi kan inte alltid låta användare vänta på att hela sidan laddas om. Och det finns mycket vi med fördel gör i bakgrunden. Tänk på det!

[0]: http://api.jquery.com/jquery.post/

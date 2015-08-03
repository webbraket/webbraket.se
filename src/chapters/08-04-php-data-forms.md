## Hantera formulärdata

När vi pratade om formulär i `html` så fokuserade vi endast på hur vi får webbläsaren att visa upp de formulärkomponenter vi vill. Textfält, radioknappar, checkboxar, knappar och så vidare. Dock pratade vi aldrig om hur vi som utvecklare kan använda oss av och komma åt den datan som användaren skriver i formulären. Vi nämnde att vi behöver ett server-side-språk för att kunna göra någonting permanent med datat --- såsom att spara det i en databas. Så, eftersom vi nu befinner oss i kapitlet om server-side-språk så är det just det vi ska prata om. Alltså, hur vi på olika sätt kan läsa "input" ifrån användaren.

Faktum är att detta kapitels rubrik egentligen är ganska missvisande. Vi pratar inte bara om hur du kan läsa data ifrån ett formulär ifyllt av en användare. De tekniker vi kommer att prata om här har mycket bredare användning. Och borde kanske snarare kalla detta kapitel för --- "Att genom php och html läsa och skicka ifrån och till ett http request". Men den titeln var inte lika "catchy" :)

Låt oss börja med att repetera hur ett vanligt `html`-formulär ser ut. Beakta nedan exempel, och fundera över faktumet att attributet `method` är tillskrivet värdet `GET`. Fundera även över faktumet att attributet `action` är tillskrivet värdet `process.php`.
    
    <form action="process.php" method="GET">
      <label for="field-name">Ditt namn</label>
      <input type="text" id="field-name" name="name" placeholder="Ditt namn" required>
     
      <label>Vad vill du äta till frukost?</label>
     
      <label for="field-pancakes">Pannkakor</label>
      <input type="radio" id="field-pancakes" name="breakfast" value="pancakes">
     
      <label for="field-scrambled">Äggröra</label>
      <input type="radio" id="field-scrambled" name="breakfast" value="scrambled">
     
      <label for="field-toast">Övrigt</label>
      <input type="radio" id="field-toast" name="breakfast" value="toast">
     
      <input type="submit" value="Skicka!">
    </form>

Resultat

Ditt namnVad vill du äta till frukost?

Pannkakor

Äggröra

Toast

Vi bad dig att framförallt notera användandet av nyckel-värde-paren `action="process.php"` och `method="GET"`. Kanske har du redan ett hum. Men låt oss prata om det. Vad betyder dessa två egentligen? Varför behöver vi ange dessa attribut? Och vad kan vi ge de för värden? Låt oss ta de en efter en.

### Form action

När användaren klickar på `submit`-knappen i ovan formulär så kommer formulärdatat att skickas till sidan `process.php`. Eller mer specifikt uttryckt så kommer klickandet på knappen att orska användarens webbläsare att utfärda ett nytt [HTTP Request][0]. Alltså i stort sätt samma sak som händer när man trycker på en länk. Webbläsaren utfärdar ett nytt request till den [url][1] som gömmer sig under länken. Vi väntar. Och så fort webbläsaren får ett `response` så är vi på den nya sidan.

När användaren trycker på "submit"-knappen så "skickas" denne helt enkelt till en annan sida. Vilken sida användaren skickas till bestäms utav den `url` vi anger som nyckel i attributet `action="[url]"`.

I fallet ovan så hade vi angett filnamnet `process.php`. Eftersom vår url varken börjar med ett protokoll eller ett slashtecken (`/`) så är det en [relativ url][2] och vi kommer helt enkelt att skicka användarens webbläsare till sidan `process.php` om det finns en sådan sida på den "plats" användaren befinner sig just nu. Med andra ord. Om användaren (och således även formuläret) befann sig på adressen `http://example.com/breakfast.php` så skulle användaren, när den klickar på "submit" i formuläret att skickas till adressen `http://example.com/process.php`.

Det kanske **viktigaste** med allt detta --- är ju förstås inte att vi skickar användaren till en ny `url`. Det viktigaste är att den data som användaren fyllt i i formuläret **skickas med i detta http request**.

### Form method

Så vad gör då attributet `method="[HTTP METHOD]"`? Egentligen är det inte särskilt konstigt. Vi har redan klargjort att när användaren klickar på formulärets "submit"-knapp så kommer användarens webbläsare att utföra ett nytt `http request`. Alltså omdirigeras till en ny `url`. Samt att den data som användaren matat in i formuläret faktiskt **skickas med i samma request**. Notera ordvalet "i samma request". Den uppenbara frågan är ju förstås --- hur? Hur kan en massa data som användaren har fyllt i skickas med ett `http request`. Det kan ju vara precis viiiilken data som helst. Det är alltså just här attributet `method="[HTTP METHOD]"` kommer in i bilden.

Det går alltså att bädda in en massa data i ett `http request`. Gärna på [nyckel-värde-par][3]-form. Men eftersom det finns [olika typer av http requests][4] så kan data alltså skickas på olika sätt. Eller snarare olika "form" (no pun intended). Detta är vad attributet `method` styr över. Attributet avgör alltså vilken typ av `http request` vi ber användarens webbläsare att göra. 

De två vanligaste typerna av `http request` är [GET][5] och [POST][6]. Det finns ett par andra typer, men eftersom [formulär i `html` endast tillåter dessa två][7] så är det endast dessa vi kommer att fokusera på här. Du kan [läsa om fler metoder hos standardsorganet W3C][8].

När användaren klickar på `submit`-knappen i detta formulär så kommer formulärdatat att skickas genom metoden `HTTP GET`. Eller mer specifikt --- när användaren klickar på knappen kommer användarens webbläsare utföra ett nytt [HTTP Request][0]. Detta request kommer att göras till den `url` som är specificerad av attribtuet `action`. Men eftersom det finns olika typer av `HTTP requests` (t.ex. `POST` och `GET`) så anger vi vilken typ av request vi vill göra under `action`.

### Skillnader emellan POST och GET

Låt oss nu diskutera lite skillnader emellan POST och GET. Det enda rätta är väl egentligen att gräva ned oss och snabbt kika på hur dessa olika requests ser ut. Så att vi är överens om att det inte är någon slags svart magi. Men låt oss först kika på deras utvärtes skillnader.

När du knappar in en `url` i din webbläsare och trycker enter så är det alltid ett `GET` request du kommer att skicka. Så länge du inte använder en webbläsare som är designad för att skicka andra typer av requests. Rent "design"-mässigt så används `GET` för att _hämta_ resurser. Alltså _inte_ för att förändra. Med andra termer skulle vi kunna säga att idealfallet är att ett `GET request` är [fritt ifrån sidoeffekter][9] på servern. Vi använder ordet "design" eftersom detta ju är en rekommendation. Således en rekommendation som inte alltid följs. Om vi låter användare göra `GET requests` till en given sida, och sedan ökar en räknare i en databas för att föra användarstatistik så är det ju en s.k. "sidoeffekt". Denna diskussion är helt enkelt inte svartvit.

Det är även rimligt att anta att vi i exempelrutan ovan med frukosten har brutit emot regeln om att använda `GET` för sidoeffektsfria anrop. Men eftersom vi ännu inte berättat vad vi ska göra med datat som användaren skickar så är det förstås svårt att säga :)

Ett lättare sätt att belysa distinktionen lär vara detta. Vi skulle hävda att ett sökformulär bör skicka sin data via `GET`. Medan ett registreringsformulär rimligen bör skickas över `POST`. Även ett inloggningsformulär skulle vi nog skicka över `POST`. De två senare förändrar ju faktiskt "state" på servern. I första fallet genom att lagra en till användare i databasen. I andra fallet genom att skapa en session för användaren (alltså markera den som inloggad). Medan i det allra första fallet --- sökfallet --- så vill vi ju faktiskt bara filtrera information. Ingenting förändras på servern. Vi vill, till användaren, returnera information som rimligen är ett subset av någonting annat. 

Det är fullt förståeligt om du tycker att det här är förvirrande. Det blir mycket på en gång. Men låt oss se det ifrån en annan vinkel. Låt oss fundera på hur data (exempelvis alltså formulärdata) skickas med de olika anropstyperna. Nedan följer två exempel på hur ett request till en sida skulle kunna se ut. Den ena varianten användet `GET` och den andra använder `POST`. Det viktiga är att du fokuserar på hur datat skickas.

Exempel på HTTP requests genom GET och POST

Låt oss kika på hur dessa requests faktiskt ser ut. Vi gör anrop till adressen `example.com`. Och vi vill skicka med följande data: `color = red` och `shape = circle`. Fokusera framförallt på hur denna data i de två exemplena skickas olika.

Ett request genom `HTTP GET` skulle då kunna se ut som så...
    
    GET https://example.com/?shape=circle&color=red
    Accept: */*
    User-Agent: runscope/0.1

Och ett request genom `HTTP POST` skulle istället kunna se ut som så...
    
    POST https://example.com/
    Accept: */*
    Content-Length: 22
    Content-Type: application/x-www-form-urlencoded
    User-Agent: runscope/0.1
    shape=circle&color=red

Båda dessa requests skickades tjänsten [hurl.it][10]. Prova gärna och utförska själv!

Märkte du vad som var lustigt i ovan exempel? Det är förstås mycket som känns (o)lustigt med `http requests` första gången man ser dem. Rena mumbo jumbon. Men det viktiga vi behöver förstå är att den data som vi skickar med i ett `GET`-anrop blir en del av själva `url`:en vi anropar. Studera de två exemplena ovan. I det första fallet så anropar vi en url med ett frågetecken och en massa text på slutet. Detta är vår data "inkodad" i url:en enligt en standard som kallas [url encoding][11]. Själva strängen med det kodade datat kallas för en [query string][12]. I det andra fallet däremot. Där anropade vi helt enkelt bara den `url` vi ville till. Utan en massa urlkodad information i slutet av adressen. Istället skickade vi informationen längst ned i vårt `request`.

Som du kanske har misstänkt betyder detta alltså att när vi gör anrop via `GET` så syns all data vi skickar med i anropet i `url`:en själv. När vi däremot gör ett `POST`-anrop så syns inte all data i adressen. Bara denna information gör att vi kan göra smartare val kring när vi ska använda den ena och när den andra. En fördel med att t.ex. skicka data i `url`:en själv är ju att en användare kan kopiera den adressen och skicka till en kompis. Om vi istället skulle skicka datat "gömt" genom `POST` så skulle datat inte "följa" med när användaren kopierade url:en. Användaren skulle då istället behöva kopiera hela `HTTP requestet`. Vilket inte riktigt är något den vardaglige användaren ens skulle orka bry sig om att tänka på.

### Läsa POST och GET i PHP

Låt oss nu istället prata om hur vi i `php` kan läsa den data som kan skickas genom ett request. När en `php`-fil körs (i kontexten av en webbapplikation) så körs den rimligen av en webbserver (t.ex. [Apache][13]). En webbserver kan ju, som vi långt tidigare klargjort, ta emot `request`:s. Och som vi nu klargjort kan ju `request`:s (bl.a.) vara av typen `POST` eller `GET`. Och i båda fallen kan de innehålla data ifrån den som skickat `request`:et. Och eftersom det är en just en webbserver som delegerar neråt till `php` så är det så fantastiskt att de flesta webbservrar låter anropet till server-side-språket få veta vad den har fått för request. Det betyder alltså att om vi använder _Apache_ och `php` så kommer vi i vår kod åt en hel del information om det anrop som faktiskt orsakat att vi kör den kod vi just nu kör. Låt oss se till några exempel.[$\_REQUEST][14]En _superglobal_ _associativ array_ som innehåller alla requestvariabler oavsett om de kommer ifrån _GET_, _POST_ eller _Cookies_.

[$\_GET][15]En _superglobal_ _associativ array_ som innehåller alla requestvariabler som återfinns i den nuvarande _url_:en.

[$\_SERVER][16]En _superglobal_ _associativ array_ som innehåller en mängd matnyttig information. Bland annat vilken requesttyp nuvarande _request_ är av, nuvarande _querystring_ eller vilken _port_ skriptet körs på, o.s.v.

[getallheaders()][17]En metod som returnerar en _array_ innehållandes alla _http headers_ för det nuvarande _http request_:et.

Notera att det är fullt möjligt att skicka `GET`- och `POST`-data samtidigt eftersom vi kan göra ett `POST`-request till en url i vilken vi manuellt adderar urlkodade nyckel-värde-par. Anta alltså t.ex. att vi skulle efterfråga url:en `http://example.com/?shape=triangle`. Om vi t.ex. skulle ange den _url_:en som värde till `action`-attributet i ett formulär, och sedan ange att formulärets `method` skulle vara `POST`. Då kommer formulärets data ju alltså skickas i ett `POST`-request, men eftersom _url_:en vi angav redan innehöll data formaterad som i ett `GET`-request så kommer vi även ha skickat med den datan.

Så med andra ord är det i ärlighetens namn inte möjligt att göra ett `POST`- och `GET`-request samtidigt. Men det är däremot absolut möjligt att skicka urlparametrar trots att vi gör ett `POST`-request. Således kan det, i relation till `php`, hända att vi har värden i `$_GET` trots att vi har värden i `$_POST`. Och trots att ett request var av typen `POST`. Mycket behändigt kommer du märka!

### Exempel på användning i PHP

Låt oss nu då faktiskt se till ett konkret exempel på hur vi kommer åt informationen genom `php`. Anta att vi anropat följande _url_: `http://example.com/?name=Johnny&breakfast=pancakes`. Om du kikar på formuläret vi hade som exempel högre upp i detta kapitel, så ser du nog hur den här _url_:en faktiskt skulle kunna vara ett resultat av en användare som fyllt i formuläret. I vår `php` skulle vi då alltså kunna hantera formulärdatat som så:

Att läsa värden ifrån $\_GET

    // Assuming an incoming GET request for the following url:
    // http://example.com/?name=Johnny&breakfast=pancakes
     
    $name   = $_GET["name"]
    $choice = $_GET["breakfast"]
     
    echo "Dear $name, I'll certainly make you some $choice!";

Resultat

Dear Johnny, I'll certainly make you some pancakes.

### Att själv konstruera ett GET request

Som tidigare nämnt så kan _querystring_-variabler förekomma även utan att vi använder ett formulär. Som tidigare nämnt så är ju de flesta requests faktiskt `GET` requests, och således uppenbara kandidater för att innehålla _querystring_-variabler.

Vi skulle t.ex. kunna skicka data med en helt vanlig länk.
    
    <a href="http://example.com/?name=Johnny&breakfast=pancakes">
      Johnny likes pancakes
    </a>

Vilket skulle ge:

[Johnny likes pancakes][18]

Vi skulle förstås även kunna använda `php` för att göra precis samma sak men istället byta ut de konkreta värdena emot variabler.
    
    <a href="http://example.com/?name=<?= $name; ?> &breakfast=<?= $choice; ?>">
      Johnny likes pancakes
    </a>

Men eftersom det ändå är så pass vanligt att konstruera en _querystring_ så erbjuder `php` oss en fantastisk metod som hjälper oss genom att automatiskt transformera en _associativ array_ till en _querystring_. Med andra ord så här:
    
    <?php
      $data = array(
        'name'      => $name,
        'breakfast' => $choice
      );
      $querystring = http_build_query($data);
    ?>
     
    <a href="http://example.com/?<?= $querystring; ?>">
      Johnny likes pancakes
    </a>

Om vi ifrån en `php`-sida skulle vilja automatiskt omdirigera (_redirect_) användaren till en annan sida så kan vi använda `php`-metoden `header('Location: [url]')`. Och om vi vill även vill passa på att skicka med parametrar, så kan vi förstås göra det genom att som vanligt lägga till en _querystring_ i slutet av `url`:en. Alltså som så:
    
    <?php
      $data = array(
        'name'      => $name,
        'breakfast' => $choice
      );
      $querystring = http_build_query($data);
    ?>
     
    // And then redirect
    header("Location: http://example.com/?$querystring");

Om du inte redan märkt det, så är alltså syntaxen för att bygga upp en querystring följande:
`nyckel=värde` där varje nyckel-värde-par separeras genom ett och-tecken (`&`). Sedan är det förstås viktigt att komma ihåg att om vi ska lägga till en _querystring_ till en `url` så måste vi avgränsa slutet på `url`:en och början på _querystring_:en med ett frågetecken (`?`). Så sammantaget blir det alltså:
    
    http://example.com/?key1=value1&key2=value2&keyN=valueN



[0]: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
[1]: http://en.wikipedia.org/wiki/Uniform_resource_locator
[2]: http://www.w3.org/TR/WD-html40-970917/htmlweb.html#h-5.1.2
[3]: http://en.wikipedia.org/wiki/Attribute%E2%80%93value_pair
[4]: http://www.w3schools.com/tags/ref_httpmethods.asp
[5]: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
[6]: http://en.wikipedia.org/wiki/POST_(HTTP)
[7]: http://stackoverflow.com/questions/8054165/using-put-method-in-html-form
[8]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
[9]: http://en.wikipedia.org/wiki/Side_effect_(computer_science)
[10]: http://www.hurl.it/
[11]: http://www.w3schools.com/tags/ref_urlencode.asp
[12]: http://en.wikipedia.org/wiki/Query_string
[13]: http://en.wikipedia.org/wiki/Apache_HTTP_Server
[14]: http://www.php.net/manual/en/reserved.variables.request.php
[15]: http://www.php.net/manual/en/reserved.variables.get.php
[16]: http://www.php.net/manual/en/reserved.variables.server.php
[17]: http://www.php.net/manual/en/function.getallheaders.php
[18]: http://example.com/?name=Johnny&breakfast=pancakes
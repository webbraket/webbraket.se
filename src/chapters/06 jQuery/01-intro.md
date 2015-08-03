## jQuery snabbstart

[jQuery][0] är verkligen JavaScript-biblioteket med stort B. Biblioteket hjälper oss att göra allt ifrån [animation][1], [iteration][2], till att bygga [one-pagers][3] som använder [ajax][4] för att ladda in data, eller att bygga tangentbordsvänliga applikationer genom att fånga [tangentbordstryckningar][5]. I detta kapitel ska vi dyka rakt in i och börja använda jQuery, utan att fundera särskilt mycket över varför saker fungerar som de fungerar.

### jQuery är ett bibliotek

jQuery är ju alltså ett JavaScript-bibliotek. Ett bibliotek kan, oavsett språk, ses som någonting som utökar det språk vi skriver i för att underlätta vissa aktiviteter.

Säg att vi t.ex. ofta utför aktivitet `A`, `B` och `C` i följd. Någonting ett bibliotek ofta gör är då att t.ex. ge oss ett nytt namn --- säg `Z`, vilket vi kan använda för att utföra alla tre aktiviteter samtidigt.

Ett bibliotek består då alltså av kod, i detta fall kod skriven i JavaScript. Så, för att kunna använda jQuery behöver vi "koppla in" jQuery i våra egna dokument. Låt oss uttrycka oss mer specifikt. Hela jQuery-biblioteket behöver laddas in på varje .html-sida som ska använda jQuery, innan vi försöker använda det.

### Ladda in jQuery

Att ladda in jQuery är enkelt. Hela biblioteket får plats i fil. Vi har två alternativ. Antingen kan vi...

1. Kopiera hela biblioteket, eller [ladda ned filen][6], och spara filen i mappen som innehåller vår webbsida, eller..
2. Låta våra html-sidor ladda ned jQuery via internet ifrån vad som kallas för en [CDN][7].

För enkelhetens skull kommer vi att arbeta med det senare alternativet. Detta gör vi helt enkelt genom att placera följande script-element i vår .html-fil:

index.html

    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>

### Ladda in en fil som använder jQuery

Så, nu har vi jQuery tillgängligt i vårt dokument. Men efter detta behöver vi ladda in en till JavaScript-fil där vi faktiskt _använder_ jQuery. Låt oss alltså skapa en till .js-fil och ladda in den direkt efter som så:

index.html

    <script src="main.js"></script>

### Använda jQuery

Låt oss nu faktiskt använda jQuery till att göra någonting. Vi fortsätter alltså skriva kod i filen `main.js`. Följande kod kommer att vänta tills [DOM][8]:en (alltså HTML-trädet) har laddats in av webbläsaren, och sedan "poppa" up en alert-ruta. Prova att klistra in koden i `main.js` och ladda om din html-sida.

main.js

    $(function(){
      alert("Hello from jQuery");
    });

Tada!! Vi har nu använt oss av biblioteket jQuery. Låt oss prova någonting annat. Följande kod identifierar alla länkar (`<a>`-taggar) på din html-sida. Inaktiverar deras vanliga funktionalitet, och gör istället så att de klistrar in bilder på en massa fantastiska katter varje gång du klickar. Tänk på att du alltså behöver lägga in länkar i din html-sida för att nedan kod ska ha någon effekt. Annars har vi ju inga länkar att klicka på.

main.js

    $(function(){
      var randomNum = function(){
        return Math.floor(Math.random()*101);
      }
     
      $('a').click(function(e){
        e.preventDefault();
        var size = 75 + randomNum(),
        x = randomNum() + '%',
        y = randomNum() + '%',
     
        $img = $('<img/>');
        $img.attr('src', 'http://placekitten.com/'+size+'/'+size);
        $img.css({
          'position': 'fixed',
          'left'    : x,
          'top'     : y
        });
     
        $('body').append($img);
      });
    });

Om du inte själv har valt att implementera den fantastiska jQuery-koden ovan så kan du få en sneak-peak på vilken underbar värld som väntar genom att prova exemplet nedan!

Resultat (prova!)

All your base!

Reset (you will need it I promise)

Svårare än så är det inte! Så, när du använder jQuery behöver du helt enkelt komma ihåg tre saker.

1. Se till att du laddar in jQuery-biblioteket.
2. Se till att din kod som använder jQuery laddas in efter själva biblioteket.
3. Se till att den kod som använder jQuery ligger inom `$(document).ready(function(){ /* din kod här */ });`.

Sedan är det bara att tuta och köra!

Tips!

Ett kortare sätt att skriva..
    
    $(document).ready(function(){
      /* din kod här */
    });

...är att skriva så här...
    
    $(function(){
      // din kod här... 
    });

Båda sätten ger samma resultat.

[0]: http://jquery.com/
[1]: http://api.jquery.com/animate/
[2]: http://api.jquery.com/each/
[3]: http://en.wikipedia.org/wiki/Single-page_application
[4]: http://api.jquery.com/jQuery.post/
[5]: http://api.jquery.com/category/events/keyboard-events/
[6]: http://jquery.com/download/
[7]: http://en.wikipedia.org/wiki/Content_delivery_network
[8]: http://sv.wikipedia.org/wiki/Document_Object_Model
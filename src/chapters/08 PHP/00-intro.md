# PHP

De flesta webbsidor vi idag besöker bygger inte bara på teknikerna `html`, `javascript` och `css`. De flesta webbsidor vi besöker idag byggs även upp med hjälp av ett s.k. `server-side`-språk.

Introduktionsvideo om php och server-side-språk

<figure>
<iframe width="100%" height="375" src="//www.youtube.com/embed/Z-R87-1kFq4?rel=0&vq=hd1080" frameborder="0" allowfullscreen></iframe>
</figure>

Vad är då ett server-side-språk? Tänk så här. När vår webbläsare ber om en sida så skickar den ett `request` till en `server` som svarar med ett `response`. Detta `response` innehåller ju alltså den `html` vår webbläsare kommer att rendera. Om vi **inte** har ett server-side-språk så kommer denna `html`-fil alltid att vara densamma. I detta fall skulle vi kunna säga att den `webbserver` som hanterar vår webbläsares `request` agerar som en statisk filserver. Den serverar oss helt enkelt filer. Vi ber om en fil. Och vi får den tillbaka. Denna typ av webbsida är vad som generellt kallas för [statiska webbsidor][0].

Med server-side-språk så kan vi helt enkelt skapa [dynamiska webbsidor][1]. Den huvudsakliga skillnaden ligger alltså just i termerna dynamisk vs. statisk. En statisk webbserver kan ses som en filserver, medan en dynamisk webbserver snarare kan ses som en applikationsserver. Jämför t.ex. din egen hårddisk med en webbshop på nätet. Om du öppnar en `.html`-fil ifrån din hårddisk kommer den alltid se likadan ut. Inte förrän du förrändrar filen kommer webbsidan att se annorlunda ut. Webbshopen på nätet däremot kanske har en varukorg. Varende gång du besöker varukorgen kan det hända att du (t.ex.) hamnar på `url`:en `www.example.com/checkout.php`. Trots att det alltid är samma sida vi öppnar så innehåller inte alltid den renderade sidan samma sak. Om jag öppnar sidan med min användare visas min shoppingvagn, och om du öppnar den visas din. Men filen ser fortfarande exakt likadan ut i båda fallen.

I essens så handlar server-side-språk alltså om språk som i slutändan genererar (renderar) `html`. Beroende på variabel information såsom databaser, uträkningar, sessioner, `http headers` o.s.v. Men för att dessa språk ska kunna generera sin output (alltså `html`) så krävs det att vi har en server som kan "förstå" det språket. I fallet av `php` så kan vi t.ex. använda webbservern [Apache][2]. Om vi sedan installerar [php][3] så kan vi konfigurera `Apache` så att det använder sig av `php`, och voíla, så har vi en server som kan tolka och rendera `php`. Oroa dig inte om detta låter snurrigt, vi kommer titta närmare på själva installationen alldeles strax.

Noteras bör, att det självklart är så att de stora giganterna till webbsidor där ute i världen inte bygger på endast ett enda server-side-språk och en enda server. Men detta är ett perfekt tillfälle att prata om det välkända idiomet [optimize later][4]. Idiomet säger --- lös problemet först --- och när du löst det --- oroa dig då över optimering. Just nu menar vi alltså att verkligheten är mer komplex, men vi behöver inte bry oss om det förrän vi kommer till den situation då vi förstår varför vi behöver bry oss om det. Men vi vill ändå poängtera, eftersom det är viktigt att inte vara naiv :)

[0]: http://en.wikipedia.org/wiki/Static_web_page
[1]: http://en.wikipedia.org/wiki/Dynamic_web_page
[2]: http://en.wikipedia.org/wiki/Apache_HTTP_Server
[3]: http://en.wikipedia.org/wiki/PHP
[4]: http://c2.com/cgi/wiki?PrematureOptimization

## Sökvägar & Hyperlänkar

Det, för HTML, kanske mest representativa elementet måste ju vara länken. En klickbar yta på skärmen som navigerar oss ifrån en webbsida till en annan. Den tagg vi använder för att denotera en länk är `<a>`. Ett komplett exempel på användandet av en länk skulle kunna se ut som följande.
    
    <a href="http://www.example.com">Klicka på mig</a>

Vilket skulle rendera följande resultat:

<figure>
[Klicka på mig][0]
</figure>

Notera alltså användandet av attributet `href` i ovan exempel. Attributets namn är en förkortning av "hyper reference". Det kan vara bra att fundera över vad de olika förkortningarna du kommer i kontakt med faktiskt éxpanderar till. Då blir det lättare att komma ihåg/på vad attributen faktiskt gör.

### Sökvägar

Attributet `href` specificerar alltså en sökväg till en annan webbsida. Men vad kan ge attributet för olika typer av värden? När vi pratar om sökvägar är det viktigt att förstå att det finns två sätt att ange sökvägar.

1. Absoluta sökvägar
2. Relativa sökvägar

Dessa begrepp är generella och stämmer precis lika bra överens med sökvägar i operativsystemet på din dator. För att förstå skillnaden mellan de två, låt oss använda operativsystemet som exempel.

Under _Microsoft Windows_ så skulle ett exempel på en absolut sökväg t.ex. vara `C:/Users/Jon Snow/Pictures/me.jpg`. Under samma operativsystem skulle ett exempel på en relativ sökväg kunna vara `Pictures/me.jpg`. Den huvudsakliga skillanden emellan de två exemplena är alltså att den första börjar med `C:/`. Förhoppningsvis är du familjär med att varje hårddisk (fysisk eller virtuell) under Windows blir tilldelad en enhetsbokstav, såsom C:, D:, E: o.s.v. Den absoluta sökvägen i ovan exempel utgick alltså ifrån en av dessa enheter. Den relativa däremot utgår inte ifrån någonting explicit. Istället utgår den ifrån den mapp "du är i just nu".

Det lättaste sättet att förstå sökvägar är att reflektera över hur vi själva navigerar igenom filsystemet i våra operativsystem. Tänk på det. När vi letar efter en fil på hårddisken så öppnar vi först någon mapp. Sedan finns det två saker vi kan göra:

1. Öppna en ny mapp i den befintliga mappen,
2. Gå ett steg uppåt/bakåt, eller

Det är även dessa tre verktyg vi har att arbeta med när vi specificerar sökvägar. Varje ord motsvarar en mapp eller en fil. Varje slash-tecken (`/`) motsvarar idéen om att klicka sig in i en ny mapp. Där ordet efter slash-tecknet denoterar namnet på mappen. Notationen punkt-punkt (`..`) motsvarar idéen om att gå upp/bakåt en mapp i hierarkin.

Vi pratade tidigare lite om absoluta och relative sökvägar i relation till _Microsoft Windows_. Låt oss även prata om absoluta och relativa sökvägar i [\*nix-baserade system][1]. I nästan alla operativsystem fungerar idéen om sökvägar på samma sätt. Punkt refererar relativt till den nuvarande mappen. Punkt-punkt till en mapp uppåt. Ett ord till en fil eller mapp i nuvarande mapp. Och slash används för att koppla ihop dessa. Varje slash denoterar alltså i någon bemärkelse "nästa steg".Slash-tecknet denoterar "nästa steg" i en sökväg.

I t.ex. _Mac OS_ och _Linux_ så fungerar alltså sökvägar på samma sätt som ovan nämnt, med en skillnad. För att specificera absoluta sökvägar i \*nix-baserade system så anger vi inte namnet på en enhet (ex: `C:`) såsom i Windows. Isället börjar vi helt enkelt med tecknet slash (`/`). Följande är alltså en absolut sökväg:
    
    /Users/jon-snow/pictures/me.jpg

Om vi i ett \*nix-baserat system vill nå en annan enhet, på samma sätt som vi i Windows kan nå ex. D: så fungerar det ofta som så:
    
    /Volumes/MyOtherDisk

För att sammanfatta absoluta och relativa sökvägar så vill vi understryka att det egentligen alltså är mycket enkelt. En relativ sökväg utgår ifrån den mapp där den som använder sökvägen befinner sig. En absolut sökväg utgår ifrån "roten" av den nuvarande enheten.

> En relativ sökväg utgår ifrån nuvarande mapp. En absolut sökväg utgår ifrån någontings rot.

Förhoppningsvis blir du lite förvirrad av att ovan uttrycker sig i termer av "någontings rot". Det finns olika typer av absoluta sökvägar när vi börjar tala om nätverk, och det är dessa vi ska se närmare på strax.

### Protokoll och URL:er

För att kunna diskutera sökvägar på internet behöver vi skapa oss en förståelse för två saker: protokoll och URL:er. Låt oss diskutera de en för en.

Som du nu vet baseras webbsidor på standarden HTML. När vi med andra ord ber webbläsaren hämta en webbsida så anropar den en server som ger oss ett response som innehåller ett HTML-dokument. Vi har kort diskuterat request-response-modellen. Men vi har inte diskuterat de protokoll som möjliggör det. TCP, IP och HTTP bl.a. För att hålla oss fokuserade kommer vi inte att gräva i dessa. Men för att kunna intelligent angripa idéen om URL:er måste vi skapa oss en viss förståelse för protokollet HTTP.

Men först, vad är ett protokoll? Kom ihåg att vi sa att en klient skickar ett request och en server svarar med ett response. Ett protokoll är helt enkelt en överenskommelse kring hur klienten och servern ska tala med varandra. När vi skickar saker över nätet så skickar vi de i fragmenterade paket och för att routrar, ISP:er och servrar ska veta vart våra paket är på väg, behöver vi protokoll. Här kommer TCP/IP in i bilden. För att servern ska kunna förstå vårt request och för att webbläsaren ska kunna förstå serverns response behöver vi protokollet HTTP (HyperText Transfer Protocol). Protokoll kan alltså liknas vid ett överenskommet språk emellan två parter.

> För att två parter ska kunna kommunicera krävs ett överenskommet språk --- ett protokoll.

Du har säkert kommit i kontakt med både protokollet `http` och den säkrare varianten `https`. Varje gång du skriver in en adress i webbläsaren så anger vi `http://`. Om vi inte gör det själva är webbläsarna idag tillräckligt smarta för att slänga in det protokollet åt oss.

Nu när vi vet vad ett protokoll är --- vad är då en URL (Uniform Resource Locator)? En URL är helt enkelt en webbadress. Den pekar på en plats på internet där en webbresurs bör finnas.

> En URL är en webbadress till en resurs på internet.

När vi skriver in en webbadress i vår webbläsare så skriver vi alltså in en URL. Som tidigare nämnt så hjälper de flesta moderna webbläsare oss att skriva korrekta URL:er. En URL måste nämligen bl.a. innehålla ett protokoll. Var sig det är HTTP, HTTPS, FTP, SFTP o.s.v.

### Webbadresser i HTML

Låt oss nu prata om sökvägar/webbadresser i HTML. Som tidigare nämnt så hanterar webbläsaren endast adresser i URL-format. Oavsett om det är en adress som pekar internt inom samma sida eller externt ut till en annan sida så behöver de vara i URL-format.

En webbläsare behöver alltså ha en absolut sökväg i URL-formatet. Men när vi specificerar hyperlänkar i vår HTML. T.ex. genom att använda `<a>`-taggen, så behöver vi faktiskt inte alltid ange kompletta URL:er enligt URL-formatet. De fall då vi inte behöver göra det är alltså när vi refererar till resurser inom vår egen sida (domän). Om vi däremot vill referera till en resurs utanför vår domän så behöver vi ange en komplett adress i URL-formatet.

> I HTML behöver vi inte ange protokoll när vi refererar till en URL inom samma domän.

När vi refererar till en resurs inom vår egen domän så använder vi ett format som närmast liknar det \*nix-system använder. Förnim dig det vi tidigare diskuterat! Alltså slash för att denotera nästa mapp, punkt-punkt för att vandra en mapp upp i hierarkin, och en initial slash för att denotera roten.

Detta blir antagligen enklare genom att diskutera ett par exempel. Anta att vi befinner oss på följande sida: `http://example.com/pages/links.html`. Nedan följer ett par exempel på hur webbläsaren kommer att översätta våra adresser, om vi specificerar de inom (t.ex.) en `<a>`-tagg.

| Hyperlänk          | Typ     | Webbläsarens tolkning... |
|--------------------|:-------:|--------------------------|
| images.html        | Relativ | http://example.com/pages/images.html
| ../images.html     | Relativ | http://example.com/images.html
| /images.html       | Absolut | http://example.com/images.html
| /images/album.html | Absolut | http://example.com/images/album.html

Ovan gäller alltså om vi antar att användaren befinner sig på sidan `http://example.com/pages/links.html`

> Om vi inte anger ett protokoll kommer webbläsaren att tolka vår URL som intern! Även om vi börjar URL:en med www.

Notera alltså att om vi inte anger ett protokoll så kommer webbläsaren att tolka våra URL:er som interna till vår domän. Ett vanligt misstag är således att glömma att ange protokollet när vi försöker ange en extern adress. Anta att vibefinner oss på `http://example.com` och skriver följande:
    
    <a href="www.google.com">Klicka här</a>

Vi antar att länken ska ta användaren till google.com. Fallet är dock inte så. Eftersom vi inte angett protokoll tolkar webbläsaren adressen som intern. Webbläsaren översätter således adressen till följande:
    
    http://example.com/www.google.com

Inte riktigt vad vi menade förstås. Det korrekta sättet att skapa ovan URL är alltså genom att även ange protokollet.
    
    <a href="http://www.google.com">Klicka här</a>

### Ankare

En typ av länkar vi ännu inte pratat om är ankare. Ankare är ett sätt att länka till en specifik del av en sida. Föreställ dig en lång sida. Alltså en sida med mycket content där du kan scrolla långt. Ankare hjälper dig då att skapa länkar **inom samma sida**.

> Ett ankare kan appliceras i slutet av vilken URL som helst.

Ett ankare börjar med fyrkants-tecknet (hashtag) (`#`) och sedan vilken sträng som helst.
    
    #my_anchor

Vi applicerar alltså ett ankare i slutet av en vanlig URL.
    
    http://example.com/index.html#my_anchor 

Vi kan alltså använda oss av ankare för att ge användaren en möjlighet att navigera inom samma sida. När vi klickar på en länk med ett ankare så kommer alltså webbläsaren inte bara att ladda den sida vi angett --- utan även scrolla ned till ankarets målposition. Vi kan med andra ord se ankare som en form av "bokmärken" för långa sidor.

Ankaren har även fler, mer avancerade tillämpningsområdet men det kommer vi in på mycket senare. 

Eftersom ankare är en del av URL:er så är det så att vi inte bara kan använda ankare när vi vill ge användaren en möjlighet att navigera inom samma sida. Vi kan även använda oss av dem när vi vill skicka användaren till ett visst ankare på en annan sida.

Låt oss exemplifiera för att göra det tydligare. Ponera att vi har en HTML-sida med följande länk i sig.
    
    <a href="#images">Bildgalleriet</a>

Ovan länk kommer alltså inte att byta sida. Ovan länk är en relativ URL som i browsern kommer att översättas till samma URL som vi är vid, fast med ankaret "\#images" pålagt i slutet.

Ponera om vi istället hade skapat en länk som pekade på en full URL med ett ankare i slutet, såsom nedan...
    
    <a href="http://example.com/index.html#images">Bildgalleriet</a>

Om vi hade specificerat en URL såsom ovan, hade vi skickat användaren till index.html under domänen example.com. Oavsett vilken sida vi råkade vara på vid tillfället. Det viktiga att förstå är dock att ankaret kommer att fungera i vilket fall. När webbläsaren har nått den sida vi skickat användaren till så kommer den automatiskt att scrolla ned till den plats där ankaret är specificerat.

Det finns en sak vi ännu inte pratat om vad gäller ankare. Nu vet vi hur man skapar en länk **till** ett ankare. Men vi har inte pratat om hur man skapar ett ankare som man kan skickas till på en sida. Tidigare så använde vi exemplet `#my_anchor`, men vart hamnar användaren när den klickar på ankaret? Vart är "målet" för detta ankare specificerat?

Egentligen är det ganska enkelt. En länk till ett ankare specificeras där vi kan ange en URL, och ett mål för ett ankare specificeras i vilket element som helst, under attributet ID.

> Ankare pekar på egenskapen `id` i element.

Låt oss se till ett exempel.
    
    <!-- Om vi har någonting med ett ID -->
    <h1 id="images">Bildgalleriet</h1>
     
    <!-- Så kan vi sedan länka till det som ett ankare -->
    <a href="#images">Gå till bildgalleriet</a>

Med andra ord så kan vi skapa "bokmärken" på våra sidor genom att ge olika element ID:n. När vi sedan vill att en användare snabbt ska kunna navigera till en viss del av sidan (ett "bokmärke") så skapar vi en länk som pekar på just det ID:t, som ett ankare.

Detta är bara en av många funktioner som ID:n fyller, men det återkommer vi till senare.

[0]: http://example.com
[1]: http://en.wikipedia.org/wiki/Unix-like
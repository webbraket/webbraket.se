## Kom igång med HTML

[HyperText Markup Language][0] (HTML) är det språk vi använder för att märka upp content vi vill kunna visa i en webbläsare. I detta kapitel diskuterar vi vad HTML är och hur vi skriver det.

Innan vi ser till ett exempel behöver vi kort diskutera vad HTML är för någonting. Låt oss utföra en tankelek. Ponera att du, på datorn, skrivit ett dokument i _Microsoft Word_, _Pages_, _Open Office_ eller dylik ordbehandlare. Fundera kort över vad detta dokument består av. Vad innehåller det? Text? Jo, onekligen. Men mer exakt än så då? De flesta dokument innehåller någon kombination av rubriker, underrubriker och paragrafer. Men gräver vi djupare än så så hittar vi saker som citat, listor, understrykningar, fetstilsmarkeringar, kursivitet o.s.v.

För att förstå hur HTML fungerar behöver vi egentligen bara förstå att vår ordbehandlare omöjligen kan komma ihåg vilka delar vi anser vara rubriker eller fetstilsmarkeringar om den inte någonstans sparar den informationen när vi först berättar det. Låt oss uttrycka oss på generellare form. Nästan alla dokument &mdash; ovavsett typ &mdash; består inte bara av text. De består av text som är tätt bunden till semantik. Varje del av texten spelar någon roll i helheten som inte nödvändigtvis behöver vara samma roll som någon annan del av samma text. En term som ofta används för att referera till detta förhållande mellan text och meta-information är [semantik][1]. Vi kommer framöver på många sätt prata om begreppet semantisk signifikans för att diskutera vad saker har för signifikans i en kontext.

> Dokument består inte bara av rå text, utan rå text tätt med olika semantik.

En paragraf är inte en paragraf om inte den som läser paragrafen kan urskilja och förstå att det är en paragraf den läser. Det är detta vi talar om när vi talar om semantisk signifikans. Utöver att vi som människor läser texten som paragrafen består av så "läser vi in" faktumet att det är ett avgränsatt område text &mdash; i.e. en paragraf.

Om information saknade semantisk signifikans hade vi likväl kunnat representera dokument i ett enda långt flöde. All text på en enda lång rad. Men vi människor verkar gilla semantisk indelning för att t.ex. underlätta inlärning. Således har vi lärt oss att (t.ex.) extra vertikalt mellanrum (whitespace) emellan rader denoterar en paragrafindelning och således ett avslut och en påbörjan på en ny tanke/poäng. En paragrafindelning denoterar alltså slutet på en idé och antagligen början på nästa.

Men maskiner (e.g. webbläsare) har idag inte den förståelse som ovan beskrivs. En webbläsare kan inte förstå vad den ska representera som en egen paragraf genom att processa texten. Maskinen läser inte texten och börjar tänka att "hmm.. här ska vi nog ha en radbrytning". Därför behöver vi berätta för maskinen vad som är vad.

Maskiner behöver inte bara veta vad som är vad för att vi ska kunna närma oss [artificiell intelligens][2]. Utan i fallet av webben behöver webbläsaren helt enkelt veta vad som är vad för att kunna presentera informationen för oss på ett rimligt sätt. Kom ihåg. Annars är vi tillbaka i den svårhantereliga värld där paragrafindelningar inte existerar och all text kommer i ett enda långt stycke ifrån början till slut rakt av. Vilken pers det hade varit.

Självklart handlar alltså inte detta om endast paragrafer. Den abstraktare poängen är alltså att vi måste denotera olika delar för att en maskin ska kunna resonera kring dem. Om vi inte berättar för maskinen vad som är rubriker, vad som är paragrafer, vad som är listor o.s.v. o.s.v.

### Dokument som hierarkier

HTML-dokument bygger på en metafor om att alla dokument går att beskriva som hierarkiska trädstrukturer. Fundera på det. I stort sett alla dokument går att beskriva som en hierarkisk trädstruktur. Ta en bok till exempel. Högst upp i abstraktionskedjan hittar vi av ett antal delar. Boken börjar med ett förord, sen kommer första delen, sedan andra delen, och avslutningsvis efterordet. Böcker ser ju förstås olika ut men detta är ett exempel på hur en bok skulle kunna se ut. Men indelningen tar ju inte slut när vi har delat upp boken i olika delar. Under varje del hittar vi kapitel. Nu kan vi se boken som att den består av ett antal delar under vilka det finns ett antal kapitel. Letar vi vidare så upptäcker vi att varje kapitel innehåller paragrafer. Och letar vi ännu vidare så upptäcker vi att vissa paragrafer innehåller bilder. Om vi skulle försöka representera ovan bok som en linjär trädstruktur skulle den rimligen se ut så här: `Del > Kapitel > Paragraf > Bilder`.

Vad vi nu har beskrivit är (i en trädstruktur) relationen mellan föräldrar och barn. Ett förälder kan innehålla barn, och barn kan höra till föräldrar. Ett kapitel kan innehålla paragrafer och en paragraf kan tillhöra ett kapitel. Därav användandet av notationen med större-än-tecknet (`>`). Det till vänster om större-än-tecknet är alltså föräldern. Men om trädstruktur bara kunde ha barn och föräldrar så skulle de vara helt linjära. Istället behöver vi inse att barn kan ha syskon. En förälder kan alltså ha flera barn. Eller uttryckt i termer av ett träd. En gren kan ha flera förgreningar. Vi kommer att prata mer om detta när vi ser till ett par dokumenstruktursexempel.

#### XML

HTML har många likheter med ett annat märkesspråk vid namn [XML][3]. XML är också ett märkesspråk som bygger på idéen om att information kan strutkrureras hierarkiskt. Den huvudsakliga skillnaden mellan HTML och XML är att HTML specifikt är skapat för att beskriva webbsidor. XML däremot är ett "general purpose" märkesspråk som kan användas för att beskriva vilken semi-strukturerad information som helst.

Men när vi nu börjar diskutera element så är det alltså viktigt att du kommer ihåg vårt mål när vi skapar HTML-dokument. Målet är att modellera den information vi önskar att beskriva i ett hierarkiskt format.

### Element

Vi har nu alltså klargjort att HTML bygger på en metfor om att alla dokument går att modellera som hierarkiska trädstrukturer. Men hur gör vi då detta rent konkret? Svaret i HTML är något som benämns _element_. Element skapar vi genom att använda oss av `<`, och `>`-tecken. Följande är ett exempel på ett element som denoterar en paragraf.

```html
    <p>Paragraftexten här...</p>
```

Ovan illustrerar alltså användandet av `p`-elementet, eller paragraf-elementet. Låt oss bena ut vad syntaxen är. Kom ihåg att ordet syntax handlar om _hur_ vi uttrycker någonting i ett visst språk. I fallet av HTML så är de tre första tecknena i ovan exempel, samt de fyra sista del av syntaxen i HTML. Övrigt är rå text.

> HTML-element byggs upp av taggar.

HTML-element består helt enkelt av någonting som vi referar till som taggar (tags). Element är alltså en komposition av taggar. Ett element kan komma i två former. Element kan alltså bestå av antingen...

* två taggar (en start- och en slut-tagg), eller
* en tagg (en start-tagg utan slut-tagg)

Paragraf-elementet vi såg tidigare är ett ypperligt exempel på den första formen där vi har ett tag-par som tillsammans bildar ett element. Vi öppnar en paragraf, skriver en text, och stänger sedan paragrafen. Notera alltså att vi använde slash-tecknet (`/`) och det återupprepade tagg-namnet (`p`) för att denotera stängningstaggen (`</p>`). Men låt oss se till ett exempel på ett element som inte kräver en stängningstagg.

```html
    Plötsligt...
    <hr>
    ...dök en horisontell linje upp
```

Elementet `<hr>` denoterar en horisontell linje (avdelare) som ritas ut rakt över sidan. En s.k. "horizontal ruler". Om vi funderar lite på det en stund så inser vi snabbt varför ensamma element existerar. En avdelare är en avdelare och det finns ingenting intelligent vi kan denotera innuti en avdelare. Andra element av denna typ är t.ex. bilder. Här ser vi också en tydlig anledning. En bild är ju alltid en bild. Det är ologiskt att anta att vi skulle vilja denotera existensen av någonting i bilden. Bilden själv beskriver vad som finns i bilden.

Om detta låter lite "lurvigt", oroa dig inte. Vi kommer att diskutera detta närmare och förhoppningsvis blir det klarare när du får se några exempel. Men för nu &mdash; kom ihåg att det finns två typer av element. De som inte behöver stängas (eftersom vi kan placera element eller content i dem), och de som behöver stängas.

### Element i element

För att kunna bygga hierarkiska trädstrukturer så behöver vi förstå att HTML kan innehålla element i element. Ett element kan alltså vara barn till ett annat element. Med andra ord kan vi sluta oss till att ett element som öppnas och stängs kan (i sin kropp) innehålla antingen...

* Text, eller
* Ett annat element

När vi säger text så menar vi förstås även avsaknaden av text. Den tomma strängen. Så är det även tillåtet att ett element, som förväntar sig ett barn eller text, inte innehåller någonting. Med andra ord skulle elementet öppnas (starttagg) och sedan stängas på en gång (sluttagg).

> Ett element kan antingen innehålla ett annat element eller text.

Det är när vi börjar förstå att element kan innehålla andra element som vi verkligen börjar närma oss idéen om hierarkisk informationsrepresentation. Vi kan nu alltså börja uttrycka saker såsom:

```html
    <section>
      <p>En första paragraf.</p>
      <p>Följd av en annan.</p>
    </section>
```

### Plain-text om inte annat anges

En viktig poäng om relationen mellan text och element är att webbläsaren tolkar allt som inte denoterats som någonting annat som text. Oavsett hur många radbrytningar eller mellanslag vi slänger in i ett stycke text så kommer webbläsaren ändå att trunkera all text. Med andra ord hamnar all text på samma rad. Och upprepade mellanslag ersättsm ed ett enda.

Man skulle alltså kunna säga att HTML i någon bemärkelse är _addativt_. Vi har en mängd text, och omsluter sedan olika delar av texten med element för att skapa en semantisk indelning. Utan element, har vi ingenting annat än en enda lång sträng av text.

Anta t.ex. att vi vill lägga in ett antal radbrytningar i en paragraf. Anta att vi försöker göra det genom att helt enkelt skapa radbrytningar med hjälp av ENTER-tangenten vid de platser vi vill. Beakta nedan kod:

```html
    <p>
      Oavsett  
      hur många       mellanslag, eller  

      radbrytningar   vi lägger in,  
      så har det ingen effekt.
    </p>  
```

Trots alla radbrytningar och mellanslag blir ändå resultatet följande...

<figure>
Oavsett hur många mellanslag, eller radbrytningar vi lägger in, så har det ingen effekt.
</figure>

Såsom exemplets text förtäljer har traditionella radbrytningar ingen effekt i ett HTML-dokument. Detta är ett gott exempel för att illustrera att webbläsaren läser dokumentet som en enda lång sträng av text. Så länge vi inte använder HTML-element för att denotera åtskilda delar av dokumentet, så kommer webbläsaren att hantera dokumentet som en enda lång massa av text.

### Attribut

Ett elements öppnande tag kan även innehålla attribut med värden. Attribut är i simpla termer egenskaper för ett givet element. Om vi t.ex. har en hyperlänk (`<a>`) kan vi använda oss av attributet `href` (hyper reference) för att denotera vart hyperlänken ska peka någonstans.

> Attribut är egenskaper för en instans av ett element.

För att t.ex. skapa länkar använder vi elementet `<a>`. För att sedan denotera vart länken ska peka ger vi attributet `href` ett värde. Detta värde tar formen av en URL. Beakta nedan exempel och fundera över användandet av attributet `href`.

```html
    <a href="http://uu.se">Klicka på mig</a>
```

Resultat

<figure>
[Klicka på mig][4]
</figure>

Attribut kommer i två former där den vanligaste är nyckel-värde-par (key-value-pairs). Vi specificerar en nyckel och tilldelar den ett värde. Enligt syntaxen `nyckel="värde"`. Där ordet "nyckel" alltså ersätts med en nyckel som är tillåten för ett givet element. Och ordet "värde" ersätts med ett värde som är tillåtet för den givna nyckeln.

Alla attribut (nycklar) är inte tillåtna på alla element. Alla värden är inte heller tillåtna på alla nycklar. Anledningen till detta är helt enkelt att attribut denoterar saker som ofta är specifika för just en given typ av element. I exemplet ovan använder vi t.ex. attributet `href` &mdash; "hyper reference". En hyperreferens är logisk vid användandet av en länk eftersom en länk måste ha en målplats. En länk är inte en länk om den inte har någonstans att länka. Om vi däremot diskuterar en paragraf (`<p>`) så blir användandet av en hyperreferens helt meningslös. En paragraf är en paragraf av text, inte en länk. En paragraf ska inte hyperreferera någonstans. Det är inte logiskt.

> Olika element tillåter olika attribut.

Nu kanske du tänker att en paragraf ju måste gå att göra klickbar. Och det är helt sant. Men inte genom att klistra på ett hyperreferens-attribut på paragraf-taggen. Istället kan vi omsluta en del av paragrafens text i ett `<a>`-element. Kom ihåg &mdash; vi kan nästla element i element!

Det finns dock några attribut som vi kan slänga på på precis vilket element som helst. Dessa är `id` och `class`. Detta är attribut som kommer att visa sig mycket användbara. Vi kommer att prata mer om dessa när vi börjar diskutera CSS och JavaScript.

Vi har nu pratat om både element och attribut. Låt oss sammanfatta. Element är alltså de "grenar" vi använder för att bygga upp vårt "dokumentträd". Attribut är egenskaper vi kan applicera på våra grenar.

### Kommentarer

I de flesta märkes- och programmeringsspråk så finns faciliteter för vad som kallas för _kommentarer_. Text vi kan skriva i våra källkodsdokument som inte har någon effekt på det renderade resultatet.

I HTML ser en kommentar ut som följande.

```html
    <!-- Åh, en sån kommentar! -->
```

Kommentarer kan vi skriva i HTML-dokument av olika anledningar men t.ex. skulle vi kunna använda de till att skriva förklarande kommentarer, för att logiskt gruppera olika delar av HTML-dokumentet (för utvecklaren), eller kanske för att skriva en TODO-notis om någonting som måste bättras på senare.

Kommentarer är alltså en facilitet som existerar för att underlätta vårt arbete som programmerare. Kommentarer i HTML har ingen effekt på sidan mer än att de syns i källkoden. Kom ihåg att vem som helst kan visa källkoden för en HTML-sida genom att öppna den i en textredigerare istället för en webbläsare. Alltså behöver vi inse att vem som helst kommer kunna se våra HTML-kommentarer om de vill. Alltså är det inte en smart idé att skriva känslig information (som vi inte vill läcker ut) i våra kommentarer.

Beakta nedan exempel som understryker faktumet att kommentarer inte syns när en webbsida renderas.

Följande HTML...

```html
    <p>Detta syns</p>
    <!-- Detta syns inte -->
```

...renderar följande resultat...

<figure>
Detta syns
<!-- Detta syns inte -->
</figure>

Men kommentaren i ovan exempel kommer alltså fortfarande att synas i källkoden. Så om användaren skulle högerklicka och välja "View Source" ("Visa källkod", eller dyl.), alternativt inspektera texten med webbläsarens [Webbutvecklarverktyg][5] så kommer denne att kunna se kommentaren. Prova själv!

### Dokumenstruktur

Vi har nu lärt oss att HTML-dokument modellerar trädstrukturer. Men hur ska då en trädstruktur för ett HTML-dokument se ut? Ett HTML-dokument behöver vara valit ("valid"), enligt standarden, för att kunna renderas korrekt av en webbläsare. Eftersom webbläsare har lite varierande implementationer av HTML-standarden så betyder det att dokumen egentligen inte måste följa standarden till hundra procent. Men det är bra att sträva efter det.

Men för att återgå till ämnet. Det finns några saker ett HTML-dokument alltid måste innehålla. En dokumenttypsdeklaration (doctype), ett html-rot-element, ett huvud med en titel, och en kropp. Det minsta html-dokumentet vi kan konstruera som fortfarande uppfyller standarden (html5) är följande:

```html
    <!DOCTYPE html>
    <html>
      <head>
        <title> Stora hundhemsidan </title>
      </head>
      <body>
      </body>
    </html>
```

Låt oss försöka visualisera samma dokument som ovan i en hierarkisk struktur av "lådor i lådor". En låda "i" en låda representerar alltså en barn-förälderrelation, medan en låda "bredvid" en annan låde representerar en syskonrelation.

     ------------------------
    |         <html>         |
    |   -----------------    |
    |   |     <head>     |   |
    |    ----------------    |
    |    ----------------    |
    |   |     <body>     |   |
    |    ----------------    |
     ------------------------


Jämför ovan bilder av "boxar i boxar" med den faktiska HTML-koden i bilden högre upp. Försök förstå varför vi har ritat bilden på det sätt vi har ritat den. Notera att `DOCTYPE`-deklarationen inte är med i ovan exempel.

När vi ändå är i farten med att försöka visualisera dokumenthierarkier. Låt oss även visualisera ovan som en indenterad lista.

```html
    DOCTYPE
    html
      head
        title
          [text]
      body
        [empty]
```

Detta med indentering leder oss även in på en meningsfull vana html-utvecklare respekterar.

> Om en tag är ett barn till tag:en ovan, indentera ett steg.

Notera alltså hur `title` är indenterad i relation till `head`, men hur `body` _inte_ är indenterad i relation till `head.`

Återigen. Vi har inte bara slängt ihop ovan text lite hursomhelst. Utan det indenterade dokumentet är en representativ omskrivning av det tidigare diskuterade HTML-dokumentet. Återigen. Jämför denna indenterade version med den faktiska HTML-koden. Föräldra-barnrelationer defineras alltså nu genom indentering in. Syskonrelationer kan vi identifiera genom att hitta element som befinner sig på samma horisontella nivå under en och samma förälder.

Detta leder oss in på en viktig poäng som du kanske redan förstått. När vi öppnar ett element måste vi stänga det innan vi stänger dess förälder.

> Alla barnelement behöver stängas innan vi stänger föräldern.

Icke-välformatterad HTML

```html
    <article>
        <p>
            Hello world...
        </article>
    </p>
```

Välformatterad HTML

```html
    <article>
        <p>
            Hello world...
        </p>
    </article>
```

### Indentering

förhoppningsvis har du under läsningens gång märkt att vi i våra kodexempel [indenterar][6] koden. Det vill säga "drar in" vissa linjer lite till höger. Placerar några mellanslag före vissa rader. Detta gör vi för att öka läsbarheten av koden.

Indentering är kotym bland programmerare och möjligheten till indentering finns i nästan alla moderna språk. I [vissa][7] är det till och med obligatoriskt. Indentering kan i början kännas onödigt och krångligt. Men håll uppe glöden. Du kommer att tjäna på det i längden. De som läser din kod kommer tjäna på det. När du ber någon om hjälp kommer du tjäna på det. Indentering är en av de viktigaste kotymerna vi programmerare har.

Ok, så hur indenterar man då? Låt oss börja med några exempel.

Korrekt indentering

```html
<p>
    <span>Detta är ok!</span>
</p>
```

```html
<p>
    <span>
        Också ok!
    </span>
</p>
```

```html
<p><span>Också ok men svårläsligt!</span></p>
```

Inkorrekt indentering

```html
<p>
<span>Strunta _inte_ i indenteringen!</span>
</p>
```

```html
<p>
    Indentera barn...
</p>
    <p>
        ...men inte syskon!
    </p>
```

Ett enkelt sätt att veta när man ska indentera &mdash; alltså flytta en rad inåt, är följande minnesregel. Om vi öppnar ett element, ska allt som efterföljer indenteras, ända tills vi stängt elementet.

> Alla barn till ett element ska indenteras ett "steg".

Öppningstaggar och stängningstaggar ska alltså vara indenterade in till samma nivå. Om vi indenterar korrekt kommer det vara busenkelt att snabbt identifiera vilka element som är barn till vilka element. Vilka element som är syskon. Vart ett element stängs. Och så vidare, och så vidare.

Att ta med sig ifrån det här stycket är alltså &mdash; indentera! Du kommer snabbt märka att de flesta programmerare är allergiska emot dålig indentering. Så skippa bara indenteringen om du vill skapa dig fiender :)

### Ett komplett dokument

Ett validerande HTML-dokument måste alltså innehålla ett par saker. En dokumenttypsdeklaration, ett huvud, en titel och en kropp. Nyssnämnt direktäversättningar av de korrekta termerna `DOCTYPE`, `HEAD`, `BODY` och `TITLE`. Låt oss återgå till tidigare nämnt kod-exempel (se nedan), och fundera över hur dessa element ska nästlas i varandra. Med andra ord, låt oss diskutera vilka element som är barn/föräldrar till vilka.

```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page about kittenz!</title>
      </head>
      <body>
      </body>
    </html>
```

Notera även att det absolut yttersta elementet är `<html>`. Ett HTML-dokument måste innehålla ett och endast ett `<html>`-element. I detta element måste det finnas ett och endast ett `<head>`- och respektive `<body>`-element. I huvudet måste vi även ange en sidtitel med hjälp av `<title>`. Detta är det minsta dokumentet vi kan skapa som validerar, och det är även så här _alla_ html-dokument är strukturerade i botten.

#### Head (meta-data)

Så vad lägger vi då inanför `<head>`-taggarna? Det korta svaret är: meta-data.

Det längre svaret är att vi även laddar in externa referenser i huvudet. Följande kodruta är ett exempel på hur ett set av `<head>`-taggar skulle kunna se ut.

Ett exempel på HEAD

```html
    ...
    <head>
      <title> Hover cat </title>
      <link rel="stylesheet" href="stylesheets/main.css">
      <script src="javascripts/main.js">
      <meta charset="utf-8">
      <meta name="keywords" content="Kittens,Hovercrafts">
    </head>
    ...
```

Låt oss diskutera ovan kod rad för rad. RadFörklaring

| Rad | Förklaring |
|:-:|:---|
| 3 | Den titel som visas högst upp i en sidans "tab" i en webbläsare.
| 4 | Säger åt webbläsaren att ladda in en [Stylesheet][8]-fil, som finns på platsen definerad av `href="sökväg-till-filen-här"`.
| 5 | Säger åt webbläsaren att ladda in en [JavaScript][9]-fil, som finns på platsen definerad av `src="sökväg-till-filen-här"`.
| 6 | Berättar för webbläsaren vilken "[character encoding][10]" sidan är skriven i, så att tecken som åäö kan visas korrekt.
| 7 | Definerar ett par [keywords][11] för sidan. Denna information används av bl.a. sökmotorer för att "förstå" sidans innehåll.

#### Body (Sidans faktiska innehåll)

Om `<head>` beskrivs som sidans meta-content &mdash; alltså content om content. Då skulle vi kunna säga att `<body>` är sidans faktiska content.

Ett exempel på innehåll i BODY

```html
    ...
    <body>
      <h2> Sidans titel </h2>
      <p> Det här är en paragraf med text. <p>
      <p>
          Och det här är en till, som innehåller en
          <a href="http://uu.se">länk</a> till UU.
      <p>
    </body>
    ...
```


[0]: http://sv.wikipedia.org/wiki/HTML
[1]: http://sv.wikipedia.org/wiki/Semantik
[2]: http://sv.wikipedia.org/wiki/Artificiell_intelligens
[3]: http://sv.wikipedia.org/wiki/XML
[4]: http://www.uu.se
[5]: http://en.wikipedia.org/wiki/Web_development_tools
[6]: http://sv.wikipedia.org/wiki/Indentering
[7]: http://en.wikipedia.org/wiki/Python_(programming_language)
[8]: #stylesheets
[9]: #javascript
[10]: http://www.joelonsoftware.com/articles/Unicode.html
[11]: http://www.w3schools.com/tags/tag_meta.asp

## Formulär

För att användare ska kunna interagera med våra webbsidor har vi flera tillgänglia faciliteter. Vi har pratat om länkar som ger en användare möjligheten att navigera emellan sidor. Vi har pratat om ankare som ger användare möjligheten att navigera inom en och samma sida. Men om användaren vill ge oss data? Om vi t.ex. vill fråga användaren om dennes namn? In kommer formulär och räddar dagen.

Låt oss, innan vi går vidare se till ett exempel för hur ett formulär skulle kunna se ut.

<figure>
    <form action="#" method="GET">
        <div>
            <label for="field-email">E-post</label>
            <input type="text" id="field-email" name="email" placeholder="Din e-post" required="required">
        </div>
        <div>
            <label for="field-current-name">Lösenord</label>
            <input type="password" id="field-current-name" name="password" placeholder="Ditt lösenord" required="required">
        </div>
        <div class="form-group">
            <input id="field-gender-man" type="checkbox" name="remember">
            <label for="field-gender-man">Kom ihåg mig?</label>
        </div>
        <div class="form-group">
            <input type="submit" value="Skicka!" class="btn btn-default">
        </div>
    </form>
</figure>

Vanliga scenarion där vi använder formulär är t.ex. användarregistrering, inloggning, kontaktformulär, undersökningar, chat, forum, kommentarsfält, sökfält, etc. Listan är lång. Tänk på sidor som du vanligen brukar besöka. Varje gång du skriver in någon form av fritext på sidan, kryssar i en checkbox, radioknapp eller dyl. så interagerar du nästan alltid med ett formulär. Tänk

### Att spara data

Viktigt att förstå är att vi med endast HTML inte kan göra särskilt mycket med formulär. Vi kan presentera de för användaren, men vi kan inte på några sätt "processa" den data som användaren matar in. För att bearbeta den data som användarna matar in i formulär behöver vi ett script- eller programmeringspråk. Med andra ord t.ex. `JavaScript`, `PHP`, `Ruby`, `ASP.NET`, eller dyl. För att persistent spara data som kan delas emellan flera datorer behöver vi någon form av [databas][0]. Om vi vill spara data på klientens dator och det inte spelar någon roll ifall andra kan komma åt datan eller ej &mdash; så räcker det med JavaScript och HTML5 (genom [persistant storage][1]). Men det viktiga är alltså att förstå att vi med hjälp av endast HTML inte kan spara eller processa datan användare matar in i våra formulär. Men vi kommer prata mer om att processa/spara data ifrån formulär när vi pratar om script- och programmeringsspråk.

### Att skapa formulär

Låt oss skapa formulär. Vi tar det del för del och steg för steg.

Vi börjar helt enkelt med att använda `<form>`-element. På samma sätt som `table` enkapsulerar allt innehåll av en tabell &mdash; så enkapsulerar `form` allt innehåll av ett formulär. Vi skapar alltså "skalet" för ett formulär som så...

```html
    <form method="POST" action="process-data.php">
       ...
    </form>
```

Ovan kod resulterar rent visuellt inte i någonting alls. På den renderade sidan syns inget formulär. Däremot kommer sidan förstås onekligen innehålla markupen för formuläret. Men eftersom vi ännu inte placerat några formulärkomponenter i vårt formulär så syns ju ingenting.

#### Fritext

Låt oss börja med att kika på hur vi ger användaren möjlighet att mata in fritext. Vi har två alternativ att välja emellan.

* `<textarea>`
* `<input type="text">`

Den förstnämnda använder vi när vi vill ge användaren att skriva en längre text. Såsom t.ex. en kommentar eller ett blogginlägg. När vi däremot bara söker kortare information ifrån användaren, såsom t.ex. ett namn eller en adress så passar det andra alternativet ypperligt.

Låt oss börja med att kika på ett exempel på användande av `input`. Elementet används för att denotera [en mängd olika formkontroller][2]. Allt ifrån checkboxar och radioknappar till fritext och datum. För att webbläsaren ska veta vilken typ av inputkontroll vi vill skapa behöver vi ge ett värde för `type`-attributet. Det enklaste alternativet är förstås fritext, vilket vi alltså denoterar genom att sätta `type="text"`.

Så om vi med andra ord skriver...

```html
    <input type="text" placeholder="Vänligen skriv förnamn här...">
```

Så renderar webbläsaren följande resultat...

<figure>
    <input type="text" placeholder="Vänligen skriv förnamn här...">
</figure>

Som du kanske märkte är alltså `placeholder` ett annat attribut vi kan använda på `input`-element. Detta attribut anger vi för att helt enkelt specificiera en platshållare för kontrollen. Undersök hur detta fungerar genom att skriva någonting i exempelfältet ovan. En platshållartext är helt enkelt en text som visas när kontrollen är "tom". Det vill säga både innan användaren har skrivit någonting i textfältet, men även så fort som användaren rensar nuvarande text i fältet. Notera att detta attribut _inte_ stöds av alla äldre webbläsare.

<div class="box-info">
Tänk på att `input`-elementet endast består av en tagg. Vi behöver alltså inte (och bör inte) ange en stängningstagg. I Tidigare versioner av standarden för HTML var det möjligt att ange en sluttagg. Således kommer detta inte att orsaka något fel i de flesta webbläsare. Men om vi följer standarden HTML5 så finns det ingen anledning att ange en stängningstagg.
</div>

Om vi behöver ge användaren en möjlighet att skriva mer än endast en rad text så passar elementet `textarea` utmärkt. Detta element består, till skillnad ifrån `input`, utav ett taggpar. Med andra ord en öppningstagg och en stängningstagg. Allt däremellan är text som kommer att visas i textfältet. Låt oss se till ett exempel.

```html
    <textarea placeholder="Textarea stödjer placeholders">
      Denna text renderas i textarean
    </textarea>
```

Resultat

<figure>
    <textarea placeholder="Textarea stödjer placeholders">Denna text renderas i textarean
    </textarea>
</figure>

#### Labels

Platshållare (i.e. placeholders) kan onekligen användas för att ge användaren ett hum om vad som ska skrivas i vilket fält. Men i många fall behöver vi mer än bara platshållare.

Till exempel så stödjer inte alla webbläsare placeholders. Vilket skulle rendera fälten helt tomma. Och användaren skulle inte ha en aning om vad som ska skrivas vad. Ett annat problem är förstås att om det redan finns någonting skrivet i fältet (t.ex. eftersom användaren har skrivit det men sen glömt, eller för att webbläsaren har sparat texten). Detta skulle ju alltså göra att platshållartexten inte visas. Eftersom platshållartexten ju endast visas när det faktiskt inte finns en text i formkontrollen.

Istället för att bara använda placeholders så kan vi alltså även använda elementet `label`.

Det som huvudsak skiljer labels ifrån helt vanlig text är att vi kan associera en label med en formkontroll. Detta betyder att webbläsaren t.ex. kan göra så att när användaren klickar på etiketten (label) så hamnar respektive formkontroll i "fokus". Detta betyder även förstås att robotar (t.ex. sökspindlar) lättare kan läsa av vad en viss formkontroll är till för, eftersom de kan läsa etiketten.

Så låt oss associera en etikett med den fritextkontroll vi såg i tidigare exempel. Kom ihåg att prova klicka på etiketten.

```html
    <label for="firstname">Förnamn</label>
    <input type="text" placeholder="Vänligen skriv förnamn här..." id="firstname">
```

Resultat

<figure>
    <label for="firstname">Förnamn</label>
    <input type="text" placeholder="Vänligen skriv förnamn här..." id="firstname">
</figure>

#### Radio buttons

Radioknappar ger oss möjligheten att låta användaren välja ett och endast ett alternativ, givet flera. Låt oss se till ett exempel. Kom ihåg hur vi (som tidigare diskuterat) använder attributet `for` för att associera en ettikett med en formkontroll.

```html
    <label for="alt-yes">Ja</label>
    <input type="radio" id="alt-yes" name="yes-or-no" value="yes">
    <label for="alt-no">Nej</label>
    <input type="radio" id="alt-no" name="yes-or-no" value="no">
```

Resultat

<figure>
    <label for="alt-yes">Ja</label>
    <input type="radio" id="alt-yes" name="yes-or-no" value="yes">
    <label for="alt-no">Nej</label>
    <input type="radio" id="alt-no" name="yes-or-no" value="no">
</figure>

Prova knapparna! Både genom att klicka på själva radioknapparna, men även genom att klicka på dess etiketter.

Fundera på vad de olika attributen i ovan exempel faktiskt gör. Vi har inte pratat om attributet `name` tidigare. Attributet går att använda på alla formkontroller och är ett sätt att tilldela ett namn på en viss kontroll. Detta namn är av relevans när det kommer till att processa data i formuläret. Vi kommer som sagt inte riktigt att prata om detta än men du bör ändock veta om att det är vad attributet är till för.

De två radioknapparna i ovan exempel har ju alltså samma värde för attributet `name`. Detta innebär att de tillhör samma grupp. Vi sa ju tidigare att radioknappar gör att användaren kan välja ett och endast ett val. Men om vi har flera set av radioknappar på en och samma sida &mdash; hur ska då webbläsaren veta vilka radioknappar som inte får vara valda samtidigt. Jo, genom grupper. Så vi kan alltså omformulera oss som så: En och endast en radioknapp får vara vald per grupp. Och en grupp definierar vi ju alltså genom att ge flera radioknappar samma värde för attributet `name`.

Låt oss se till ett exempel.

```html
    <label>Ja eller nej?</label>

    <label for="4307904643-alt-yes">Ja</label>
    <input type="radio" name="yes-or-no" id="4307904643-alt-yes">

    <label for="4307904643-alt-no">Nej</label>
    <input type="radio" name="yes-or-no" id="4307904643-alt-no">

    <label>Vilken frukt?</label>

    <label for="4307904643-alt-apple">Äpple</label>
    <input type="radio" name="fruit" id="4307904643-alt-apple">

    <label for="4307904643-alt-banana">Banan</label>
    <input type="radio" name="fruit" id="4307904643-alt-banana">
```

Resultat

<figure>
    <label>Ja eller nej?</label>

    <div>
        <label for="4307904643-alt-yes">Ja</label>
        <input type="radio" name="yes-or-no" id="4307904643-alt-yes">
    </div>

    <div>
        <label for="4307904643-alt-no">Nej</label>
        <input type="radio" name="yes-or-no" id="4307904643-alt-no">
    </div>

    <div>
        <label>Vilken frukt?</label>

     </div>
    <div>
        <label for="4307904643-alt-apple">Äpple</label>
        <input type="radio" name="fruit" id="4307904643-alt-apple">
    </div>

    <div>
        <label for="4307904643-alt-banana">Banan</label>
        <input type="radio" name="fruit" id="4307904643-alt-banana">
    </div>
</figure>

#### Checkboxes

Checkboxes använder vi till skillnad ifrån radio buttons när vi vill ge användaren möjligheten att välja ett, eller flera alternativ av många. Mycket användbart när det kommer till frukt! I övrigt fungerar de i stort sett som radioknappar.

```html
    <input type="checkbox" name="fruit" value="apple" id="alt-apple">
    <label for="alt-apple">Apple</label>
    <input type="checkbox" name="fruit" value="banana" id="alt-banana">
    <label for="alt-banana">Banan</label>
    <input type="checkbox" name="fruit" value="grapes" id="alt-grapes">
    <label for="alt-grapes">Vindruvor</label>
```

Resultat

<figure>
    <input type="checkbox" name="fruit" value="apple" id="alt-apple">
    <label for="alt-apple">Apple</label>
    <input type="checkbox" name="fruit" value="banana" id="alt-banana">
    <label for="alt-banana">Banan</label>
    <input type="checkbox" name="fruit" value="grapes" id="alt-grapes">
    <label for="alt-grapes">Vindruvor</label>
</figure>

Attributet `value` specificerar alltså vilket värde som kommer att associeras med respektive nyckel (alltså checkboxgruppen "fruit"). Vi återkommer till detta när vi pratar om vad som händer när man skickar ett formulär.

#### Select list

Ibland har vi så många alternativ vi vill erbjuda en användare, att det skulle bli absurt att försöka presentera alla som t.ex. radioknappar. Ett vanligt use-case är t.ex. att välja land. Det finns så många länder i världen att sidan skulle bli jättelång om vi skulle presentera alla. In kommer `<select>`-listor och räddar dagen.

```html
    <select name="fruit">
      <option value="banana">Banan</option>
      <option value="apple">Äpple</option>
      <option value="grapes">Vindruvor</option>
      <option value="orange">Apelsin</option>
    </select>
```

Resultat

<figure>
    <select name="fruit">
      <option value="banana">Banan</option>
      <option value="apple">Äpple</option>
      <option value="grapes">Vindruvor</option>
      <option value="orange">Apelsin</option>
    </select>
</figure>

Återigen så använder vi alltså attributet `value` för att denotera vad som kommer att skickas om användaren har valt just det valet (`option`).

I vanliga `select`-listor kan användaren bara välja ett alternativ i listan. Men om vi istället sätter egenskapen `multiple` så tillåter listan användaren att välja flera alternativ. Beroende på vilken webbläsare användaren befinner sig i så fungerar detta på lite olika sätt. Men oftast fungerar det att (1) klicka och dra, (2) hålla in `ctrl` (Windows) eller `cmd` (Mac) och välja en i taget, eller (3) hålla in shift för att välja två stycken och alla däremellan. Du känner rimligen igen dessa konventioner ifrån när vi markerar filer i operativsystemet. Nästan oavsett operativsystem.

Att implementationen av denna `select`-kontroll skiljer sig ifrån webbläsare till webbläsare understryker en viktig poäng. Webbläsare väljer själva hur de ska implementera standarden. Detta betyder att vissa element (du kommer t.ex. att märka detta när vi pratar om elementet `<video>`) renderas på helt olika sätt i olika webbläsare. Detta av naturliga skäl. En webbläsare för mobiltelefoner måste rimligen hantera en (t.ex.) `select`-lista annorlunda. Det senare eftersom mobilanvändare ju interagerar med (t.ex.) touch, och inte mus + tangentbord.

```html
    <select name="fruit" multiple>
     ...
    </select>
```

Resultat

<figure>
    <select name="fruit" multiple>
      <option value="banana">Banan</option>
      <option value="apple">Äpple</option>
      <option value="grapes">Vindruvor</option>
      <option value="orange">Apelsin</option>
    </select>
</figure>


#### Submit

Så när vi har komponterat ihop det formulär vi vill ha så måste vi ju ge användaren en möjlighet att skicka iväg formuläret. För det behöver vi en submit-knapp. Vi använder då åter elementet `<input>`, men sätter attributet `type` till `submit`.

Easy as pancakes! Låt oss se till ett exempel.

```html
    <input type="submit" value="Skicka!">
```

Resultat

<figure>
    <input type="submit" value="Skicka!">
</figure>

### Att skicka formuläret

Men vad händer egentligen när användaren skickar ett formulär? Vart skickas datan? Hur kan vi hantera den? Försök förnimma dig om att vi tidigare i detta kapitel talade om att HTML i sig inte är tillräckligt för att processa formulär. Det är fortfarande sant.

När användaren klickar på en submit-knapp i ett formulär så skickas det ifyllda datat med i nästa request. Vad betyder det? Ett request är ju alltså när vår webbläsare ber om en ny sida. Vår webbläsare skickar ett HTTP request som tas emot av en server, som i sin tur svarar med ett response. Ett response som slutligen renderas av vår webbläsareKnappen leder oss till en ny sida som defineras genom attributet `action`.

Så, när användaren klickar på en submit-knapp i ett formulär så skickas det ifyllda datat med i nästa request. Det betyder att när requestet kommer till servern som ska hantera request:et och svara med ett response, så har servern tillgång till den data användaren fyllde i formuläret.

Men vart skickas datat mer specifikt? Jo, det request som kommer göras är alltså det som finns specificerat i `action`-attributet i formulärets `form`-tagg. Med andra ord är submit-knappar egentligen som en helt vanlig länk. När vi klickar på knappen så skickas vi dit där attributet `action` pekar. När vi klickar på en vanlig länk så skickas vi dit där attributet `href` pekar. Men den huvudsakliga skillnaden mellan en vanlig länk och en submit-knapp för ett formulär är alltså att datat i formuläret kodas och skickas med i request:et.

Action-attributet används alltså som så:

```html
    <form action="put/target/url/here"> </form>
```

#### HTTP Methods

När användaren klickar på en submit-knapp i ett formulär så skickas alltså datat med i ett request som görs emot den url som specificeras i action-attributet. Ok, men hur skickas datat med? För att förstå det måste vi förstå att det finns två olika metoder att skicka formulärdata över HTTP.

* POST, och
* GET

Anta att vi skapar ett formulär på sidan `http://example.com/login.php`. Anta att formulärets action pekar på `http://example.com/process_login.php`. Om vi använder oss av HTTP-metoden `GET` så skulle det request som konstrueras se ut något sånt här:

    http://example.com/process_login.php?username=snow&password=supersecret&remember=1

Formulärdatat skickas alltså direkt i URL:en. Allting efter frågetecknet (`?`) är en urlkodad sträng av formulärdatat. Datat är kodat enligt principen nyckel/värde. Om vi analyserar strängen lite närmare upptäcker vi att den följer följande konvention.

    key=value

Där `key` ersätts med det värde vi gett `name`-attribuet för respektive formkontroll. Ordet `value` ersätts i sin tur av det faktiska värdet för den formkontrollen.

Sedan märker vi även att varje nyckel-värde-par avdelas med hjälp av ett och-tecken (`&`). Som så...

    key1=value1&key2=value2&key3=value3...

<div class="box-warning">
Viss formulärdata (såsom t.ex. login) bör **inte** skickas i `GET`. Du kommer att få förklaringar till varför när vi pratar om den andra metoden &mdash; `POST`.
</div>

### URL Encoding

Både nycklarna såväl som värdena kodas med en teknik som kallas [urlencoding][3]. Detta innebär icke-numeriska och icke-alfabetiska tecken ersätts med någon form av kod. Varför? Jo, för att undvika [parsing][4]-problem. Eftersom värdena skickas konkatenerade i en enda lång sträng, så betyder det att den som ska använda värdena måste parse:a dem. Att parse:a ett givet stycke text betyder innebär i stort sett att "tolka" det givna stycket enligt ett givet set "grammatiska" regler.

För att göra behovet av urlencoding mer uppenbart. Föreställ dig ett formulär med ett fritextfält. Föreställ dig sedan att användaren fyller i någon text med ett och-tecken (`&`) i mitten. Eftersom och-tecknet används som avdelare emellan set av nyckel-värde-par, så kommer parser:n (alltså det program/maskin som parse:ar strängen) bli tokförvirrad. Så fort parser:n stöter på ett och-tecken kommer den att avsluta nuvarande nyckel-värde-par och anta att nästa börjar.

Urlencoding är alltså anledning till att mellanslag ersätts med `%20` i url:er. Detta vilket du kanske redan stött på.

#### HTTP POST vs HTTP GET

Vi nämnde tidigare att det finns två sätt att skicka formulärdata över HTTP. `POST` och `GET`. Vi har även kort nämnt att de olika metoderna är olika passande för olika situationer. Detta reflekteras även av deras namn. Tänk på det. Post och get. Förstnämnda är designad för att posta data. Sistnämnda är designad för att hämta data. Distinktionen mellan dessa är förstås varken solklar eller svartvitt. Men om vi ser det som en tumregel kan det bli lättare att välja vilken teknik (POST eller GET) vi ska använda.

`POST` bör vi alltså huvudsakligen använda när vi på något sätt vill skicka data till servern. Föreställ dig till exempel ett registreringsformulär. Vi vill skicka data till servern. Vi vill säga "det här är mina uppgifter, vänligen skapa ett konto åt mig". Eller föreställ dig ett kommentarsfält. Vad säger vi till servern? "Här har du min kommentar! Vänligen posta den."

Den mer formella tumregeln är att requests som riskerar att ha [sidoeffekter][5] bör utföras över POST. Vi kommer att prata mer om sidoeffekter när vi pratar om programmering. Men med requests som riskerar sidoeffekter, så menar vi här requests som riskerar att förändra state på servern. T.ex. förändra något i en databas. Därav t.ex. registrering.

`GET` å andra sidan bör vi alltså huvudsakligen använda när vi på något sätt vill hämta data. Exempel på detta kan t.ex. vara [paginering][6]. Med paginering menar vi alltså när en stor mängd content delas upp på flera sidor. Det är då vanligt förekommande att man använder sig av `GET`-tekniken för i request:et skicka med vilket sidnummer vi vill se.

Ett annat lämpligt scenario för GET är t.ex. sökningar och filtrering. Föreställ dig en webbshop med en sökruta. När vi söker efter en produkt så förändrar vi ju självklart inte några produkter på webbshop:ens server. Vi använder då GET för att berätta för servern vilken/vilka term/-er vi har sökt &mdash; så att servern kan svara med rätt response.

Den kanske mest uppenbara skillnaden emellan `GET` och `POST` är förstås _hur_ formulärdatan skickas. Med förstnämnda tekniken skickas formulärdatat i URL:en själv. Således är formulärdatat uppenbart synligt för användaren. Genom att däremot använda sistnämnda tekniken (POST) så skickas formulärdatan som en HTTP-header. Således är datan inte synlig i URL och inte uppenbart synlig för användaren.

Notera att vi uttrycker oss i termer av _uppenbart synlig_. Detta är medvetet. Även HTTP headers går att analysera. Så bara för att vi skickar data genom POST betyder det inte att vi är helt säkra. Även POST-data går att analysera. Dock krävs det då en lite mer tekniskt händig användare.MetodSkickas..Användningsområde

GET..i slutet av URL:enNär vi vill använda formulärdatat för att hämta någonting.

POST..som en HTTP-headerNär vi vill använda formulärdatat för att förändra någonting på servern.

### Komplett exempel

Låt oss, innan vi snurrar ihop detta kapitels säck, kolla in ett komplett formulärexempel.

```html
    <form action="#" method="GET">
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
```

Resultat

<figure>
    <form action="#" method="GET">
        <div>
          <label for="field-name">Ditt namn</label>
          <input type="text" id="field-name" name="name" placeholder="Ditt namn" required>
      </div>

      <label>Vad vill du äta till frukost?</label>

      <div>
          <div>
              <label for="field-pancakes">Pannkakor</label>
              <input type="radio" id="field-pancakes" name="breakfast" value="pancakes">
          </div>

          <div>
              <label for="field-scrambled">Äggröra</label>
              <input type="radio" id="field-scrambled" name="breakfast" value="scrambled">
          </div>

          <div>
              <label for="field-toast">Övrigt</label>
              <input type="radio" id="field-toast" name="breakfast" value="toast">
          </div>

          <input type="submit" value="Skicka!">
      </div>
  </form>
</figure>

Prova att skicka formuläret och notera dels vad attributet `required` orsakar, samt vad som händer i webbläsarens adressfält.

[0]: http://sv.wikipedia.org/wiki/Databas
[1]: http://diveintohtml5.info/storage.html
[2]: http://www.w3schools.com/tags/att_input_type.asp
[3]: http://www.w3schools.com/tags/ref_urlencode.asp
[4]: http://en.wikipedia.org/wiki/Parsing
[5]: http://en.wikipedia.org/wiki/Side_effect_(computer_science)
[6]: http://en.wikipedia.org/wiki/Pagination

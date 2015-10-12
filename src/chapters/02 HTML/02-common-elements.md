## Vanliga element

Låt oss nu bekanta oss med de vanligast förekommande elementen och relevanta attribut.

### Paragrafer och rubriker

Låt oss börja genom att diskutera de två kanske vanligaste elementen. Paragrafer och rubriker. Paragrafer skapar vi genom att använda oss av elementet `<p>` och element genom att använda någon av rubrikelementen.

Ett exempel på användande av paragrafer följer nedan.
    
    <p>En paragraf denoterar alltså ett stycke text.</p>
    <p>Varje ny paragraf börjar, om inte annat anges, på en ny rad.</p>

Resultat

<figure>
En paragraf denoterar alltså ett stycke text.

Varje ny paragraf börjar, om inte annat anges, på en ny rad.
</figure>

De flesta dokument består ju inte bara av paragrafer utan även av rubriker. Vi skapar rubriker i HTML genom att använda oss av `<hX>`, där X ersätts med en siffra ifrån `1-6`. Alltså:
    
    <h1>En rubrik</h1>
    <p>Följd av en paragraf.</p>
    <h2>En underrubrik</h2>
    <p>Ytterligare en paragraf.</p>

Och så kan vi fortsätta hela vägen ned till `h6`. Rubriken `h1` är alltså den viktigaste rubriken (den högsta nivån av rubriker) och `h6` den minst viktiga. Resten följer förstås i inbördes ordning däremellan.

Om vi skulle exemplifera användandet av rubriker på den här sidan, löper vi en stor risk att skapa förvirring kring vad som faktiskt är rubriker och vad som är exempel på rubriker. Så för att se ett exempel på hur rubriker fungerar så råder vi dig att ta en snabb titt på ett [exempel ifrån w3schools][0]. 

### Fetstil och kursivitet

Låt oss nu diskutera de vanligaste textformatteringselementen. Fetstil och kursivitet. För att uppnå fetstilt text, kan vi välja att använda någon av elementen `<b>` (bold) eller `<strong>`.
    
    All text <b>inom ett b-element</b>
    eller ett <strong>strong-element</strong>
    renderas i fetstil.

Resultat

<figure>
All text **inom ett b-element** eller ett **strong-element** renderas i fetstil.
</figure>

Om vi istället skulle vilja ha kursiv text, även kallad _italics_, så kan vi välja att använda något utav elementen `<i>` (italics) eller `<em>` (emphasis).
    
    All text <i>inom ett i-element</i>
    eller ett <em>em-element</em>
    renderas som kursiv text.

Resultat

<figure>
All text _inom ett i-element_ eller ett _em-element_ renderas som kursiv text.
</figure>

Men varför finns det två sätt att denotera fetstil text och två sätt att denotera kursiv text? Du kommer lättare förstå skillnaden mellan de olika elementen när vi börjar diskutera semantisk signifikans. Men som kort svar så denoterar alltså t.ex. `i` mer presentation snarare än semantik, och `em` mer semantik snarare än presentation. Föreställ dig en blind person. Den visuella effekten av kursiv text är inte av signifikans för den blinde. Men idéen _extra emfas_ är signifikant. Att det sedan råkar sig så att visualiseringen av extra emfas sker genom samma visuella effekt som kursivitet är alltså i någon bemärkelse ett sammanträffande.

### Listor

För att skapa punktlistor i HTML behöver vi kombinera två olika element. Ett element som denoterar vilken typ av lista vi vill skapa. Innuti detta element behöver vi upprepat använda ett annat element --- en gång per punkt i vår punktlista.

Vi nämnde alltså att det första elementet denoterar vilken typ av lista vi vill skapa. Det finns, i HTML, alltså två typer av listor --- numrerade listor och onumrerade listor. Numrerade listor denoteras genom elementet `<ol>` (_ordered lists_) och onumrerade listor genom elementet `<ul>` (_unordered lists_).

Som nämnt behöver vi sedan denotera varje element (punkt) i listan för sig. Detta gör vi helt enkelt genom att använda elementet `<li`

Låt oss se till ett exempel på en onumrerad lista.

Exempel på onumrerad lista

    <ul>
      <li>Katt</li>
      <li>Hund</li>
      <li>Sköldpadda</li>
    </ul>

Resultat

<figure>
  <ul>
    <li>Katt</li>
    <li>Hund</li>
    <li>Sköldpadda</li>
  </ul>
</figure>


Lagom intuitivt så är alltså skillnaden mellan en numrerad och en onumrerad lista att den numrerade listan använder nummer istället för symboler framför varje element i listan.

Exempel på numrerad lista

    <ol>
      <li>Katt  </li>
      <li>Hund</li>
      <li>Sköldpadda</li>
    </ol>


Resultat

<figure>
  <ol>
    <li>Katt</li>
    <li>Hund</li>
    <li>Sköldpadda</li>
  </ol>
</figure>

Självklart är vi inte bundna till att använda just dessa typer av symboler och/eller nummer framför varje listelement. Istället för att använda vanliga siffror skulle vi t.ex. kunna använda romerska siffror. Alltså `I, II, III, IV` o.s.v. Detta kommer vi att exemplifiera när vi börjar tala om css.

### Tabeller

I de tidigare dagarna av HTML använde kreativa webbutvecklare ofta tabeller för att strukturera upp hela webbsidor. Tabeller i HTML är alltså helt vanliga tabeller. Kolumner, rader, rubriker och inget mer. Men eftersom tabeller betedde sig på ett mycket förutsägbart sätt så upptäckte man att det var tacksamt att strukturera sina sidor med hjälp av tabeller.

Idag används tabeller nästan uteslutande för att representera tabulär data. Såsom elementet rimligen var tänkt att användas ifrån början.

När vi kommer in på diskussionen om semantisk signifikans så kommer du förhoppningsvis förstå varför det är både viktigt och naturligt att inte använda tabeller till annat än representation av tabulär data. Men återigen handlar det om distiktionen mellan hur saker ser ut och vad de faktiskt innebär. Användandet av tabeller implicierar att ett stycke data kan behandlas tabulärt. Så om vi använder tabeller för att visuellt strukturera vår sida --- så implicerar vi att vår sida är en enda stor tabell av strukturerad data. Vilket oftast inte är sant.

När vi diskuterar tabeller så finns det egentligen fyra element som vi behöver lära oss. För att skapa en tabell börjar vi alltid med elementet `<table>`. Detta element enkapsulerar hela tabellen. Alla dess rader, kolumner och data.

Innanför elementet `table` kan vi sedan placera ett valfritt antal element av typen `<tr>` (_table row_). Detta element skapar nya tabellrader. När vi skapar tabeller i HTML behöver vi alltså specificera kolumnerna i raderna och inte tvärtom. Syntaxen hade ju förstås likaväl kunnat fungera tvärtom men nu är fallet inte så.

> I tabeller specificerar vi först raderna --- sedan kolumnerna. Aldrig tvärtom.

Innanför elementet `tr` kan vi sedan placera ett valfritt antal element av typen `<td>` (_table data_. För att underlätta den mentala modellen kan du alltså tänka att elementet `td` skapar kolumner. Om vi använder `tr` för att skapa rader i tabellen så använder vi `td` för att skapa kolumner i en rad.

Det sista elementet vi kan använda när vi arbetar med tabeller är `>th<` (_table header_). Detta element kan ersätta vilket `<td>` som helst. Vi använder alltså elementet för att denotera att en viss cell inte innehåller vanlig celldata. Utan snarare bör behandlas som en rubrik.

Låt oss se till ett komplett exempel.

Exempel på tabell

    <table>
      <tr>
        <th>Djur</th>
        <th>Storlek</th>
      </tr>
      <tr>
        <td>Golden Retriever</td> 
        <td>Stor</td> 
      </tr>
      <tr>
        <td>Norsk Skogskatt</td> 
        <td>Liten</td> 
      </tr>
    </table>

Resultat

<figure>
  <table>
    <tr>
      <th>Djur</th>
      <th>Storlek</th>
    </tr>
    <tr>
      <td>Golden Retriever</td> 
      <td>Stor</td> 
    </tr>
    <tr>
      <td>Norsk Skogskatt</td> 
      <td>Liten</td> 
    </tr>
  </table>
</figure>

Var inte rädd för att använda tabeller! Men kom alltså ihåg att tabeller endast ska användas för data som är rimlig att presentera i tabeller.

### Definitionslistor

Kommer snart...

### Bilder 

Dags att bli visuella och diskutera hur vi får in bilder i våra HTML-dokument. Som vanligt när det kommer till HTML är det egentligen ganska enkelt. Genom att använda `<img>`-taggen tillsammans med attributet `src` kan vi infoga bilder i våra dokument. Låt oss se till ett exempel.
    
    <img src="http://placekitten.com/g/80/80">

Resultat

<figure>
![En mästerkatt utan stövlar](http://placekitten.com/g/80/80)
</figure>


> Prova gärna att klistra in adressen som bilden ovan pekar mot i webbläsaren och kolla vad som finns under adressen. 

Notera alltså att att adressen ovan (som antytt) pekar mot en URL som renderar en bild. (Tjänsten [placekitten][1] erbjuder helt enkelt bilder i olika storlekar under alla sina URL:er.) Således kan vi alltså ersätta den adressen med en bild som finns lokalt på vår dator, på vår egen server eller någon annanstans på internet. Attributet `src` förväntar sig helt enkelt en adress till en bild.

#### Alternativ

Men vad händer om en bild inte kan renderas? Och vad händer när en [screen reader][2] upptäcker en bild. In kommer `alt`-attributet och räddar dagen! Låt oss se till ett exempel innan vi går vidare.

Exempel på användning av alt-attributet

    <img src="http://placekitten.com/g/60/60" alt="En mästerkatt utan stövlar">

Om vi nu försöker nå ovan bild genom någon form av läsare som inte kan rendera bilder så kommer vi istället få texten _En mästerkatt utan stövlar_. I annat fall kommer bilden att visas som vanligt och texten inte synas. Tänk på att attributet `alt` krävs för att en `<img>`-tagg ska vara [valid][3].

> Attributen `alt` och `src` krävs båda för att en `<img>`-tagg ska vara valid.

#### Bildtexter

Om vi vill lägga till en bildtext till vår bild kommer de nya html5-elementen `<figure>` och `<figcaption>` väl till pass.

Dessa är _semantiska_ attribut snarare än _visuella_. Med andra ord. Visst har `<p>`-taggen en semantisk innebörd --- en paragraf representerar ju semantiskt ett stycke text, och således rimligen en tanke. Men i HTML så resulterar ju även en paragraf i någonting visuellt skillt ifrån plain-text och därmed 

Elementen `figure` och `figcaption` är båda _semantiska_ element snarare än direkt _visuella_. Med andra ord, om vi skulle välja att bara skriva ut vår bild följd av ett helt vanligt paragraf-element som innehåller vår bildtext, så skulle det visuella resultatet bli ungefär likadant som om vi använde figure och figcaption. Poängen med att dock istället använda figure och figcaption är att vi [berikar dokumentet med semantik][4]. Plus att vi har ett enhetligt sätt att angripa bildtexter ifrån våra stilmallar (css).

> `<figure>` och `<figcaption>` är båda element med semantisk mening.

Exempel på figurannotation med figcaption

    <figure>
      <img src="http://placekitten.com/g/130/130">
      <figcaption>
        En mästerkatt utan stövlar.
      </figcaption>
    </figure>

Resultat

<figure>
![En mästerkatt utan stövlar](http://placekitten.com/g/130/130)En mästerkatt utan stövlar.
</figure>

[0]: http://www.w3schools.com/html/tryit.asp?filename=tryhtml_headers
[1]: http://placekitten.com
[2]: http://en.wikipedia.org/wiki/Screen_reader
[3]: http://www.w3schools.com/tags/tag_img.asp
[4]: http://en.wikipedia.org/wiki/Semantic_HTML

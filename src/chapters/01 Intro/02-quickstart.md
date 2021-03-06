## Filer, filformat och webbläsare

Alldeles snart ska vi djupdyka in och skapa vår första webbsida. Men först behöver vi snabbt orientera oss. Vad är egentligen en webbsida? Vad är egentligen en webbläsare? Och vad är det som gör att en webbläsare kan läsa en webbsida? Låt oss bena ut några begrepp.

### Vad är en webbsida?

Vi kommer sannolikt möta fler definitioner under denna resas gång. Men låt oss, för enkelhetens skull, definiera en webbsida som följande: Ett interaktivt dokument med hyperlänkar till andra interaktiva dokument.

Men vad skiljer då dessa "interaktiva" dokument ifrån helt vanliga textdokument. Låt oss se till några exempel. Webbsidor kan...

* innehålla hyperlänkar (som leder oss till andra webbsidor),
* vara förändringsbara (genom t.ex. animation)
* vara interaktiva (d.v.s. förändras beroende på hur vi interagerar med dem)
* läsas av maskiner (t.ex. [sökspindlar][0] konstruerade av (t.ex.) Google, kan analysera din webbsida och skapa sig en uppfattning om dess innehåll och struktur)
* konsumeras på en multitud av olika enheter. Såsom mobiler, tablets eller Smart TV-apparater.

Alla ovan punkter har förstås inte alltid varit sanna. I webbens tidiga dagar hade vi tur om vi träffade på en animerad gif av en [hamster som dansade][1]. Idag har vi världsförändrande webbsidor såsom [Google Maps][2]. Gränsen för vad som kan täckas in av ordet webbsida börjar tänjas längre och längre, och gränsen mellan en traditionell applikation och en webbsida är nästan redan utsuddad. Men låt oss återkomma till den här diskussionen i ett senare kapitel.

### Vad är en webbläsare?

Du har sannolikt redan en god uppfattning om vad en webbläsare är. Men det är viktigt att vi funderar över det lite närmare. Låt oss försöka bryta ned det.

Låt oss fundera lite på vad en webbläsare är genom att fundera på vad ett datorprogram är. Ett datorprogram är (oftast) en uppsättning funktioner som transformerar input till output.

I vissa fall innebär denna transformation att vi går ifrån ett filformat till ett annat. Säg t.ex. när vi konverterar en videofil ifrån ett format till ett annat. Kanske för att det ska gå att spela upp på en mobil enhet.

I andra fall innebär denna transformation att vi går ifrån ett format som endast en dator kan förstå till ett format som en människa kan tolka genom något av sina sinnen. En rå videofil är t.ex. allt för komplex för att vi som människor ska kunna läsa dess "binära" data och förstå vad filmen handlar om. Istället måste datorn successivt "koda om" detta format till en ström av bilder som visas upp på vår skärm.

Ett videouppspelningsprogram såsom VLC, Media Player Classic, Quick Time, eller Windows Media Player fungerar alltså i detta fall som en slags "tolk" av information. Återigen, är programvarans uppgift alltså att transformera någonting ifrån ett format till annat.

Men vad har detta med webbläsare att göra? Fundera på vad vi nyss ha sagt, och fundera sedan på att alla webbläsare också är program. Webbläsare transformerar input till output. Nothing more, nothing less.

Webbläsarens input är (t.ex.) ett HTML-dokument, och webbläsarens output är (bl.a.) en, på skärmen, visuell representation av strukturen och innehållet av det dokumentet. HTML är med andra ord maskinens sätt att läsa ett dokument, och webbläsarens visuella representation av samma dokument är den mänskligt läsbara motsvarigheten.

### Vad är ett filformat?

Innan vi går vidare behöver vi fundera lite på vad en fil är för någonting. Alltså helt vanliga filer som du hittar på din egen dator. Bildfilder, dokument, musik etc. Det två viktiga realisationer vi behöver göra.

1. Filtyper är bara hittepå. Alla filer är rådata. Alla filer går att läsa som text. Strukturen på texten är baserad på konvention.
2. Filändelser på bara hittepå. De en konventionsbaserad indikator för filtyp.

Egentligen kan vi se allting som text. (Sanningen är djupare än så. Egentligen är även mänsklig text för en dator bara hittepå och konvention. Men det är att gräva onödigt djupt för nu). Om vi accepterar att alla filer, oavsett om de är bilder, filmer, textdokument eller webbsidor egentligen bara består av text så börjar vi nå intressanta frågor. Hur i hela friden kan en biofilm representeras i text? Låt oss formalisera frågorna.

1. Hur kan komplexa filer representeras med rå data?
2. Hur vet operativsystemet vilken typ av fil en viss fil är av, och således vilket program det ska använda för att öppna filen?

Svaret på den första frågan är egentligen tätt bundet till svaret på den andra. Ponera t.ex. talserien `(0,255,255)`. Ponera att vi "mappar" dessa siffror emot konventionen RGB (Red, Green, Blue) (som används för att representera färg). Ponera att varje värde ska separeras med ett komma-tecken. Ponera även att `0` betyder "färgkanal på" och `255` betyder "färgkanal av". Denna tankelek göra att vi genom konvention och helt vanlig plain-text specificerat färgen röd. Poängen är alltså att om vi bara ser till texten i sig är den helt meningslös. Men när vi applicerar idéen om konventionen på texten fyller den plötsligt ett syfte.

En fil är bara en mängd arbiträr men strukturerad data. Program följer olika konventioner, och när man läser en fil med hjälp av en viss konvention kan man extrahera den information som faktiskt finns inbäddad i filen. D.v.s visa bilden, spela upp ljudet, representera dokumentet.

Så hur vet operativsystemet vilken konvention den ska applicera? Tänk tillbaka på tidigare diskussion om att ett programs enda uppgift är att transformera input till output. Om ett program är specialiserat på att transformera en viss typ av input till en viss typ av output &mdash; då är det en utmärkt kandidat för att vara en explicit konvention. Innehållet i en fil är alltså input (texten) och ett givet program är alltså transformationsprocessen (konventionen).

Låt oss formulera det i andra ord. En fil innehåller egentligen bara strukturerad råtext (egentligen: data). När denna fil med strukturerad råtext sedan öppnas med det program den var ämnad att öppnas i, kommer denna till synes mumbo jumbo av text helt plötsligt spela sin roll.

> Prova själv genom att öppna t.ex. en .jpeg-fil i en vanlig texteditor (såsom Notepad eller TextEdit).

Egentligen kan vi slänga på vilken filändelse (alltså t.ex. .tex, .doc, .pdf, .jpg, etc.) på vilken fil som helst. Den spelar ingen roll för själva innehållet i filen. Så länge vi öppnar filen med det avsedda programmet (och så länge det avsedda programmet tillåter oss att forcera det att öppna filer med "fel" filändelse) så kommer allt fungera precis som vanligt.

Faktum är att UNIX-baserade operativsystem i grund och botten [inte bryr sig om filändelser][3]. Istället för att filändelsen specificerar vilket program som bör användas för att öppna filen, så specificerar filen själv vilket program som bör användas.

Medan det konkreta beteendet skiljer sig ifrån operativssytem till operativssystem, så är dagens läxa alltså att alla program i teorin egentligen kan läsa alla filer. Det går bara mer eller mindre bra. Det gäller alltså bara att det programmet applicerar rätt _konvention_ för hur filen ska läsas. Texteditorer (t.ex.) kan öppna ljudfiler, de kan visa upp det råa innehållet i textuell representation. Men de har ingen aning om hur man faktiskt får ljudet att spelas upp.

Låt oss analysera ett scenario du själv eller någon du känner kanske redan stött på. Anta att vi har en fil: `bild.jpg`. Anta sedan att vi döper om den till `bild.png`. Har filen nu konverterats ifrån formatet JPEG till PNG? Fundera... Självklart inte! Filändelsen är ju bara en del av filnamnet. Inte en del av innehållet. Innehållet är fortfarande detsamma. JPEG är en konvention, PNG en annan. Om filens innehåll följde konventionen JPEG tidigare, och vi endast förändrade filändelsen (alltså filens namn) så innehåller den ju fortfarande data som följer JPEG-konventionen. Alltså har filen inte konverterats. Däremot kommer vi sannolikt ha det svårare att öppna filen i vissa program och/eller operativsystem. Programmet kan komma att anta att filen följer konventionen PNG (i.o.m. att filen har en filändelse som är .png) men när filen sedan faktiskt följer konventionen JPEG (eftersom innehållet i filen följer JPEG-konventionen) så blir programmet superförvirrat och ger upp. En fil med innehåll som följer JPEG-konventionen är inte en fil som följer PNG-konventionen &mdash; oavsett vilken filändelse vi slänger på. En JPEG-fil är inte en PNG-fil &mdash; oavsett vilken filändelse vi slänger på.

### Vad är HTML?

Låt oss nu prata om HTML. Webben drivs i stor del av ett märkesspråk ([markup language][4]) vid namn HTML. Innan vi kan börja förstå vad HTML är behöver vi förstå vad ett märkesspråk är.

Ett märkesspråk (oavsett vilket) kan ses som ett textfilsformat vi använder för att "markera upp" olika delar av en text. T.ex. kan det användas för att tilldela ett dokuments olika delar olika semantisk betydelse. Men vad menar vi då med att "markera upp"?

Reflektera över denna sida. Över denna text. Du ser att vissa delar är paragrafer och att vissa delar är rubriker. Du ser att denna paragraf inte är samma som den föregående. Hur? T.ex. är du ju en människa som vet att du ska tolka upprepade radbrytningar som paragrafskiften. Men hur visste datorn det? Eller mer specifikt. Hur vet din webbläsare (eller det program du använder för att läsa texten) vad som är vad? Hur vet webbläsaren vad som är en rubrik, vad som är en paragraf, vad som är en länk och vart länkarna pekar? Som du antagligen gissat är svaret märkesspråk &mdash; markup languages.

Vi använder alltså märkesspråk för att delimitera olika sektioner i en flödestext. Om du tänker tillbaka på vad vi tidigare diskuterat om att allting är rå text, så kan denna text i teorin representera vad som helst.Text, video, bild etc. I vilket fall så använder vi märkesspråk för att delimitera olika delar av dokumentet i olika sektioner. Låt oss se till ett snabbt exempel på hur detta fungerar i märkesspråket HTML.

```html
Endast ett ord i denna text, nämnligen <b>detta</b> kommer att visas i fetstil.
```

Om vi kör ovan genom en webbläsare så kommer webbläsaren att rendera följande resultat:

<figure>
Endast ett ord i denna text, nämnligen **detta** kommer att visas i fetstil.
</figure>

Notera alltså hur användandet av notationen `<b>...</b>` används för att delimitera en del av texten som är av extra semantisk vikt och bör visas upp i fetstil. Detta är vad som i HTML kallas för ett `element`. Ett element som byggs upp genom kombinationen av en start-tag (`<b>`) och en slut-tag (`</b>`).

Användandet av bokstaven `b` i ovan exempel är något sånär arbiträrt. Bokstaven delimiterar vilket elment det är vi vill skapa. I HTML finns ett antal fördefinerade element, varvid `b` är just ett sådant. Användandet av tecknena mindre än (`<`), större än (`>`), och slash (`/`) är dock inte arbiträra. De tillhör märkesspråket HTML's [syntax][5].

Syntax är ett ord som används för att beskriva hur vi uttrycker någonting i ett visst språk. Varje programmeringsspråk och märkesspråk har en egen syntax. Olika märkesspråk har olika syntax, men idéen är densamma. Ett märkesspråk använder någon form av syntax för att "markera ut" vilka delar av en text som är av vilken typ. T.ex. rubriker, paragrafer, länkar, emfas, citat o.s.v.

Vi kommer att gräva mycket mer i hur HTML fungerar senare. Men för nu behöver du förstå att HTML är ett märkesspråk, och att märkesspråk används för att "markera upp" olika delar av en text så att en maskin kan "förstå" dokumentet.

[0]: http://en.wikipedia.org/wiki/Web_crawler
[1]: http://en.wikipedia.org/wiki/Hampster_Dance
[2]: http://maps.google.com
[3]: http://cs.canisius.edu/ONLINESTUFF/UNIX/files1.html
[4]: http://en.wikipedia.org/wiki/Markup_language
[5]: http://sv.wikipedia.org/wiki/Syntax

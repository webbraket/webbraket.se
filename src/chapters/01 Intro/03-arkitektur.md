## Internet, klienter och servrar

Den huvudsakliga frågan vi ska försöka besvara i detta kapitel är &mdash; hur fungerar en webbsida? Alltså, hur kan det komma sig att när vi knattrar in www.google.com i en webbläsare och trycker enter, så kommer en interaktiv webbsida tillbaka.

För att kunna svara på den frågan behöver vi bena ut ett par olika begrepp och lära oss lite mer om den arkitktur som vårt kära internet bygger på. Vi behöver bl.a. prata om klienter, servrar, nätverk, requests och responses.

### Webbläsaren som program

Förnim dig att vi redan har diskuterat att alla filformat bygger på konventioner. Och att alla program "läser" filer genom att de känner till rätt konventioner. Webbläsaren är egentligen ett helt vanligt program som bl.a. bygger på konventioner kring formatet HTML.

Webbläsaren är alltså ett program som "förstår HTML". Om du öppnar en webbläsare och säger `"File > Open"` så förväntar den sig att du ska ge den en fil i (t.ex.) HTML-format.

När vi ger webbläsaren en fil i HTML-format så tolkar webbläsaren filen enligt de konventioner som specificeras av HTML-standarden. Tyvärr har olika webbläsare valt att implementera olika delar av standarden. Samt tolkat olika delar av standarden olika. Vi kommer prata mer om denna situation senare. Hur det kan komma sig att samma kod kan betee sig olika i olika webbläsare. Vad det har för konsekvenser, och hur vi kan hantera det.

Men det vi behöver fokusera på nu, är alltså att vi **inte** behöver se webbläsaren som ett program som "browsar" internet. Vi kan likväl se webbläsaren som ett program som kan rendera HTML-filer.

Så, vad menar vi då med att webbläsaren "renderar" en HTML-fil? De webbläsare vi oftast kommer i kontakt med (Google Chrome, Firefox, Internet Explorer etc.) är webbläsare vars uppgift (bl.a.) är att "läsa" HTML-filer och rendera deras visuella representation på skärmen. Vi, i egenskap av människor, vill inte se själva markup-koden utan en rimlig visuell representation av den markup-koden. Om ett antal ord t.ex. är omslutna av bold-taggen (ex: `<b>Hej</b>`) så vill vi inte (när webbläsaren har renderat dokumentet) se själva taggen. Istället vill vi se texten som omslöts av elementet i visuell fetstil (alltså: **Hej**). En webbläsares uppgift är alltså (bl.a.) att konvertera ett HTML dokument ifrån ett machine-readable format format till ett human-readable format, som visuellt representeras på skärmen.

### Statiska webbsidor

När vi talar om språk för webbutveckling talar vi oftast antingen om server-side- eller client-side-språk. Vi pratar också om statiska och dynamiska webbsidor. Förenklat uttryckt så kan vi med hjälp av server-side-språk uppnå dynamiska språk. Utan server-side språk kan vi endast skapa statiska webbsidor. Detta är en halvsanning (p.g.a. JavaScript), men det kommer vi tala om mer senare. För att skapa dynamiska webbsidor behöver vi introducera någon form av programmerings/scripting-språk. Med märkesspråk endast, kan vi alltså endast skapa statiska webbsidor.

Notera att ovan paragraf inte använder facktermer utan bör istället betraktas som en tolkning.

Innan vi kan gå över till att diskutera statiska, dynamiska och skillnaden emellan de &mdash; låt oss återigen påminna oss själva om hur språket HTML ser ut.

```html
    Ett ord i <b>fetstil</b> och ett <u>understruket</u>.
```

<figure>
Ett ord i **fetstil** och ett _understruket_.
</figure>

HTML är alltså det märkesspråk vi använder för att "märka upp" ett stycke media. Vi använder termen media eftersom HTML-dokument inte endast behöver bestå av text. De kan även innehålla bilder, ljud och video.

Med ordet statiskt menar vi (krasst) att om vi skulle öppna samma HTML-dokument två gånger i samma webbläsare så kommer vi att se ett precis likadant dokument andra gången som första. Låt oss omformulera detta. Ett icke-dynamiskt dokument är alltså ett icke-förändrande dokument. Ett statiskt dokument är ett dokument som inte förändras oavsett när vi visar upp det.

Låt oss uttrycka oss tydligare. När vi har en statisk webbsida så är det alltid samma markup (HTML) och resurser (bilder, css, javascript etc.) som levereras till webbläsaren. När vi bygger statiska sidor så har våran webbapplikation inte heller någon möjlighet att kommunicera med servern. Om sidan inte kan kommunicera med en server så kan den inte heller hålla någon form av "state". Med state menar vi minne. Om vi t.ex. vill bygga en highscore-lista för ett spel så behöver vi ett persistant state för att alla ska

* Samma markup serveras alltid till webbläsaren när webbläsaren begär samma URL
* Samma resurser serveras alltid till webbläsaren när webbläsaren begär samma URL
* Servern som serverar filerna gör det utan att något program modifierar filerna innan de serveras.

Ett exempel på en statisk webbsida är denna. Alltså htmlhunden.se. De dynamiska delarna (såsom t.ex. innehållsförteckningen) av denna bok har redan genererats i förväg. När din webbläsare ber om att få den sida du är på just nu &mdash; så kommer servern alltid att servera samma HTML. Nämligen den du just nu ser på.

### Dynamiska webbsidor

Om statiska webbsidor innebär webbsidor där den server som serverar webbsidan alltid serverar samma filer vid sina URL:er &mdash; vad är då en dynamisk webbsida? Som du kanske redan gissat, kan servrar som serverar dynamiska webbsidor servera olika HTML olika gånger trots att vi begär samma URL. Det finns alltså inga garantier för att vår webbläsare kommer att motta samma resurser när vi laddar om sidan.

Vi behöver skapa dynamiska webbapplikationer när vi behöver...

* ... spara/hämta data till/ifrån en databas (ex. användare)
* ... utföra beräkningar som inte får riskera exponeras för användaren (ex. login)
* ... utföra "tunga" beräkningar som klientens dator kanske inte orkar med (ex. videokonvertering)
* ... utföra aktiviteter med beroenden av 3e-parts-applikationer (ex. zip)
* ... utföra aktiviteter som klienten inte har möjlighet/rättighet att utföra per automatik (ex. skicka mail)

Det finns (som alltid) ett par undantag i relation till ovan lista. Men de undantagen är av för hög överkurs för att vi ska gå in på dem. I stora drag är ovan lista sann.

### State

Kommer snart...

### Klient-server-arkitektur

Innan vi kan gå djupare in på varför vi **inte** kan utföra komplex logik i html så behöver vi lära oss lite om ansvarsområden för [klienter och servrar][0]. Vi har tidigare i detta kapitel uttryckt oss i bemärkelsen att en "server serverar en fil". Om vi är ännu mer explicita skulle vi kunna säga att en server severar en fil som en klient konsumerar.

> En server _servererar_ resurser som _konsumeras_ av klienter.

Vad i hela friden menar vi med det? Vem är servern? Vem är klienten? Vad är en resurs? Detta är förstås generella termer som kan anta många skepnader. Men i de flesta av fall är din webbläsare klienten. Klienten är den som konsumerar. Klienten är den som blir serverad en HTML-sida. Klienten ansvarar själv för att rendera sidan. Såsom vi tidigare diskuterat. Webbläsaren (klienten) är ett program som är expert HTML-konventionen. Så när webbläsaren tar emot ett dokument som följer konventionen HTML så kan den utan problem rendera den visuella representationen av det dokumentet. Oavsett om du använder din webbläsare för att öppna www.google.com eller en HTML-fil på din egen dator så är webbläsaren en klient.

Servern däremot kan variera. När du öppnar www.google.com i en webbläsare så finns servern någon helt annanstans. Din klient (webbläsaren) skickar ett request till någon av (i detta fall) Google's servrar som svarar med ett response innehållandes HTML. Eftersom din klient (webbläsaren) är expert på att läsa HTML så läser den svaret och renderar den visuella representationen i din webbläsare.

När du öppnar en HTML-fil på din egen dator så är det din egen dator som är servern. När du väljer `File > Open`, väljer en fil och sedan klickar OK så pratar din webbläsare med filsystemet på din dator. Löst uttryckt, ber din webbläsare helt enkelt ditt filsystem om den fil som finns på den plats där den fil du valde finns. Du kommer senare upptäcka att vad en traditionell webbserver gör, faktiskt inte ens är särskilt annorlunda än detta triviala scenario.

För att slutligen svara på vad vi menar med ordet "resurs" i ovan citat så kan det egentligen vara nästan vad som helst. Vi ska strax prata om request-response-modellen. Allt som går att skicka som ett response är en resurs som skulle kunna serveras av en server och konsumeras av en klient. HTML-dokument, bilder, javascript-filer, musik, Word-dokument etc.

När vi som webbutvecklare utvecklar sidor är det vanligt att vi kör en lokal webbserver på vår egen dator. Detta bl.a. för att närmare efterlikna (mimik:a) den miljö som vår webbsida faktiskt kommer att leva i när den ligger "live" på Internet.

Många tänker på mörka dundrande hallar fyllda med korridorer av monstermaskiner när de tänker på servrar. Nu vet du att verkligheten absolut ibland ser ut just så. Men du vet också att det inte alls behöver vara fallet. En server är egentligen också bara ett program som kan köras på en dator. Denna dator kan lika gärna vara din egen laptop. Och programmet kan lika gärna vara väldigt litet.

### Request-response

Internet bygger på en modell som vi kan kalla för request-response-modellen. Ett "request" är en förfrågan, och ett "response" är ett svar. Vi vet ju nu att en servers uppgift är att servera klient med resurser. Men mer specifikt så serverar en server ett (passande) response till en klient, när denne klient skickar ett request. Vi säger passande eftersom reponse:et förstås beror på vilket request vi har skickat.

> En server serverar ett response till den klient som skickar ett request.

Det här låter kanske komplext men är egentligen väldigt enkelt. Låt oss se till det lite närmare. Aktörerna i denna klient-server-historia är alltså följande:

1. En klient (t.ex. vår webbläsare)
2. En server (t.ex. någon annans dator)

En konversation mellan de två parterna skulle alltså kunna låta så här:

    client request
    "Hörru servern, jag skulle vilja titta på filen index.html."

    server response
    "Okidokes, här kommer den!"

    Klienten läser filen och upptäcker att filen refererade till en bild som den också behöver

    client request
    "Du din gamle server, du berättade inte att jag behövde logo.png också, langar du över den är du snäll!"

    server response
    "Sorry, eftersom jag bygger på den gamla request-response-modellen kunde jag inte berätta det för dig på en gång, här har du!"

Ovan figur är alltså en visualisering av hur ett request-response-scenario skulle kunna spela ut sig, när en klient ber om en webbsida. Och i essens är det ungefär det här som händer _varje gång_ vi öppnar vår webbläsare och skriver in en adress såsom exempelvis www.google.com.

### Server-side-språk

Låt oss nu istället prata om server-side språk. Ett server-side-språk är ett lös term som refererar till ett programmeringsspråk som kan användas för att leverera ett response när ett request kommer in. Tänk så här. Vi skulle kunna ha en klient-server-arkitektur helt utan ett server-side-språk. Hur? Jo, klienten ber om en sida genom ett request som vandrar över internet och når rätt server som rakt av svarar med ett response som är en html-sida.

Men nu är det ju så att det moderna internet består av mycket mer komplexitet än statiska sidor. Den enda skillnaden vi introducerar i ovanstående process handlar då om att vi introducerar ett språk som ansvarar för att konstruera html-sidor beroende på response.

Vi omformulerar ovan paragraf. Ett server-side-språks huvudsakliga uppgift är alltså att "hitta på" ett html-dokument. Ett statiskt response skulle vara att bara svara med en existerande html-fil. Men ett dynamiskt response skulle innebära att server-side-språket först utför en del logik, och sen "on the fly" skapar den html-fil som servern svarar med.

Exempel på server-side-språk är t.ex. [PHP][1], [Ruby][2], [Python][3], [ASP.NET][4] etc.

Så om server-side-språket "genererar" HTML-filer &mdash; varför måste vi då lära oss att skriva det själva? Enkelt svarat &mdash; eftersom det är vi som skriver server-side-koden, och därmed även vi som definierar hur HTML-sidorna ska genereras. Det finns alltså inte någon magisk HTML-generator utan någonstans måste vi definera exakt hur HTML-sidorna ska genereras beroende på de request vi får in. Vi återkommer alltså till den gamla tanken mdash; eftersom datorer är korkade, så måste vi berätta för dem exakt vad vi vill ha.

[0]: http://sv.wikipedia.org/wiki/Klient%E2%80%93server
[1]: http://php.net
[2]: https://www.ruby-lang.org/en/
[3]: https://www.python.org
[4]: http://www.asp.net

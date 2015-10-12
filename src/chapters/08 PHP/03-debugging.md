## Felsökning

Allt går fel. Ingenting är perfekt. Och ibland vet man exakt vad man vill programmera men hur man än gör så verkar det som om man inte kommer dit. Om du kommer ifrån ett statiskt typat språk, eller har arbetat med kodeditorer såsom Visual Studio så är risken överhängande stor att du kommer hitta dig i en situation där du inser att du behöver kämpa mycket hårdare för att hitta fel i ett språk som `php`. Dynamisk typning är ett tvåeggaat svärd. En välsignelse såväl som en förbannelse. I det här kapitlet börjar vi med att prata om felsökningsstrategier på en övergripande nivå. Sedan ger vi några snabba, konkreta tips för felsökning av `php`-kod.

### Strategisk felsökning

All felsökning som inte är strategisk är idiotisk. Inga undantag. Om du någon gång försöker övertyga någon om någonting annat bör du läsa en bok om programmering och tänka om. För att vara värdig att kalla dig själv för mjukvaruutvecklare så behöver du vara strategisk. Tycker du att vi är hårda? Tänk efter. Bygger arkitekter hus på måfå? Ingenjörer broar genom att chansa? När en TV-reparatör ska laga en TV. Tror du hen bankar på den med en hammare tills den fungerar? Nej? Behöver vi ens ge fler exempel? Självklart är svaret nej. Professionella ämbetsmän bankar inte på måfå. Visst kanske vi bankar på TV-apparaten ibland. Men om vi gör det så vet vi varför vi gör det.

Så, vad innebär det att strategiskt felsöka? Det finns förstås många olika sätt att se på det. Men vi föreslår följande övervy.

1. Identifiera
2. Isolera 
3. Åtgärda

Du kanske tycker att detta låter som självklarheter. Men vi lovar dig. Det är inte självklart inte självklarheter. Vi har jobbat med tillräckligt mycket pedagogisk verksamhet för att lova dig att människor gång på gång efter gång på gång kan sitta i timmar och banka på samma TV-apparat och ändå inte acceptera att de behöver angripa problemet ifrån en mer strategisk vinkel.

Vad menar vi då med ovan lista. Låt oss prata om de en efter en.

### Identifiera

Detta kan tyckas det mest självklara av alla steg. Men glöm inte vad vi sa. Vi har sett det här så många gånger att det är lika bra att på en gång acceptera att det inte är en självklarhet. Innan vi kan börja angripa problemet måste vi identifiera det. Vad är det som inte fungerar?

För att kunna svara på frågan om vad som är fel. Behöver vi först förstå vad vi egentligen menar när vi pratar om mjukvarufel. Vad innebär det att någonting "inte fungerar". Återigen finns det säkert en miljon definitioner men vi ser det så här. Om vi förväntar oss A, men upplever B --- så har ett fel uppstått. Denna definition är en viktig del av en realisation. Realisationen att det inte bara finns en lösning. Det finns också ett problem. Faktum är att det inte kan finnas en lösning utan ett problem. Varför? Eftersom en lösning är en lösning på ett problem. En lösning utan ett problem är ingen lösning. Så innan vi ens kan börja diskutera en lösning behöver vi definiera vårt problem.

Det är mycket vanligt att vi blir blinda inför detta faktum när vi suttit och programmerat i timmar. Vi "hade sönder" någonting två timmar tidigare, och sen dess har ingenting fungerat som det ska. "Allt är trasigt". Detta är inte konstigt. Det är lätt att bli uppgiven när vi inte går uppleva uppgångar på för länge. Det är jobbigt att bli konstant nedslagen. Därför är det superviktig att vara strategisk istället för naiv. Istället för att fortsätta slåss emot den imaginära fienden --- "ingenting fungerar" --- måste vi ta ett steg tillbaka. Reflektera. Kontemplera. Och välja strategi. Börja med att definiera problemet. Vad är det som inte fungerar? Hur tycker jag att det borde fungera? Förhoppningsvis kommer du då upptäcka att det som "inte fungerar" inte alls består av ett problem utan snarare många.

Acceptera således aldrig när någon uppgivet säger: "det fungerar inte". Det enda riktiga svaret på kommentaren "det fungerar inte" är --- "vad fungerar inte?".

Utkomsten av detta steg är alltså två saker. Att vi har identifierat hur vi (1) skulle vilja att någonting beteer sig. Samt att vi har identifierat hur (2) detta ting faktiskt beteer sig nu.

### Isolera

När vi väl har identifierat ett problem så behöver vi förstås lösa det. Det är oftast i denna ände som folk börjar. Men om vi börjar i denna ände kan vi omöjligen veta när vi har löst problemet. Eftersom vi inte definierat hur vi skulle önska att programmet (eller det vi nu felsöker) skulle betee sig.

Att isolera felet handlar inte om att lösa problemet. Att isolera felet handlar om att hitta det. Innan vi kan lösa någonting så behöver vi hitta vad som orsakar felet. Vi behöver inte alltid förstå varför det händer. Men vi behöver absolut hitta var det händer.

Vi ska nu prata om några olika högnivåstrategier vi kan använda för att isolera fel. 

#### Börja i den dummaste änden

Anta alltid att strömmen inte är på. Detta är förvånansvärt effektivt. Oftare än sällan är fel bara en oturlig effekt av slarvighet. Har vi t.ex. glömt att slå på servern? Databasen? Bytte vi lösenord igår och glömde bort att ändra det idag? Tror vi att vi redigerar en fil men egentligen redigerar vi en annan.

Alla dessa exempel låter som dumheter. Men jag slåss emot dessa dagligen. Vi är människor och människor gör klantiga misstag. Det viktigaste är att vi kliver ned ifrån våra höga hästar och aldrig anta att vi gjort alla dessa självklara grejer rätt.

Börja alltid med att snabbt gå igenom alla självklara grejer som skulle kunna orsaka felet. Om du inte har bevisat att det inte är någon av dessa självklara saker som orsakat felet så vet du fortfarande inte att det inte är någon av dem som faktiskt orskar det.

Ett bra sätt att testa huruvida någon av dessa grundläggande antaganden är orsaken till felet är att göra en snabb "sanity check" för varje antagande. Tänk så här --- "om servern fungerar så borde jag kunna göra X". Eller --- "om databasen är påslagen så borde jag kunna göra Y". Välj scenarion som är så triviala som möjligt och kräver så lite arbete ifrån dig som möjligt. Om jag t.ex. skulle vilja avgöra ifall den fil jag arbetar med faktiskt processas av `php` så skulle jag klippa ut allt i filen jag arbetar med och sedan skriva `echo "hello";`. Om jag inte får meddelandet "hello" när jag sedan kör filen så vet jag med säkerhet att det är det som är felet (eller en del av). Om jag faktiskt fick "hello" så kan jag utesluta att det var det som var felet. Istället fortsätter jag till nästa triviala antagande.

Kom ihåg att alltid verifiera att en applikations "boundries" är fungerande. Vi skriver sällan mjukvara i isolation. Verifiera att vi gör korrekta antaganden om tredjepartsbibliotek. 

#### Följ exekvering 

Det säkraste sättet att hitta felet är oftast att följa exekvering. Ifrån absolut början till absolut slut. Utan undantag. Tyvärr blir den ofta också ofta den mest kostsamma eftersom vi måste gå igenom så ruskigt mycket kod. Självklart är det dock mycket bättre än att banka på måfå. Det är mycket mer troligt att vi faktiskt kommer att hitta felet med denna metod. 

Börja i applikations "entry-point". Den första filen, den första metoden, den första raden. Läs koden och följ flödet. När du anropar en metod. Läs varje rad i den metoden. Följ flödet precis såsom det kommer att göras när koden exekveras. I varje steg där det finns en potentiell risk att du gjort ett inkorrekt antagande av något slag behöver du verifiera att du gjort rätt antagande. Inspektera variabelvärden och returnerade värden om funktioner i alla relevanta steg. Med IDE:en som Visual Studio blir vi förstås bortskämda och har möjligheten att genom debugging hela tiden undersöka variablers värden. När vi kodar i språk som t.ex. `php` har vi oftast inte den lyxen. Vi kan då undersöka "state" genom att output:a variablers värden. Det viktiga är helt enkelt att säkerställa att vi går in i varje metod med de värden vi antagit, och att vi lämnar varje metod med de värden vi antagit.

#### Triangulering.

Med triangulering försöker vi föreslå ett snabbare sätt än att som ovan diskuterat, följa exekveringen. Jag börjar nästan alltid med triangulering (efter att jag som ovan nämnt verifierat att elen är påslagen). Om jag misslyckas med att isolera felet med hjälp av triangulering så börjar jag följa exekveringsflödet.

Med triangulering så menar vi helt enkelt att en väljer några strategiskt valda positioner. Och verifierar att input och output stämmer överens med de antaganden vi gjort. Om du tittar på din kod och gör ett par intuitiva antaganden. Vart skulle du då gissa att det är fel? Gå sedan in på dessa ställen och verifiera att "världen" (state) vid dessa tillfällen faktiskt ser ut såsom du antar att den gör. Med andra ord. Om du antar att en viss funktion returnerar ett visst värde, undersök att den verkligen gör det. Om du antar att en variabel innehåller ett visst värde, verifiera att den verkligen gör det. Och så vidare.

Ofta räcker det till och med med att skriva ut vad som helst till skärmen. Ibland kan vi applicera strategin "hur långt kommer vi?". Eller "vilken väg tar koden?". Med andra ord. Istället för att själva läsa vår kod så försöker vi får vår kod att berätta för oss vilken väg vi tar. Ett sätt att göra det är t.ex. att strategiskt välja några platser och sedan printa ut siffror. Vi kan t.ex. printa siffror i stigande ordning i den väg vi antar att programmet tar. Om vi sedan får en annan ordning av siffror på skärmen så vet vi två saker. Att koden tar en annan väg än den vi antog. Samt att vi vet lite mer om vilken väg den faktiskt tar.

### Åtgärda

När vi väl hittat felet är det bara att försöka söka rätt på en lösning. Om du inte spontant vet vad lösningen är så är internet ofta det bästa vapnet vi har. Försök att generalisera ditt problem lite utanför din specifika domän och ge dig ut i internetdjungeln. Alternativt, försök vara superspecifik. Om du t.ex. har en felkod --- sök efter felkoden. När vi väl får en förklaring till vad felet betyder kan det hända att det blir uppenbart hur vi ska fixa det.

Det absolut viktigaste när vi väl har åtgärdat felet är förstås att **lära oss av våra misstag**. Fundera över det klassiska idiomet:
> 
> Fool me once, shame on you. Fool me twice, shame on me.

Många gånger har vi inte resurser nog att faktiskt förstå varför ett fel inträffade. Om vi väl lyckats lösa det behöver vi istället tuta på. Men låt oss bara säga att om vi inte förstår varför ett fel inträffade så spelar det absolut ingen roll att vi har löst det. Det kommer att hända igen.

Om felet detsutom berodde på att vi felanvände kod vi själva har skrivit så bör vi lära oss någonting om oss själva. Och sedan [refaktorera][0]. Alltså skriva om vår kod så att den gör samma sak men på ett mer uppenbart sätt.

### Tips i php

Vi skulle vilja ge ett par konkreta felsökningstips för dig som arbetar i `php`.

Det första är att se till att du har konfigurerat din `php`-installation så att felmeddelande faktiskt visas. Med andra ord behöver du sätta [display\_errors till On][1] i filen [php.ini][2]. I samma fil behöver du i samma veva även se till att inte bara kritiska fel, utan alla fel, rapporteras. Detta genom att [sätta error\_reporting till E\_ALL][3]. Notera att detta förslag inte alls är en bra idé för en "produktionskonfiguration". Med andra ord. När du väl ska konfigurera `php` på en maskin som ska servera webbsidor publikt på internet, så är dessa direktiv direkt farliga. Alla felmeddelanden bör absolut inte visas för obehöriga användare. Det är en annan historia men vi vill att du ska vara medveten om att det förstås är jättesvårt att isolera fel om vår utvecklingsmiljö inte rapporterar fel.

Det andra tipset vi har är en liten men ofantligt trevlig metod som heter `var_dump`. Denna metod används som så: `var_dump(expression)`. Denna metod printar precis som `echo` ut strängrepresentationen av en variabel till skärmen. Men utöver det så printar den också en massa annan matnyttig information. Om vi t.ex. har en array som innehåller de två elementen "apples" och "pears". Så skulle vi få följande resultat av `var_dump`
    
    array(2) { [0]=> string(6) "apples" [1]=> string(5) "pears" } 

Medan vi endast skulle få följande om vi använde `echo`.
    
    Array

Med andra ord kan vi snabbt vad en array innehåller och t.o.m. om den är tom. Men den verkliga styrkan kommer i att vi lätt kan upptäcka om en variabel innehåller `null`. Om vi t.ex. använder `echo` med en variabel som råkar innehålla `null` --- så printas helt enkelt ingenting till skärmen. Om vi däremot gör samma sak med `var_dump` så printas istället texten `NULL`. Mycket, mycket användbart.

Det sista essentiella tipset vi har, är en metod som heter `die` och som används som så: `die(expression)`. Denna metod är särskilt användbar i kombination med tidigare nämnd `var_dump`. Metoden är enkel. Den avbryter pågående exekvering, och printar ut strängrepresentationen av det uttryck den får på skärmen. Detta är t.ex. mycket användbart när vi jobbar med webbsidor. Istället för att fortsätta att rendera hela vår webbsida så kan vi avbryta resten av exekveringen och istället printa ut någonting till skärmen. Alltså, t.ex undersöka värdet i en variabel. Vi säger att det är smidigt eftersom vi kan undvika saker som layout, och således undvika saker såsom att vi rent visuellt råkar "gömma" det värde vi försöker undersöka.

[0]: http://en.wikipedia.org/wiki/Code_refactoring
[1]: http://stackoverflow.com/questions/6480425/php-not-displaying-errors-even-though-display-errors-on
[2]: http://www.php.net/manual/en/configuration.file.php
[3]: http://www.php.net/manual/en/function.error-reporting.php

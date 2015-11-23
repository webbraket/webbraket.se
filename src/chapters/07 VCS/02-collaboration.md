## Samarbete
Det är viktigt att notera att vi verkligen bara har skrapat på ytan av kraften med versionshanteringssystem.
Vi har hitills pratat om linjär versionshantering (tänk: linjär historia) och om projekt med en kodare eller dokumentförfattare.
System byggs dock dagligen i allt annat än linjära strukturer. Exempelvis så kanske vi håller en gren ("branch" i versionshanteringslingo) för vår [production environment] och ytterligare en för [development][development].
Eftersom versionshanteringssystem gör det möjligt att hålla icke-linjära backups så behöver dessa två branches alltså inte vara i synk (om vi inte vill det förstås).
En annan mycket viktig styrka hos versionshanteringssystem är dock förstås att det möjliggör samarbete.

[production environment]: https://en.wikipedia.org/wiki/Deployment_environment#Production
[development]: https://en.wikipedia.org/wiki/Deployment_environment#Development

Om du någon gång har arbetat tillsammans med någon annan på ett dokument eller en kodbas så vet du hur lönlöst det är att försöka bumpa versionsnummer och maila filer fram och tillbaka.
Man kan bli förvånad över hur stora delar av befolkningen som fortfarande sysslar med denna hjärskrynklande aktivitet.
Lyckligtvis så är vi ju programmerare, och programmerare gillar effektivisering accepterar inte att själva göra sådant som maskiner kan göra åt en.
Vi ber om ursäkt för generaliseringen :)

Om du arbetat tillsammans med andra i någon form av ordbehandlare som hanterar flera användare i realtid (såsom t.ex. [Google Docs]) så har du antagligen märkt hur ofantligt mycket mäktigare det tillvägagånssättet är.

[Google Docs]: https://docs.google.com

Styrkan i realtidssystem såsom [Google Docs] kan antagligen förklaras genom idéen om att hantera, vad som i versionshanteringslingo kallas för, merge-konflikter.
Eller för att översätta till svenska, sammanslagningskonflikter.

Låt oss exemplifiera genom att tänka på hur folk som inte är kodare och som av någon anledning vägrar system såsom [Google Docs] arbetar.
Beakta Adam och Eva.
Eva skapar ett dokument, ger det ett versionsnummer och skickar dokumentet till Adam.
Adam läser dokumentet, gör några förändringar och skickar tillbaka dokumentet till Eva.
Och så fortsätter det några vändor fram och tillbaka.

Vad är det för problem med detta kanske du frågar? Det finns en multitud av scenarion där detta system inte är tillräckligt kraftfullt för att vi som människor ska slippa sätta oss ned och jämföra två versioner i detalj genom att lusläsa rad för rad.
Anta t.ex. att Adam gjorde ett par förändringar och skickade över till Eva precis innan de skulle skicka iväg dokumentet till någon viktig person med hatt.
"Snacka om sista minuten", tänker Eva och vill verkligen säkerställa att Adam inte gjort några konstiga förändringar innan hon skickar iväg filen.
Eftersom de sparar hela versioner och inte diff:ar så behöver Eva helt enkelt sätta sig och lusläsa filen för att se om hon tycker att den är ok eller ej.

Detta är fullständigt onödigt.
Om du vill spendera ditt liv på att läsa samma dokument om och om igen så är du välkommen att göra det, men räkna inte med att andra programmerare kommer att samarbeta med dig :)

Om du försöker bemöta ovan åsikt med kommentarer såsom att Microsoft Word har en [Track Changes] feature så har du uppenbart aldrig sett ett dokument som haft Track Changes på och för många människor som har arbetat på det under för lång tid.
När du väl lärt dig versionshanteringssystem som Git så kommer du förstå varför du aldrig kommer kunna återvända till halvtaskiga lösningar såsom Track Changes.

[Track Changes]: https://www.youtube.com/watch?v=5_knruAysnA

Men låt oss komma tillbaka till idéen om merge-konflikter.
Anta att det blir en miss i kommunikationen.
Både Eva och Adam börjar skapa en ny version av dokumentet ifrån samma version, samtidigt.
Om dokumentet alltså var i version 7 och båda har skapat en version 8 så har vi helt plötsligt två stycken olika dokument som båda vill vara version 8.
Hur ska vi slå ihop dessa två versioner?
Om detta problem någon gång har hänt dig så förstår du hur hopplöst det är att läsa igenom två, eller t.o.m. tre om du beaktar ursprungsversionen, dokument i hopp om att identifiera alla förändringar så att du kan slå samman dem till ett dokument.
Detta är vad som i versionshanteringstermer kallas för en [three-way merge].

[three-way merge]: http://www.drdobbs.com/tools/three-way-merging-a-look-under-the-hood/240164902

Denna typ av "konflikter" kan i stort sett alltid automatiskt sammanslås (i.e. merge:as) av versionshanteringssystemet.
Undantaget är ifall två personer ändrat på samma rad.
Så låt oss säga det en sista gång. Det finns absolut inte någon som helst anledning till att göra denna sammanslagning manuellt.
[Version control everything. Yes, everything.](http://www.ibm.com/developerworks/library/a-devops6/)

Kanske tänker du att detta är ett mänskligt problem snarare än ett tekniskt. Att denna typ av konflikter kan undvikas genom att ha en formell versionshanteringsprocess där endast en person får skriva på ett dokument i taget.
Men om vi skulle angripa mjukvaruutveckling på det sättet skulle vi antagligen få väldigt få program skrivna.
Vilket team tror du är mer effektivt?
Ett team á sju personer som arbetar på samma dokument samtidigt, eller ett på sju personer som arbetar på samma dokument men aldrig mer än en åt gången.
Det senare scenariot är ju som om varje person endast är på jobbet en dag i veckan när inte någon annan är där.

Versionshanteringssystem är i, överlag, inte realtidssystem såsom tidigare nämnda [Google Docs].
Verionshanteringssystem arbetar istället på premissen att förändringar görs i "chunks".
En sådan "chunk" kallas i många versionshanteringssystem för en "commit".
Det finns initiativ till realtidsbaserade versionshanteringssystem á la Google Docs, såsom exempelvis [Code Anywhere] men dessa verkar vara undantag snarare än regel på företag idag.

[Code Anywhere]: https://codeanywhere.com/features/editor#collab

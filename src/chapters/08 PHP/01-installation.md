## Kom igång med PHP

Låt oss innan vi går vidare iterera på poängen att `php` självklart inte är det enda server-side-språket. Det finns otaliga andra ---[Ruby][0], [Python][1], [ASP.NET][2], o.s.v. Här på htmlhunden så har vi valt att använda `php` som språk för att exemplifiera och diskutera. Men försök komma ihåg att server-side-språk i grund och botten har många likheter och gör ungefär samma sak. Så om du väl har lärt dig ett, så kommer du ha lättare att komma "up to speed" med ett annat.

Anledningen till att vi har valt just `php` är att det är ett språk som är [dynamiskt typat][3] och inte syntantiskt fullkomligt olika ifrån språk som [Java][4] och [C\#][5]. De två sistnämda är ju förstås statiskt typade språk och alltså inte dynamiskt typade språk som `php`. Men om du kommer ifrån ett språk såsom `Java` eller `C#` så kommer du iallafall känna igen många saker såsom måsvingar, parantesanvändning, nyckelord såsom `static`, `final`, `public`, `private` och så vidare. Detta kan tyckas som trivialiteter men faktum är att språk som t.ex. `Ruby` bl.a. känns markant annorlunda p.g.a. andra sätt att hantera dessa nämnda trivialiteter. Så därför har vi valt att lära ut och diskutera `php`. Lita på oss, du kommer inte ha några problem att lära dig ett annat språk på egen hand senare! :)

### LAMP, MAMP & WAMP

En tidigare (och faktiskt fortfarande) populär akronym var termen [LAMP][6]. Eller --- LAMP-stacken som den ofta refereras till som. Denna akronym står (bl.a.) för [Linux][7], [Apache][8], [MySQL][9], och [PHP][10]. Vi säger "bl.a." eftersom det finns versioner av denna stack där `php` t.ex. byts ut emot `perl` o.s.v. Denna stack har blivit mycket populär för webbutveckling.

`Apache` används som webbserver, `php` som server-side-språk, `MySQL` som databas, och slutligen `Linux` som operativsystem där alla nämnda körs.

Två andra "stackar" som är adaptioner av den tidigare nämnda `LAMP`-stacken är [MAMP][11] och [WAMP][6]. I förstnämnda så står M:et för Macintosh, och i sistnämnda så står W:et för Windows. Det är alltså samma mjukvarustackar som LAMP fast med operativsystemet Linux utbytt emot någon av dessa andra två.

### Installation

För nuvarande ger vi inga steg-för-steg-instruktioner gällande hur du installerar MAMP, WAMP eller LAMP. Men om du sitter på antingen Macintosh eller Windows så är det en otroligt enkel match. För Macintosh finns nämligen det [MAMP som app][12], och för Windows finns [WAMP som program][13]. Dessa är alltså hela \*AMP-stacken i ett enda program. Alltså, ett mycket smidigt sätt att komma igång.

Om du ändå är fundersam över hur du ska gå tillväga så föreslår vi att du tar en titt på några tutorials på YouTube.

* [MAMP (Macintosh)][14]
* [WAMP (Windows)][15]
* [LAMP (Linux)][16]

[0]: http://en.wikipedia.org/wiki/Ruby_(programming_language)
[1]: http://en.wikipedia.org/wiki/Python_(programming_language)
[2]: http://en.wikipedia.org/wiki/ASP.NET
[3]: http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information
[4]: http://en.wikipedia.org/wiki/Java_(programming_language)
[5]: http://en.wikipedia.org/wiki/C_Sharp_(programming_language)
[6]: http://en.wikipedia.org/wiki/WAMP#Variants_and_equivalents_on_other_platforms
[7]: http://en.wikipedia.org/wiki/Linux
[8]: http://en.wikipedia.org/wiki/Apache_HTTP_Server
[9]: http://en.wikipedia.org/wiki/MySQL
[10]: http://en.wikipedia.org/wiki/PHP
[11]: http://en.wikipedia.org/wiki/MAMP
[12]: https://www.mamp.info/en/
[13]: http://www.wampserver.com/en/
[14]: http://www.youtube.com/results?search_query=mamp
[15]: http://www.youtube.com/results?search_query=wamp
[16]: http://www.youtube.com/results?search_query=lamp+linux
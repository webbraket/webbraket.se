# MySQL

Dags att snacka databaser! Vad vore väl en interaktiv applikation om vi inte kunde spara någon information? Vad vore en webbshop om vi inte kunde ta emot ordrar, eller lagra produkter. Vad vore webben utan data?

Som du kanske märkt så är det en del grundidéer och -idiom som konstant återkommer. En av dessa mycket, mycket viktiga idiom är den tidigare diskuterade --- [separation of concerns][0]. Även gällande databaser kan vi börja diskutera "separation of concerns". Idéen om databaser bygger ju nämligen på att en applikation och den data en applikation använder, inte är samma sak. Sjävklart egentligen. Men bara för att något är självklart betyder det inte att det alltid har varit enkelt.

Låt oss tänka på det. Data och applikationer är inte samma sak. Eller kanske kan vi uttrycka oss i termer av att data och processer inte är samma sak. Om vi ser applikationer som formaliserade processer. Steg för steg. Så är alltså inte data och processer inte samma sak. Jag tror inte vi behöver understryka detta mera utan förhoppningsvis finner du det förhållandevis naturligt.

För att en data ska vara agnostisk ifrån sin applikation så krävs det dels att vi (1) har någon form av formaliserad standard för hur data ska lagras. Eftersom datat någonstans måste skrivas till disk eller minne så behöver vi ett strukturerat format att spara det i. Sedan behöver vi förstås även (2) ett sätt att interagera med denna data, eller snarare denna databas. Detta är vad vi vanligtvis benämner som en [DBMS (Database Management System)][1].

I fallet som vi kommer arbeta med, så är vår DBMS [MySQL][2] och vår databas är en [relationsdatabas][3]. Språket vi använder för att kommunicera med DBMS:en är [SQL (Structured Query Language)][4].

Det finns egentligen ingenting som säger att språket vi använder för att kommunicera med en viss DBMS måste vara ett annat än det vi skriver vår applikation i. Visst, med språket `sql` så kan vi ju omöjligen skriva ett helt program. Eftersom språket just är ett språk designat för att ställa frågor till en relationsdatabas. Men däremot finns det många DBMS:ar som går att interagera med i samma språk som de är tänkta att användas i.

[0]: http://en.wikipedia.org/wiki/Separation_of_concerns
[1]: http://en.wikipedia.org/wiki/Database
[2]: http://en.wikipedia.org/wiki/MySQL
[3]: http://en.wikipedia.org/wiki/Relational_database_management_system
[4]: http://en.wikipedia.org/wiki/SQL

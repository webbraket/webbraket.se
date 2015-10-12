## MySQL PHP API

Nu är det dags att knyta ihop säcken lite och diskutera hur vi kan använda `php` för att arbeta emot en `mysql`-databas. Vi ska alltså prata om det [API][0] som `php` erbjuder för att intergagera med `MySQL`.

Om det inte redan är självklart varför vi skulle vilja göra detta --- låt oss iterera. Om vi ifrån vår `php`-applikation kan koppla till en `mysql`-databas så innebär detta att vi kan spara och förändra data i databasen. Självklart är detta essentiellt! Helt plötsligt har vi möjlighet att t.ex. skapa användarkonton. Genom att lagra e-post-adresser tillsammans med lösenord. Och när användare sedan ska logga in så jämför vi bara de uppgifter vi får ifrån användaren med de som finns i databasen. Om uppgifterna stämmer med någon användare så kan vi logga in personen. Men du har som sagt säkert redan förstått varför detta är viktigt, så låt oss övergå till hur vi ifrån `php` kan använda oss utav `mysql`.

### Välja API

Efter några sökningar på nätet kommer du att märka att när vi letar resurser relaterade till det `API` som `php` erbjuder oss för att interagera med `mysql` --- så hittar vi inte bara en syntax. Istället hittar vi minst tre. Är vi riktigt noga så hittar vi fyra. För att undvika förvirring när du sedan letar information på egen hand så ska vi först bara bena ut vad alla dessa olika syntaxer är och handlar om.

Först fanns ett API som hette [mysql][1]. Detta finns och fungerar fortfarande. Men [med php 5.0.0][2] så kom ett nytt `api` vid namn [mysqli][3]. I essens så är detta helt enkelt en uppdaterad version av `mysql` och det extra "i":et på slutet står för "improved". Således finns det idag egentligen ingen anledning att använda det gamla `mysql`-api:et när det finns ett nyare. När du surfar omkring i nätdjungeln så kan du lätt avgöra om en metod tillhör det gamla eller det nya api:et genom att helt enkelt läsa namnet på metoden. Alla de gamla metoderna innehåller termen `mysql`, medan alla de nya innehåller `mysqli`. Lätt som en plätt! Vi kommer således endast att fokusera på det nyare `mysqli`.

Men vi nämnde ju att det fanns tre, och t.o.m. fyra olika API:er. Låt oss förklara. Kanske kommer du ihåg ifrån `php`-kapitlet att vi diskuterade hur `php` inte var objektorienterat ifrån början? Men hur det successivt håller på att utvecklas till att stödja mer och mer objektorienterad syntax. Så är det iallafall. Och det speglar även av sig här.

Det äldre api:et, alltså `mysql`, är helt procedurellt, och stödjer ingen objektorienterad syntax. Det nyare `mysqli` stödjer däremot två olika syntaxer. Först en procedurell syntax (som påminner otroligt mycket om det gamla api:et). Men sedan stödjer det även en objektorienterad syntax.

Eftersom vi på htmlhunden subjektivt tror på objektorientering skulle vi vilja slå ett starkt slag för att du redan ifrån början vänjer dig vid att använda den objektorienterade syntaxen. Men vi kommer att redogöra för båda två i detta kapitel.

Men vad hände med den fjärde syntaxen då? Jo, det finns ett sätt till. Med `php 5` så introducerades även någonging som heter [PDO (PHP Data Objects)][4] som i essens är ett abstraktionslager emellan databasen och applikationskoden. För att hålla det så enkelt som möjligt så kommer vi inte att kika någonting på `PDO` i detta kapitel, men däremot kommer vi att titta lite på att bygga vårt eget abstraktionslager för en databas, i ett kommande kapitel :)

### Ansluta till databasen

Innan vi kan börja ställa frågor till databasen behöver vi ansluta till den. Detta skulle kunna jämföras med att logga in till en host genom [phpMyAdmin][5], [MySQL Workbench][6], genom en terminal (eller någon annan mysql klient). Men när vi kopplar upp till `mysql` via `php` så väljer vi även databasschema. Vilket kan jämföras med att köra `sql`-kommandot `USE name_of_db;`, eller att helt enkelt välja en databas/ett schema i något av de tidigare nämnda grafiska klienterna.

Så, låt oss se till ett faktiskt exempel. Viktigt att notera är alltså att vi i båda lagrar resultatet av evalueringen i en variabel. Vi får alltså tillbaka en instans av `mysqli`. Som alltså motsvarar en uppkoppling till vår databas. Läs mer om att sätta upp en koppling [i manualen][7].

Öppna koppling till mysql-databas.

OOP syntax.
    
    $mysqli = new mysqli('host', 'user', 'password', 'database');

Procedurell syntax.
    
    $mysqli = mysqli_connect('host', 'user', 'password', 'database');

Låt oss även snabbt se till hur vi skulle kunna hantera eventuella fel som kan uppstå när vi försöker koppla upp oss till databasen. Om vi t.ex. råkat ange fel lösenord, eller inte har läsrättigheter till den databas vi försöker koppla till med den användaren vi angett, eller om datbasen helt enkelt inte existerar (o.s.v.).

Felhantering vid öppning av koppling till mysql-databas.

OOP syntax.
    
    $error = $mysqli->connect_error;
    if ($error) {
      $code  = $mysqli->connect_errno;
      die("Error: ($code) $error");
    }

Procedurell syntax.
    
    $error = mysqli_connect_error();
    if ($error) {
      $code  = mysqli_connect_errno();
      die("Error: ($code) $error");
    }

Notera i ovan exempel att vi alltid har tillgång till både själva felmeddelandet som sträng ([conect\_error][8]), men även dess felkod ([connect\_errno][9]).

Notera också att den jämförelse vi gör för att upptäcka om ett fel har inträffat eller inte sker genom att vi helt enkelt slänger in den sträng som potentiellt innehåller ett felmeddelande. Om vi läser [dokumentationen för metoden][8] så ser vi att den returnerar `null` om inget fel har inträffat och en sträng innehållandes ett felmeddelande om ett fel har inträffat. Detta är en av styrkorna med dynamiska språk. Vi kan returnera helt olika saker utan att i förväg bestämma oss. Men det finns en anledning till att detta fungerar --- nämligen att jämförelsen `(null == true)` evaluerar till `false` i `php`. En sträng däremot, evaluerar till `true` så länge den inte är tom eller endast innehåller en nolla (`0`). Vi behöver alltså inte ens uttrycka vårt boolska uttryck som `($error != null)`. Återigen, eftersom `null` i sig evaluerar till `false`. Och eftersom om vi har fått ett fel så kommer vi ha fått en sträng, och alla strängar utom tom sträng och noll evaluerar till `true`. Du kan [läsa mer om vilka värden som ger `true` och vilka som ger `false` här][10].

### Exekvera en query

När vi väl har en koppling uppe kan vi använda vår variabel som innehåller kopplingen (i.e. `mysqli`-objektet) för att köra queries emot databasen. Oavsett vi vill skriva en query som ska skapa en tabell, lägga in en ny rad, uppdatera en existerande, förändra en kolumn eller någonting helt annat --- så kan vi använda samma metod. Nämligen `mysqli->query($sql)`. Låt oss se till ett par exempel.

Köra queries emot en existerande databaskoppling.

OOP syntax.
    
    $result = $mysqli->query("SELECT *  FROM posts");
     
    if ($result) {
      echo "Number of rows: " . $result->num_rows;
    }

Procedurell syntax.
    
    $result = $mysqli->query("SELECT * FROM posts")
     
    if ($result) {
      echo "Number of rows: " . mysqli_num_rows($result);
    }

Det mest intressanta med denna `php`-metod är att den returnerar olika typer av saker beroende på vad vi kör för query. [Detta denoteras genom returtypen `mixed` i dokumentationen][11]. Om vi t.ex. skulle köra en `INSERT INTO` får vi en bool tillbaka som innehåller `true` om query:n lyckades och `false` om den ej gjorde det. Faktum är att vi i alla fall får tillbaka en bool som säger `false` om en query misslyckas p.g.a. t.ex. fel syntax eller en icke-existerande kolumn.

Om vi däremot t.ex. skulle köra query:n `SELECT * FROM users`. Så får vi tillbaka ett objekt av typen `mysqli_result`. Så länge vår query är en valid query får vi den typen av resultat tillbaka. Även om det skulle vara så att den inte hittade några rader alls. I ovan kodexempel är det just den typen av ett objekt vi får tillbaka, och det är således därför vi kan fråga objektet om dess antal rader.

### Läsa resultatet

Om du skrivit och exekverat en query som returnerar ett `mysqli_result` så kan du inte direkt enumerera över datan. Det finns två enkla sätt. Antingen så använder du en `while`-loop och snurrar över varje rad i resultatset:et en för en. Detta gör du med hjälp av metoden [$result-\>fetch\_row()][12] eller [$result-\>fetch\_assoc()][13]. Eller så hämtar du helt enkelt alla rader på en gång så att du kan lagra resultatet i en array. Detta gör du genom [$result-\>fetch\_all()][14]. Det senare kan ju förstås vara smidigt om du inte vill använda resultatet på en gång utan snarare skicka det vidare. Låt oss se till ett par användningsexempel. Vi börjar med att iterera och hämta rad för rad.

Iterera över data ifrån ett resultat-set och hämta varje rad som en numrerad array.

OOP syntax.
    
    // Iterates over each row (into $row) as a numeric array
    while($row = $result->fetch_row()){
      var_dump($row);
    }
     
    // But we could also iterate over each row as an associative array
    while($row = $result->fetch_assoc()){
      var_dump($row);
    }

Procedurell syntax.
    
    // Iterates over each row (into $row) as a numeric array
    while($row = mysqli_fetch_row($result)){
      var_dump($row);
    }
     
    // But we could also iterate over each row as an associative array
    while($row = mysqli_fetch_assoc($result)){
      var_dump($row);
    }

I de fall där vi hämtar varje rad som en associativ array så innebär det att varje rads nycklar motsvarar namnet på databasens kolumner. I de numeriska fallen så når vi helt enkelt argumenten i samma ordning som de är definierade i datbasen.

Men som sagt, vi kan ju, som tidigare nämnt, även hämta alla rader på en gång och slänga in de i en array. Vilket ju kan vara smidigt om vi inte vill iterera över resultatet än. Detta kan vi göra genom att använda oss av [$result-fetch\_all()][14]. Denna metod tar även ytterligare en valfri parameter. Denna parameter ska vara en konstant som berättar om vi vill ha resultatet som en numrerad array (`MYSQLI_NUM`), eller en associativ array (`MYSQLI_ASSOC`). Om inget värde anges så är "default" numerisk. Låt oss kika på några exempel.

Hämta data ifrån ett resultat-set som array direkt.

OOP syntax.
    
    // As numbered array
    $arr = $result->fetch_all();
     
    // Or as an associative array
    $arr = $result->fetch_all(MYSQLI_ASSOC);

Procedurell syntax.
    
    // As numbered array
    $arr = mysqli_fetch_all($result);
     
    // Or as an associative array
    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);



[0]: http://en.wikipedia.org/wiki/Application_programming_interface
[1]: http://www.php.net/manual/en/book.mysql.php
[2]: http://www.w3schools.com/php/php_ref_mysqli.asp
[3]: http://www.php.net/manual/en/book.mysqli.php
[4]: http://en.wikipedia.org/wiki/PHP_Data_Objects
[5]: http://en.wikipedia.org/wiki/PhpMyAdmin
[6]: http://en.wikipedia.org/wiki/MySQL_Workbench
[7]: http://www.php.net/manual/en/mysqli.construct.php
[8]: http://www.php.net/manual/en/mysqli.connect-error.php
[9]: http://www.php.net/manual/en/mysqli.connect-errno.php
[10]: http://us3.php.net/manual/en/types.comparisons.php
[11]: http://se1.php.net/mysqli_query
[12]: http://www.php.net/manual/en/mysqli-result.fetch-row.php
[13]: http://www.php.net/manual/en/mysqli-result.fetch-assoc.php
[14]: http://www.php.net/manual/en/mysqli-result.fetch-all.php

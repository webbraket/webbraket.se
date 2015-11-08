## Refaktorera PHP

Uttrycket [responding to change][0], har blivit mycket viktigt inom mjuvaruutveckling. I essens belyser det idéen om att världen runtomkring oss (kunder, teknik, krav, etc.) förändras så snabbt att vi alltid måste vara beredda att förändra våra applikationer. Därför är det alltså viktigt att vi skriver kod som är hanterbar. Vi måste kontrollera vår kod och inte låta vår kod kontrollera oss. I detta kapitel ska vi alltså prata om lite olika strategier för att öka nivån av struktur i våra `php`-applikationer. Med andra ord ska vi prata om [refaktorering][1]. Alltså hur vi kan uttrycka samma sak på "bättre" sätt.

### Inkludera filer

De flesta _server-side_-språk har ett sätt att inkludera innehållet av en fil i en annan. Detta är ett ypperligt sätt att undvika duplicering av kod. Föreställ dig att vi bygger en blogg. Vi har (t.ex.) en sida som listar alla inlägg, och vi har en sida per specifikt inlägg. Båda dessa sidor behöver göra _queries_ till databasen och således behöver alltså båda sidorna sätta upp en databaskoppling. De två frågorna vi vill ställa databasen är olika, men just själva uppsättandet av databaskopplingen kommer vara exakt likadan.

Duplicerad kod kan alltid tolkas som en varningssignal för att vi antagligen behöver refaktorera och generalisera. Låt oss kort reflektera över varför duplicerad kod är så farligt. Föreställ dig igen ovan nämnt bloggexempel. Anta att vi sätter upp databaskopplingen först i varenda fil som behöver komma åt databasen. Säg omkring 25 filer. Om vi nu av någon anledning t.ex. behöver byta namn på databasen. Då behöver vi ändra databaskopplingen i alla dessa 25 filer. Trivialt kan tyckas. Men anta att det är 125 filer. Eller 1025 filer. Anta att vi bara ändrar i 24 filer och glömmer en. Anta att vi glömmer att kolla att just den sidan fungerar. Då har vi helt plötsligt "haft sönder" vår applikation utan att ens veta om det. Duplicerad kod är farlig kod. [Duplicerad kod luktar illa][2].

Låt oss återgå till idéen om att inkludera innehållet av en fil i en annan fil. Konceptet kan egentligen liknas vid att bryta ut ett gäng rader kod till en metod. När vi märker att vi har duplicerat kod så bryter vi ut den duplicerade koden till en metod och anropar istället metoden på de båda ställena. Om vi i `php` märker att vi har duplicerat kod emellan två filer, så bryter vi ut den duplicerade koden till en separat fil och inkluderar istället den filen i de andra två. Låt oss se till ett exempel.

Exempel på hur vi skulle kunna använda `include` i `php`.

Anta att vi har byggt en blogg. Anta att vi har två sidor. Där den ena listar alla inlägg och den visar ett specifikt inlägg. Så i filen som listar alla inlägg har vi någonting i stil med nedan:

```php
    /* list_all_posts.php */

    $link   = mysqli_connect("host","user","pwd","db") or die("Error " . mysqli_error($link));
    $query  = "SELECT * FROM posts";
    $result = $link->query($query) or die("Query error: " . mysqli_error($link));
    ...
```

Och i filen som visar ett specifikt inlägg har vi någonting typ nedan:

```php
    /* show_single_post.php */

    $link   = mysqli_connect("host","user","pwd","db") or die("Error " . mysqli_error($link));
    $query  = "SELECT * FROM posts WHERE id='.$post_id.'";
    $result = $link->query($query) or die("Query error: " . mysqli_error($link));
    ...
```

Jämför de två kodexemplena med varandra en stund. Uppenbart har vi en hel del duplikation. Låt oss naivt flytta över själva databaskopplingen.

```php
    /* db_connect.php */
    $link   = mysqli_connect("host","user","pwd","db") or die("Error " . mysqli_error($link));

    /* list_all_posts.php */

    include 'db_connect.php';
    $query  = "SELECT * FROM posts";
    $result = $link->query($query) or die("Query error: " . mysqli_error($link));

    /* show_single_post.php */

    include 'db_connect.php';
    $query  = "SELECT * FROM posts WHERE id='.$post_id.'";
    $result = $link->query($query) or die("Query error: " . mysqli_error($link));
```

Lite bättre. Men om vi kombinerar inkluderingsstrategin tillsammans med att bryta ut metoder kan vi förstås göra det ännu bättre.

```php
    /* db_functions.php */

    function db_connect(){
      $link = mysqli_connect("host","user","pwd","db") or die("Error " . mysqli_error($link));
      return $link;
    }

    function db_query($query){
      $link = db_connect();
      return $link->query($query) or die("Query error: " . mysqli_error($link));
    }

    /* list_all_posts.php */

    include 'db_connect.php';
    $result = db_query("SELECT * FROM posts");

    /* show_single_post.php */

    include 'db_connect.php';
    $result = db_query("SELECT * FROM posts WHERE id='.$post_id.'");
```

Mycket bättre :) Poängen här är alltså att vi har generaliserat och brytit ut vanligt förekommande kod till metoder.

Om vi även skulle introducera objektorienterad programmering så skulle vi kunna snygga upp kod ännu ytterligare. Då skulle vi kunna låta `db_connect`-filen innehålla en klass istället för ett gäng globalt exponerade funktioner. Låt oss kika på ett exempel på hur vi skulle kunna gå tillväga:

```php
    /* db.php */

    class Database{
      function __construct(){
        $this->db = mysqli_connect("host","user","pwd","db");
        if ($this->db->connect_error) {
          $code  = $mysqli->connect_errno;
          die("Error: ($code) $this->conncetion->connect_error");
        }
      }

      public function query($sql){
        return $this->db->query($sql)
          or die("Query error: " . $this->db->error;
      }
    }

    /* list_all_posts.php */

    include 'db.php';
    $db = new Database();
    $result = $db->query("SELECT * FROM posts");

    /* show_single_post.php */

    include 'db.php';
    $db = new Database();
    $result = $db->query("SELECT * FROM posts WHERE id='.$post_id.'");
```

I detta sista exempel får vi även en "win" genom att det nu blir omöjligt att exekvera den metod vi skrivit som kör queries emot databasen, utan att vi först upprättat en koppling till databasen. Hur? Jo eftersom vår `query`-metod nu är en instansmetod på `Database`-objektet. Och eftersom klassens konstruktor upprättar en koppling till databasen, och eftersom det är omöjligt att instantiera objektet utan att konstruktorn körs så kan vi helt enkelt vara säkra på att det redan finns en databaskoppling när vi anropar `query`-metoden.

Så här kan vi fortsätta och fortsätta. Vi kan nästan alltid refaktorera vidare kod. Det är t.ex. lite lustigt att vi har hårdkodat databasens "användaruppgifter" direkt i databasklassens konstruktur. Försök alltid att hitta nackdelar med din egen kod, och sök efter refaktoreringar så kommer du med tiden skriva bättre och bättre kod. Och om du är mer intresserad så kan du läsa böcker om refaktorering såsom t.ex. [Refactoring &mdash; av Martin Fowler][3].

Det kan tyckas konstigt att ovan exempel skulle vara någonting smart. Vi gick ifrån mindre kod och färre filer till mer kod och fler filer. Men faktum är att _rader kod_ är ett mycket dåligt mått på en kodbas komplexitet. Eller som Bill Gates uttryckte det &mdash; ["Measuring software productivity by lines of code is like measuring progress on an airplane by how much it weighs"][4].

Låt oss istället, i relation till ovan exempel, kontemplera hur redo vi är på att reagera på inkommande förändringskrav. Om vi nu t.ex. skulle vilja döpa om databasen behöver vi bara göra det på en plats, oavsett hur många filer vi har som kopplar till databasen. Om vi skulle vilja förändra felhanteringen om en query misslyckas behöver vi bara göra det på ett ställe. Eller felhanteringen för om själva databaskopplingen misslyckas.

Om vi skulle hamna i en situation då vi skulle vilja byta databas, till någonting annat än `mysql` så är vi _mer_ beredda än tidigare &mdash; men vi har fortfarande en lång väg att gå. För att hantera den typen av scenarion måste vi gå längre. Ett mycket vanligt tillvägagångssätt är att skriva egna eller använda sig av befintliga ORM:er ([Object Relational Mapping][5]). En ORM är helt enkelt kod som skapar ett abstraktionslager emellan databasen och vår kod. Så när vi vill ställa frågor (queries) till databasen gör vi det helt i vårt programspråk och aldrig i vårt databasspråk. Det betyder att om vi i framtiden vill byta databas, behöver vi bara förändra vår ORM och inte all vår applikationskod.

#### Inkludera filer med `include`

Det finns olika sätt att inkludera filer med `php`. I ovan exempel använde vi oss utav `include`. Låt oss repetera syntaxen.

Att inkludera en annan fil med `include`

```php
    include 'some_file.php';

    // Or using a variable..

    $filename = 'another_file.php';
    include $filename;
```

Om den fil vi försöker inkludera av någon anledning inte går att hitta, kommer `php` att spotta ur sig en `warning` såsom nedan.

    Warning: include(non_existent_file.php): failed to open stream: No such file or directory in /www/syntax.php on line 5
    Warning: include(): Failed opening 'non_existent_file.php' for inclusion (include_path='.:') in /www/syntax.php on line 5

Det viktiga att förstå är att en varning **inte** avbryter exekveringen. Med andra ord &mdash; om en fil inte hittas kommer först en varning att spottas ut på sidan med sedan kommer resten av filen ändå exekveras precis som vanligt. Detta betyder att just konstruktionen `include` faktiskt [inte lämpar sig för applikationskritiska inkluderingar][6]. Såsom databaskopplingen ovan, eller autentisering av användare. Låt oss nu diskutera några andra alternativ...

#### Inkludera filer med `require`

Ett annat alternativ vi kan använda för att inkludera filer är konsturktionen `require`. Till skillnad ifrån `include` så orsakar inte denna metod en `warning` om det skulle vara så att den inte lyckas ladda en fil. Istället orsakar den ett `fatal error`. Detta avbryter exekveringen. Alltså kommer ingen kod efter den misslyckade `require`:en att köras.

Således är `require` ett bättre sätt att inkludera applikationskritiska filer, än `include`. Föreställ dig t.ex. att alla sidor som kräver inloggning inkluderar en fil som heter `authorize.php`. I det fallet förlitar vi oss på att autentiseringsfilen omdirigerar användaren bort ifrån sidan den försöker komma åt. Anta att vi skulle använda `include` för att inkludera filen `authorize.php`. Om det av någon anledning skulle vara så att `php` inte lyckas få tag på filen så skulle vår sida som kräver inloggning inte längre vara skyddad. Eftersom exekveringen fortsätter trots att vi inte lyckats hämta filen som ska autentisera användaren.

Syntaxmässigt så används `require` på samma sätt som `include`. Alltså:

Att inkludera en annan fil med `require`

```php
    require 'some_file.php';

    // Or using a variable..

    $filename = 'another_file.php';
    require $filename;

    Warning: require(non_existent_file.php): failed to open stream: No such file or directory in /www/syntax.php on line 5
    Fatal error: require(): Failed opening required 'non_existent_file.php' (include_path='.:') in /www/syntax.php on line 5
```

#### Inkludera filer med `require_once`

Det sista alternativet för att inkludera filer i filer som vi ska kika på är `require_once`. Denna konstruktion beteer sig egentligen precis som sin syster `require`. Den viktiga skillnaden är dock att `require_once` håller koll på om en fil tidigare har laddats in. Med andra ord laddas en fil endast in en gång när vi använder `require_once`. Ett exempel gör det rimligen tydligare.

Exempel på skillnaden emellan `require` och `require_once`.

Anta att vi har följande fil.

```php
    /* hello.php */
    echo 'hello ';
```

Låt oss använda en `for`-loop för att inkludera samma fil tre gånger. Om vi använder oss av `require` eller `include` får vi följande resultat:

```php
    for($i=0; $i < 3; $i++){
        require('hello.php');
    }
```

Resultat

<figure>
hello hello hello
</figure>

Men om vi kör samma `for`-loop men istället använder oss av `require_once` så får vi följande resultat:

```php
    for($i=0; $i < 3; $i++){
        require_once('hello.php');
    }
```

Resultat

<figure>
hello
</figure>

### Strategier för att bädda in `html`

Eftersom vi pratar om att använda `php` till att skapa webbsidor så behöver vi förstås blanda `html` och `php`. Något vi tidigare diskuterat är idéen om [separera presentation och content][7]. Då i relation till ansvarsskillnader mellan `html` och `css`. Ett annat vanligt idiom inom programmering är [separation of concerns][8]. Det är en mer generell idé än den om just behovet av att separera presentation ifrån content. När vi nu använder ett kraftfullare skriptspråk, såsom `php`, kommer vi plötsligt ha en mängd nya "concerns". T.ex. [Business logic][9] (affärslogik) och databaslogik. Om vi ska respektera idéen om att separera concerns så behöver vi alltså hitta strategier för att separera t.ex. affärslogik ifrån presentation.

Låt oss först prata om varför det är viktigt att separera olika "concerns". Kom ihåg tidigare diskussion om att vi behöver sikta på en hög nivå av beredskap inför förändring. Vår applikation behöver vara lätt att förändra. Så när (ps: vi väljer medvetet ordet _när_ och inte _om_) vi väl behöver utföra en förändring löper vi inte risken att behöva koda om hela systemet ifrån grunden. Föreställ dig t.ex. att vi utvecklar en webbshop. Anta att vi har listat shoppens produkterna på listform. Anta nu att vi får in ett nytt krav på att även kunna presentera produkterna som ett rutnät. Jahapp tänker vi, och börjar kika på koden. Om vår databaskod då är beblandad med vår presentationskod så kommer förändringen bli mycket dyrare än om de är ordentligt separerade.

Utan att gräva ned oss i det här för mycket så kan vi säga att det finns en uppsjö av [design patterns][10] &mdash; alltså dokumenterade kodstruktureringsstrategier &mdash; som syftar just till att angripa denna typ av problem. Men det får vi diskutera på djupet en annan gång. Vad vi vill belysa i detta kapitel är hur det går att identifiera två vanliga strategier utvecklare använder för att "blanda" `html` och `php`. Antingen så...

* skriver vi `php` och `echo`:ar `html`,
* eller så skriver vi `html` och lägger in små block av `php`

Exempel på de två huvudsakliga strategierna för att blanda `php` och `html`.

Om vi hela tiden `echo`/`print`:ar ut `html` blir det lätt att få sig en uppfattning om det "logiska" flödet i programmet, men mycket svårt med det visuella. Vid första anblick skulle vi argumentera att det inte är solklart vad nedan program gör.

```php
    <?php
      $name   = "John";
      $number = "070 123 45 67";
      echo "<h1>Hello, $name ($number).</h1>";
      echo "<ul>";
      for($i=0; $i
```

Resultat

<figure>
<p>Hello, John (070 123 45 67)</p>
<p>Missed call (1).</p>
<p>Missed call (2).</p>
<p>Missed call (3).</p>
</figure>

Således är det ofta bättre att försöka hålla de filer som arbetar med `html` fokuserade på just det &mdash; `html`. Och istället se det som att `php` kommer in i små korta svängar &mdash; antingen för att kontrollera programflödet eller hålla variabel data. Låt oss se hur det skulle kunna se ut.

```php
    <?
      $name   = "John";
      $number = "070 123 45 67";
    ?>

    <p>Hello, <?=$name?> (<?=$number?>)</p>

    <? for($i=0; $i
```

Denna andra strategi har den mycket positiva effekten att vi även kan indentera vår `html`. Och vi skulle argumentera för att just denna indentering verkligen hjälper till att öka kodens läsbarhet.

#### Kolon-varianter

Som du kanske märkte använde vi i ovan en alternativ syntax för konstruktionen `for`. Låt oss kalla dessa för "kolon-varianter". Det finns några grundläggande konstruktioner i `php` som har just sådana här kolon-motsvarigheter. Varför de som skapade språket valt att implementera dessa kan vi inte svara på &mdash; men det kan vara rimligt att anta att även de insåg att det snabbt blir problematiskt när vi försöker blanda `php` och något annat språk.

Med hjälp av dessa kolon-varianter kan vi istället skriva våra dokument som om de var skrivna i just det språket vi vill nå som output. I vårat fall alltså `html`. Sedan kan vi strategiskt placera ett antal `php`-kommandon som kontrollerar applikationsflödet. Låt oss se till några exempel på konstruktioner som har kolon-motsvarigheter.

<table>
  <tr>
    <th>Konstruktion</th>
    <th>Kolon-motsvarighet</th>
  </tr>
  <tr>
    <td>
      <pre class="language-php">
        <code>
for(..){
  ..
}
        </code>
      </pre>
    </td>
    <td>
      <pre class="language-php">
        <code>
for(..):
  ..
endfor;
        </code>
    </td>
  </tr>

  <tr>
    <td>
      <pre class="language-php">
        <code>
foreach(..){
  ..
}
        </code>
      </pre>
    </td>
    <td>
      <pre class="language-php">
        <code>
foreach(..):
  ..
endforeach;
        </code>
      </pre>
    </td>
  </tr>

  <tr>
    <td>
      <pre class="language-php">
        <code>
while(..){
  ..
}
        </code>
      </pre>
    </td>
    <td>
      <pre class="language-php">
        <code>
while(..):
  ..
endwhile;
        </code>
      </pre>
    </td>
  </tr>

  <tr>
    <td>
      <pre class="language-php">
        <code>
if(..){
  ..
}else if(..){
  ..
}else{
  ..
}
        </code>
      </pre>
    </td>
    <td>
      <pre class="language-php">
        <code>
if(..):
  ..
elseif(..):
  ..
else:
  ..
endif;
        </code>
      </pre>
    </td>
  </tr>

</table>





Dessa "kolon-motsvarigheter" är alltså mycket användbara när vi vill blanda `html` och `php` eftersom vi kan "bryta upp" våra `php`-block. Beakta följande exempel.

Exempel på varför vi behöver kolon-motsvarigheterna i `php`

Om vi vill "bryta" ett php-block efter en kontrollstruktur såsom t.ex. `if` kan vi absolut göra det så här...

```php
    <? if(someCondition){ ?>
      <p>Then display this text</p>
    <? } ?>
```

Men det är förstås inte lika tydligt som att använda kolon-motsvarigheterna så här...

```php
    <? if(someCondition): ?>
      <p>Then display this text</p>
    <? endif; ?>
```

Fundera t.ex. över hur förvirrande det skulle vara att försöka avgöra vilken "stängande måsvinge" som hör till vilken "öppnande" när vi börjar hantera komplexare fall såsom det nedan...

```php
    <!-- TODO: This example is probably broken -->
    <? if(someCondition){ ?>
      <p>Then display
      <? for($i=0; $i<10; $i++){="" ?>="" this="" <?="" if($i%2="=0){" text<="" p>="" }="" for($i="0;" $i<10;="" many="" times="" ?><="" code="">
```

Nu säger vi förstås inte att alla måste prioritera att använda "kolon-versionerna". Inte heller säger vi att det i alla fallet är det bästa sättet att designa sina `php`-filer. Men om du inte har en annan medveten strategi du tror på, så skulle vi rösta för att du följer ovan.

### Design patterns

Det finns som sagt en uppsjö av design patterns som hjälper oss att strukturera kod på sätt som gör att vi kan öka nivån av kontroll över vår kod. Ett mycket vanligt design pattern för webben idag är [MVC (Model View Controller)][11]. Det finns även en uppsjö av variationer av det pattern:et som generellt brukar refereras till som MV\* (e.g. Model View Viewmodel, etc.).

Det är för tidigt att gräva in oss i design patterns nu. Men för att du ska ha något att luta dig på när du designar dina applikationer skulle vi vilja föreslå följande strategi:

Se till att de sidor som agerar "entry-points" (i.e. den fil som du pekar webbläsaren till) är så absolut enkla som möjligt. Låt de filerna istället inkludera andra filer. Och delegera komplext arbete till de inkluderade filerna. Säg att du t.ex. har fått en mängd data, som motsvarar en blogpost, och ska spara den i en databas. Istället för att processa och spara datat direkt i "entry-point"-filen &mdash; inkludera en annan fil som du t.ex. kallar `process_post.php`. Låt den filen deklarera en metod som t.ex. heter `process_post($post_data)`. Om den metoden istället utför allt det komplexa processnings, och sparningsarbetet så kommer "entry-point"-filen helt enkelt bara behöva anropa den metoden med relevant data som argument. Detta är alltså samma strategi som vi använde för att illustrera `include` i första exemplet i detta kapitel.

Om du vill ha ännu mer struktur men ändå inte är redo för komplexare patterns, skulle vi rekommendera att du kikar lite på [Front Controller Pattern][12].

[0]: http://agilemanifesto.org/
[1]: http://en.wikipedia.org/wiki/Code_refactoring
[2]: http://en.wikipedia.org/wiki/Code_smell
[3]: http://martinfowler.com/books/refactoring.html
[4]: http://c2.com/cgi/wiki?LinesOfCode
[5]: http://en.wikipedia.org/wiki/Object-relational_mapping
[6]: http://stackoverflow.com/questions/3633900/difference-between-include-and-require-in-php
[7]: http://en.wikipedia.org/wiki/Separation_of_presentation_and_content
[8]: http://en.wikipedia.org/wiki/Separation_of_concerns
[9]: http://en.wikipedia.org/wiki/Business_logic
[10]: http://en.wikipedia.org/wiki/Software_design_pattern
[11]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[12]: http://www.phptherightway.com/pages/Design-Patterns.html

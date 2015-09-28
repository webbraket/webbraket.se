## PHP Syntax

`PHP` är ett av de där språken som de flesta kan känna igen sig lite i. Nästan oavsett vilket/vilka språk du kommer ifrån innan. Eftersom vi förväntar oss att du redan har en viss grundläggande kunskap om objektorienterad programmering så kommer vi alltså i huvudsak fokusera på syntax och [språkkonstruktorer][0]. Vi kommer således inte gå in på djupet och diskutera varför. Poängen med detta kapitel är att ge dig tillräckligt mycket kunskap för att kunna läsa identifiera olika delar av ett program skrivet i `PHP`.

### Echo

För att skriva ut information till användaren genom att använda någon av de två [language constructs][1]:en `echo` eller `print`. [Skillnaderna mellan dessa är subtila][2], och vet du inte varför du väljer den ena över den andra var åtminstone konsistent i ditt användande.

Skriva till skärmen i php

    <?php
      echo "Hello worldizzle";
    ?>

Resultat

<figure>
Hello woldizzle
</figure>

Självklart kan vi ju inte bara ge `echo` strängar. Vi kan ge den vilket uttryck som helst som evaluerar till en sträng, eller implicit kan omvandlas till en sträng. Det senare är sant för nedan uyttryck:
    
    <?php
      echo 100 + 20 + 33;
      // Skriver ut 153
    ?>

`echo` tar alltså antingen ett literal-värde, ett uttryck eller en variabel.

### Blanda `html` och `php`

Eftersom vi använder `php` för att bygga webbsidor så är ju alltså målet att få våra `php`-filer att mata ut `html`. Detta betyder att vi behöver blanda de två språken. Detta är egentligen enkelt gjort eftersom `php` kräver att all `php`-kod måste skrivas inom taggarna `<?php` och `?>`. Detta betyder att allt som skrivs utanför dessa block, kommer att renderas som rå text, och kan således vara `html`. Låt oss se till ett exempel.

Blanda `php` och `html`

    Mixing 
    <b>
      <?php echo "languages"; ?>
    </b>

Resultat

<figure>
Mixing <b>languages</b>
</figure>

Vi kan förstås även vända på steken och låta `php` själv `echo`:a ut `html`. Som så:
    
    Mixing 
    <?php
      echo "<b>languages</b>";
    ?>

Det finns även en kortnotation som motsvarar notationen `<?php .. ?>`. Den notationen saknar ordet "php" och ser helt enkelt ut som så: `<? .. ?>`. Dock [avråder php-manualen ifrån att använda den korta syntaxen][3] då den är beronde av en konfigurationsinställning för att fungera. Närmare bestämt så måste [short\_open\_tag][4] vara påslaget i konfigurationsfilen [php.ini][5].

Notera att vi i denna guide ibland använder kortnotationen för att spara plats. Och i många exempel skriver vi inte ens ut start och sluttaggarna för `php` --- återigen, för att spara plats.

Om du har en fil som _uteslutande_ innehåller `php`, så är det helt ok att öppna med `<?php` i början av filen och sedan strunta att stänga den längst ned. Konstigt nog så är inte det bara någonting som är ok men [även någonting som rekommenderas av manualen][3].

Men, för att sammanfatta så behöver du alltså komma ihåg att all `php`-kod måste skrivas inom `php`-taggarna. Alltså emellan `<?php` och `?>`.

### Variabler

Låt oss nu istället prata om variabler. En variabel deklareras i `php` genom att placera ett dollartecken (`$`) före ett ord. Ordet blir då vår identifierare för variabeln.
    
    $my_variable_name;

Ett par regler gäller när vi namnger våra variabler.

* Namnet måste börja med en bokstav eller underscore (`_`).
* Namnet kan _inte_ börja med en siffra.
* Namnet får endast innehålla alpha-numeriska tecken och underscrores. Alltså (`A-z`, `0-9`, och `_` ).
* Variabelnamn är skiftlägeskänsliga. `$hej` och `$Hej` är alltså två olika variabler.

Men nu har vi ju bara deklarerat en variabel. Vi har inte diskuterat hur man tilldelar till den. Som i de flesta språk tilldelar vi med hjälp av likhetstecknet (`=`). Och som i de flesta språk kan vi tilldela en varibel ett literal-värde, en annan variabel, eller evalueringen av ett uttryck. Alla nedan är alltså rimliga tilldelningar.

Deklarering och tilldelning av variabler i `php`

    // Assigning literals
    $age    = 22;
    $name   = "Snow"
     
    // Assigning variables
    $anos   = $age;
    $nombre = $name;
     
    // Assigning an evaluated expression
    $born   = $current_year - $age;

### Selektion

I `php` kan vi, precis som i de flesta andra språk, förändra ett programs exekveringsbana genom att konditionella selektioner. Låt oss börja med att kika på ett exempel på hur vi skriver en enkel `if-else`-selektion i `php`.

If-else i `php`

    if (3 > 5){
      echo "The world has gone mad!";
    }else{
      echo "Puh.. sanity remains..";
    }

Självklart kan vi ju som vanligt "kedja" hur många `else if`'s vi vill. Såsom nedan:

If-else i `php`

    if (timeOfDay() == "morning"){
      echo "Good morning.";
    }else if(timeOfDay() == "day"){
      echo "Good day.";
    }else if(timeOfDay == "evening"){
      echo "Good evening."
    }else{
      echo "Good night... sleep well."
    }
     
    // The above assumes we have a function called timeOfDay()
    // that returns the time of day as a nice string :)

Men eftersom `php` även stödjer `switch case`-satser så kan vi likväl använda en sådan om vi skulle vilja lösa ovan problem.

Switch case i `php`

    switch( timeOfDay() ){
      "morning":
        echo "Good morning.";
        break;
      "day":
        echo "Good day.";
        break;
      "evening":
        echo "Good evening."
        break;
      default:
        echo "Good night... sleep well."
    }

När vi använder `if-else` konstruktionen så behöver vi ju förstås göra jämförelser. En `if`-sats förväntar sig ett boolskt värde. Och eftersom alla värden kan ersättas med uttryck så kan vi ju (precis som i nästan alla programmeringsspråk) ge ett uttryck istället för ett värde. Detta uttryck skulle kunna vara en jämförelse emellan två ting. Och om vi ska göra jämförelser så behöver vi förstås som vanligt jämförelseoperatorer. Även i `php` hittar vi då de vanligaste jämförelseoperatorer.

| Operator        | Namn                 | Förklaring
|-----------------|----------------------|-----------
|`==`             |Equality              | Sant om $A och $B är exakt ekvivalenta.
|`===`            |Identical             | Sant om $A och $B är exakt ekvivalenta, och de är av samma datatyp. 
|`!=`             |Not                   | Sant om $A och $B inte är lika.
|`<>`             |                      | Som ovan.
|`!==`            |Not identical         | Sant om $A och $B inte är lika, eller om de inte är av samma datatyp.
|`<`              |Less than             | Sant om $A är lägre än $B.
|`>`              |Greater than          | Sant om $A är högre än $B.
|`<=`             |Less than or equal    | Sant om $A är lägre än eller lika låg som $B.
|`>=`             |Greater than or equal | Sant om $A är högre eller lika hög som än $B.

### Iteration

Ok, låt oss nu prata om iteration. Vi börjar med att kika på den gamla gode `while`-loopen. Ett smidigt alternativ om vi vill definera ett villkor, och sedan helt enkelt bara blint loopa tills villkoret uppfylls.

`while`-loop i `php`

    $x = 0;
    $y = 10;
     
    while($x < $y){
      echo $x . ", ";
      $x++;
    }

Result

<figure>
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
</figure>

Men om det hade varit det ovanstående problemet vi ville lösa så hade vi förstås lika väl kunnat använda en gammal hederlig `for`-loop.

`for`-loop i `php`

    for($i=0; $i

Result

<figure>
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
</figure>

Och när vi ändå talar om `for`-loopen, så har ju även `php` en implementation av den välanvända `foreach`-loopen. Anta att vi har en kollektion av något slag, och att vi sedan vill iterera över hela kollektionen. Låt oss kika på ett exempel där kollektionen består av en array.

`foreach`-loop i `php`

    $apples = ["red", "green", "blue"];
     
    foreach($apples as $a){
      echo $a . "<br>";
    }

Result

<figure>
red  
green  
blue
</figure>

Om du har använt en `foreach`-loop i något annat språk så märker du säkert att implementationen i `php` känns lite "baklänges". I de flesta språk är loopen konstruerad så att syntaxen säger: `foreach(item in collection)`. Men i `php` så säger syntaxen: `foreach(collection as item)`. Men håll tungan rätt i mun, och tänk baklänges så ska nog allt gå sin väg! :)

### Funktioner

Funktioner i `php` beter sig väldigt mycket som funktioner i de flesta andra stora språk. Du kan skriva funktioner som inte returnerar någonting eller funktioner som returnerar någonting. Om du kommer ifrån ett språk som `C#` eller `Java` så gäller det ju dock förstås att komma ihåg att `php` är ett dynamiskt språk. I `php` behöver vi alltså inte deklarera huruvida en funktion returnerar någonting eller ej. Inte heller behöver vi berätta vad den returnerar om den gör det. Låt oss se till några exempel.

Funktioner i `php`

    function add($x, $y){
      return $x + $y;
    }
     
    function show_points($person, $points){
      echo $person . " has " . $points . " points<br>";
    }
     
    $john = add(2, 5);
    $jane = add(10, 3);
     
    show_points("John", $john);
    show_points("Jane", $jane);

Result

<figure>
John has 7 points  
Jane has 13 points
</figure>

Om du studerar ovan exempel lite närmare så märker du att vad vi nämnde innan om dynamiska språk onekligen är sant. Den första metoden tar berättar inte att den ska returnera någonting, på något annat sätt än att den helt enkelt returnerar det den vill returnera. Inte heller berättar den att den vill returnera en siffra.

En viktig sak att förstå, är att inte heller argumenten är statiskt typade. Funktionen (vi pratar nu om `add($x,$y)` i ovan exempel) antar helt sonika att den kommer att få två siffror. Eller om vi ska vara riktigt strikta i våra uttalanden så antar metoden att den kommer att anropas med två ting som argument, där båda dessa ting går att addera genom `+`-operatorn. Det antagande om att någonting har ett visst beteende (plusoperatorn i detta fall) är det som brukar benämnas [Duck typing][6]. Men vi kommer prata om det mer när vi återkommer till att tala om styrkor och risker med dynamiskt typade språk.

#### Valfria funktionsargument

En intressant idé som finns implementerad i många språk är idéen om default-värden för funktionsargument. Valbara funktionsargument. Detta betyder alltså att vi kan anropa en metod utan att ange alla argument. Och att vi i funktionsdeklarationen definerar vad standardvärdet för ett visst argument är. Det värdet används då istället om den som anropar funktionen skulle ignorera att ange ett värde för det argumentet. Låt oss se till ett par exempel för att göra det lite tydligare.

Valfria funktionsargument i `php`

Om vi deklarerar en funktion med valfria argument...
    
    function get_ticket($name, $pickup=false, $discount=0){
      $price = 100 - $discount;
        
      if($pickup){
        $price += 25;
        $pickup_message = "Pickup included.";
      }else{
        $pickup_message = "No pickup.";
      }
        
      return $name . ": " . $price. " kr. " . $pickup_message;
    }

...Så kan vi sedan anropa den utan att ange värden för de valfria argumenten. Och de fördefinerade värdena för de avsaknade argumenten kommer istället att användas.
    
    get_ticket("John", true);
    //=> "John: 125kr. Pickup included."
     
    get_ticket("Jane", false, 100);
    //=> "Jane: 0kr. No pickup."
     
    get_ticket("Carl");
    //=> "Carl: 125kr. No pickup."

Något att tänka på är att vi i ovan exempel inte kan ange ett värde för det sista argumentet utan att ange ett värde för det andra. Med andra ord: om vi vill ange ett värde för ett valfri argument, så måste vi ange värden för alla argument före. Med andra ord gäller det att välja sin argumentordning noga.

[0]: http://en.wikipedia.org/wiki/Language_construct
[1]: #
[2]: http://stackoverflow.com/questions/1647322/whats-the-difference-between-echo-print-and-print-r-in-php
[3]: http://www.php.net/manual/en/language.basic-syntax.phptags.php
[4]: http://www.php.net/manual/en/ini.core.php#ini.short-open-tag
[5]: http://www.php.net/manual/en/configuration.file.php
[6]: http://en.wikipedia.org/wiki/Duck_typing
## Objektorienterad PHP

Dags för objektorienterad `php`! Äntligen! Språket [anses inte av alla vara objektorienterat][0]. Ifrån början gick det inte ens att skriva objektorienterad kod överhuvudtaget. Men, sedan en tid tillbaka har `php` börjat stödja klassisk `oop` i den bemärkelsen att vi själva kan skriva objektorienterade program (med klasser, arv, instansmetoder etc.). Men det finns som sagt en [debatt kring huruvida språket verkligen kan anses objektorienterat ändå][1]. En anledning till denna skepticism grundar sig i faktumet att, eftersom `php` inte alltid varit objektorienterat, så finns det många gamla kvarlevor i form av "fria" metoder. Allt är inte objekt i `php`.

Låt oss exemplifiera vad vi menar med att det finns en massa icke-objektorienterade kvarlevor kvar i språket. För att hämta en substräng av en sträng i `php` skulle vi kunna skriva följande:

```php
    substr($mystring, $n);
```

Om språket hade varit mer uppenbart objektorienterat hade vi rimligen skrivit följande:

```php
    $mystring->substring($n);
```

Men, allt detta hindrar oss inte ifrån erövra världen med allsmäktig och objektorienterad `php`. Bara för att många befintliga metoder inte är objektorienterade, så betyder det inte att den kod vi själva skriver inte kan vara objektorienterad.

Som nämnt i syntax-kapitlet så räknar vi med att du har en viss erfarenhet av objektorienterad programmering sedan tidigare. Så vi kommer i detta kapitel i huvdsak fokusera på att redogöra för syntax.

### Klasser och instantiering

En klass deklareras i `php` rätt och slätt genom keyword:et `class`. Låt oss se till ett exempel.

Deklarera en klass i `php`

```php
    class Animal{ ... }
```

Om vi har en klass, så kan vi förstås instantiera den. Och när vi instantierar ett objekt så anropas förstås dess [konstruktor][2]. En klass som inte har en konstruktur kan förstås konstrueras i vilket fall, och klassen har då en implicit konstruktor som inte tar några argument. Om vi däremot vill deklarera en konstruktor själva så använder vi det "magiska" namnet `__construct`.

Konstruktor i `php`

```php
    class Animal{
      function __construct($name){
        echo "Hello, my name is $name.";
      }
    }
```

Vi använde termen "magisk" tidigare eftersom dokumentationen för `php` själv kallar de metoder som börjar med två underscore-tecken (i.e. `__someMethodName`) för "magiska" metoder. Det är inte förbjudet i språket att deklarera egna metoder som börjar med två understreck, men det är rekommenderat att undvika det. Av den enkla anledning att språket har en del [inbyggda metoder som är namngivna på just detta sätt][3].

Låt oss nu se på hur vi [instantierar en en klass][4], alltså skapar ett objekt, i `php`.

Instantiering av en klass i `php`

```php
    $dog = new Animal('Whiskey');
```

När vi instantierar en klass så körs ju, som nämnt och bekant, konstruktorn. Låt oss då kombinera dessa två (ovan) exempel för att se vad som händer när vi kör programmet.

Att deklarera en klass med konstruktor, och sedan instantiera klassen.

```php
    // Assume we have a class with a constructor...
    class Animal{
      function __construct($name){
        echo "Hello, my name is $name.";
      }
    }

    // And then instantiate it...
    $dog = new Animal('Whiskey');
    $cat = new Animal('Socks');
```

Resultat

<figure>
Hello, my name is Whiskey.

Hello, my name is Socks.
</figure>

### Klass- och instansmedlemmar

Precis som i vilket annat språk med klasser som helst så kan vi definera både klass- och instansmedlemmar för en given klass. När vi pratar om "medlemmar" så pratar vi alltså både om metoder och variabler. Så när vi pratar om klass- och instalsmedlemmar så pratar vi alltså både om (1) klass- och instansvariabler, samt (2) klass- och instansmetoder.

Låt oss börja med att repetera vad skillnaden mellan en klass- och instansmedlem är. En klassmedlem är vad som brukar kallas för en statisk medlem. En klassmedlem tillhör klassen medan en instansmedlem tillhör instansen. Låt oss omformulera. En klassmedlem tillhör alla instansmedlemmar samtidigt, medan en instansmedlem är unik per instans. Detta betyder alltså att om vi deklarerar en klassvariabel &mdash; så existerar det endast en enda av den variabeln (tänk: minnesplats). Men om vi deklarerar en instansvariabel så kommer det existera exakt lika många variabler (tänk återigen: minnesplatser) som vi skapar instanser av den klassen.

#### Klass- och instansvariabler

Låt oss tänka i termer av ett exempel. Anta att vi har en klass som heter `Animal`. Anta att varje instans av ett djur har ett namn. Vi lagrar namnet i en instansvariabel. Varför? Jo, eftersom varje djur har ett unikt namn. Och om det är unikt per djur så måste vi skapa lika många variabler som instanser. Varje variabel måste tillhöra varje unik instans.

Anta nu istället att vi vill ha en variabel i vilken vi kan hålla koll på det totala antal djur som existerar i vår applikation. Visst skulle vi skulle kunna skapa en variabel vartsomhelst och sedan öka den varje gång vi skapar ett nytt djur. Men det är riskabelt. Om vi glömmer att öka variabeln en enda gång så har vi helt plötsligt en applikation som talar osanning. Som du kanske redan har gissat så kommer vi istället föreslå att vi skapar en statisk (alltså en klass-) variabel. Om vi sedan i klassens konstruktor ser till att öka denna statiska variabel med ett så kommer det betyda att vi omöjligen kunna hamna i ett läge där vi har instantierat fler djur än gånger vi ökat variabeln. En klassvariabel är alltså en bra idé för detta scenario eftersom vi vill lagra information som är relaterad till alla instanser av klassen `animal` och inte till varje specifik instans.

Låt oss snabbt kika på hur syntaxen ser ut för att deklarera klass- och instansvariabler.

Deklarera klass- och instansvariabler

```php
    class Animal{
      // class variables are declared
      // by using the keyword 'static'
      private static $foo;

      // instance variables are declared
      // by not using the keyword 'static'
      private $bar;
    }
```

Notera alltså att skillnaden emellan att deklarera en statisk (klass-) variabel och en instansvariabel helt enkelt är existensen eller avsaknaden av nyckelordet `static`. Skriver vi `static` blir variabeln statisk (alltså en klassvariabel). Om vi inte skriver någonting så implicerar det att det är en instansvariabel.

#### Access modifiers

Vi kommer att implementera det exempel som diskuterats ovan i helhet, i detta kapitel. Men vi måste ta det steg för steg för att verkligen förstå alla delar. Låt oss först diskutera det som kallas `access modifiers`. Detta handlar alltså om huruvida en medlem är `public`, `private` eller `protected`. Som du kanske märkte så markerade vi i ovan exempel att de två variablerna var `private`. På samma sätt som en medlem måste markeras som statisk eller inte, måste en medlem också ha en `access modifier`. Denna avgör "vilka" som kommer att få komma åt medlemen. Den "modify":ar alltså "access" &mdash; för att prata svengelska :)KeywordFörklaring

|            |        
|------------|---------
|`public`    | Alla som har tillgång till klassen/instansen har tillgång till medlemmen.
|`private`   | Endast klassen/instansen själv har tillgång till medlemmen.
|`protected` | Endast klassen/instansen själv, samt klasser/instanser i samma arvskedja, har tillgång till medlemmen.

#### Klass- och instansmetoder

Att deklarera klass- och instansmetoder påminner väldigt mycket om att deklarera klass- eller instansvariabler. Vi börjar med att ange en access modifier. Sedan anger vi huruvida den är statisk inte. Och slutligen en metod som vanligt. Det vill säga med namn och parametrar. Låt oss se till några exempel.

Deklarera klass- och instansmetoder

```php
    class Animal{
      private static function foo(){
        // Not accessible from the outside since it's private.
        // Lives on the class because it's static.
      }

      private function bar(){
        // Accessible from the outside since it's private.
        // Lives on the instance beacuse it's not static.
      }
    }
```

#### Att anropa medlemmar

Nu har vi bara pratat om hur vi deklarerar medlemmar. Vi har inte pratat om hur vi "kommer åt" dem. Egentligen är det väldigt enkelt. Instansmedlemmar når vi med hjälp av pil-notation (`->`). Klassmedlemmar å andra sidan, når vi med hjälp av kolon-kolon-notation (`::`). Det blir antagligen klarare om vi ser till ett par exempel.

Anropa medlemmar av en instans eller klass utifrån

```php
    // Assuming we have a class called Dog...
    $dog = new Dog("Brian");

    // accessing a public instance variable
    $dog->someVariable;

    // accessing a public static/class variable
    Dog::$someVariable;

    // accessing a public instance method
    $dog->someMethod();

    // accessing a public static/class method
    Dog::someMethod();
```

Ovan exempel visar endast hur vi anropar publika medlemmar utifrån. Det vill säga inte ifrån instansen eller klassen själv. Om vi istället vill anropa medlemmar tillhörande klassen eller instansen själv ifrån klassen eller instansen själv så kan vi använda nästan samma syntax. Högersidan om kolon-kolon- eller pil-syntaxen förblir densamma, eftersom metoden/variabeln vi vill anropa är densamma. Däremot förändras vänstersidan. Eftersom kontexten vi försöker anropa medlemmen ifrån har förändrats. Låt oss se till ett exempel.

Anropa medlemmar av en instans eller klass utifrån

```php
    class Dog{
      function __construct(){
        /* We're making our calls from the constructor
           for the sole reason of illustrating that we're
           calling the members from inside an instance. */

        // accessing a private instance variable
        $this->someVariable;

        // accessing a private static/class variable
        self::$someVariable;

        // accessing a private instance method
        $this->someMethod();

        // accessing a private static/class method
        self::someMethod();
      }
     ...
    }
```

Det viktigaste att notera med ovan exempel är användandet av `$this` och `self`. Förstnämnda refererar alltså till den instans som anropet görs i. Om vi befinner oss i en instansmetod i en instans av en animal och använder nyckelordet `$this` så refererar det ordet alltså till den egna instansen. Om vi å andra sidan använder uttrycket `self` så refererar vi till klassen. Inte instansen utan klassen. Om vi befinner oss i en instans av (eller en klassmetod för) klassen `Animal`, så refererar `self` alltså till själva klassen `Animal`. Inte till någon unik instans utan den generella klassen. Där vi förstås även kan ha statiska medlemmar definerade.

#### Exempel

Ok, låt oss nu se till en full implementation av klassen `Animal` som den tidigare diskuterades.

Exempel på användande av klass- och instansmedlemmar

```php
    class Animal{
      private static $count = 0;
      private $name = "Unnamed";

      function __construct($name){
        $this->name = $name;
        self::$count++;
      }

      public function speak(){
        echo "Hi, I am $this->name.<br>";
      }

      public static function count(){
        $num = self::$count;
        echo "There's $num animal(s) in the world.<br>";
      }
    }


    $cat = new Animal("Whiskers");
    $cat->speak();
    Animal::count();

    $dog = new Animal("Frolic");
    $dog->speak();
    Animal::count();
```

Resultat

<figure>
<p>Hi, I am Whiskers.</p>
<p>There's 1 animal(s) in the world.</p>
<p>Hi, I am Frolic.</p>
<p>There's 2 animal(s) in the world.</p>
</figure>

### Överkurs

Kommer snart...

#### Interfaces och Abstrakta klasser

Kommer snart...

#### Automatisk inladdning av klassfiler
[Kommer snart...][5]

[0]: http://michaelkimsal.com/blog/php-is-not-object-oriented/
[1]: http://stackoverflow.com/questions/4699519/is-php-object-oriented
[2]: http://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)
[3]: http://www.php.net/manual/en/language.oop5.magic.php
[4]: http://en.wikipedia.org/wiki/Instance_(computer_science)
[5]: http://www.php.net/manual/en/function.spl-autoload-register.php

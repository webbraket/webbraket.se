## Objekt

JavaScript är inte ett [objektorienterat][0] språk i den klassiska bemärkelsen utan istället ett [prototypbaserat][1] språk. Vad detta innebär kommer vi inte fokusera på i denna sektion, och därmed kommer vi inte syssla med instansiering. Istället kommer vi använda objekt som ett sätt att organisera vår kod.

### Vad är ett objekt?

Om du programmerat i ett tidigare språk så kan du jämföra JavaScript-objekt med `map`'s eller `dictionary`'s. Om du inte har programmerat tidgare så kan du jämföra objekt med uppslagsverk. Va? Jo, precis så! Helt vanliga gamla bokuppslagsverk. Vänta nu? Va? Jo men tänk dig. Hur fungerar ett uppslagsverk. Om jag undrar vad ordet "katt" betyder så tar jag mitt fysiska uppslagsverk (objektet) och börjar leta efter uppslagsordet "katt" (nyckeln), och när jag väl hittat det så läser jag beskrivningen av vad en katt är (värdet).

Låt oss analysera de tre nyckelorden vi identifierat i ovan stycke.

**Objekt**
> En datatyp som innehåller en kollektion av nycklar som pekar på värden (nyckel-värde-par)

**Nyckel**
> En unik identifierare, såsom "namn", eller "nummer".

**Värde**
> Ett värde kan vara av vilken annan datatyp som helst. Ett värde kan således vara 1 såväl som 32 såväl som "Kapten Haddock" såväl som ett annat objekt.

Innan vi snurrar vidare är det nog bäst att vi börjar undersöka syntaxen vi använder för att skapa objekt och således diskutera ett exempel.

Object literals

    var haddock = {
      name : 'Kapten Haddock',
      beard: 'black as the night',
      rank: 1
    }

Nu har vi skapat ett objekt och lagrat det i variabeln `haddock`. Låt oss nu se hur vi kan interagera med objektet.
    
    haddock.name;         // => "Haddock"
    haddock.rank;         // => 1
    haddock.beard;        // => "black as the night"
    haddock.weapon;       // => undefined

Vi kan nu alltså använda _punkt-notation_ för att nå de värden som gömmer sig bakom ett objekts nycklar. Men faktum är att vi även kan nå värdena genom att använda samma notation vi använder för att nå värdena i en array. Enda skillnaden är att vi istället för att be om en arrays numeriska index ber vi om värdet bakom en viss nyckel. Låt oss se till ett exempel, och tänk på att det är exakt samma objekt som vi arbetar med i båda dessa två exempel.
    
    haddock['name'];         // => 'Haddock'
    haddock['rank'];         // => 1
    haddock['beard'];        // => "black as the night"
    haddock['vegetables'];   // => undefined

### Överkurs

Om vi jämför de två olika sätten att nå ett objekts värden märker vi snabbt att vi i det första exemplet skriver nyckelns namn rakt av, medan vi i det andra exemplet skriver nyckeln i formen av en sträng. Det betyder att vi skulle kunna byta ut denna _sträng_ emot ett _uttryck_. Alltså en variabel, eller t.o.m. en funktion! Låt oss prova:
    
    var prop = 'name';
    haddock[prop];        // => 'Haddock'
    prop = 'rank'
    haddock[prop];        // => 1
    prop = 'beard'
    haddock[prop];        // => "black as the night"
    prop = 'fruit'
    haddock[prop];        // => undefined

Beroende på vilket värde vi lägger i variabeln hämtar vi värdena vid olika nycklar. Men om det är så att vi inom klammrarna kan ha ett uttryck vilket som helst så skulle vi ju förstås kunna göra ännu galnare grejer.
    
    haddock['na' + 'me'];     // => 'Haddock'
    prop = 'na';
    haddock[prop + 'na'];     // => 'Haddock'
     
    // eller vad sägs om funktioner..
    function getKey(){
      return 'name'
    }
    haddock[getKey()];        // => 'Haddock'



[0]: http://sv.wikipedia.org/wiki/Objektorienterad_programmering
[1]: http://en.wikipedia.org/wiki/Prototype-based_programming
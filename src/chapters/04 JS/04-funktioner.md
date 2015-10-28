## Funktioner

Nu börjar vi närma oss de signifikant mer intressanta delarna av programmering. Funktioner! Funktioner i programmering kan med fördel jämföras med funktioner i matematik. En funktion är som en maskin. En maskin där du kan stoppa in ett ting och få ut ett annat ting. Alltså en funktion (`F`) som tar emot ett ting (`x`) och returnerar ett annat ting (`y`), där detta andra ting, i matematik, kan uttryckas som en funktion applicerad på det första (`F(x)`).

PS. Vänligen anmäl oss inte till Högeskoleverket om det skulle vara så att våra matematiska metaforer är inkorrekta. Vi försöker bara använda de här för att skapa en förståelse.

Innan vi fortsätter prata om hur funktioner fungerar, låt oss se till ett exempel.

Funktionsdefinition

```javascript
var addition = function(x, y){
  return x + y;
}
```

Ovan definerar vi en funktion, som vi namnger `addition`, och som returnerar resultatet av en addition av dess två parametrar. Motsvarande funktion skulle matematiskt kunna uttryckas:

F(x, y) = x + y

Vi har nu sett hur man definierar en funktion. Men hur använder vi den då? Låt oss återigen se till några exempel.

Funktionsanrop

```javascript
// Först definierar vi en funktion
var addition = function(x, y){
  return x + y;
}

// Sen anropar vi funktionen
addition(1, 1);                         // => 2
addition(30, 5);                        // => 35
addition(addition(1,2), 4)              // => 7
addition(addition(1,addition(1,1)), 4)  // => 7
```

Låt oss uttrycka samma sak i matematik för att skapa ytterligare förståelse för vad vi gör:

Först definierar vi funktionen...
F(x, y) = x + y

Sen använder vi den...
         F(1, 1) = 2
        F(30, 5) = 35
    F(F(1,2), 4) = 7
F(F(1,F(1,1), 4) = 7

Notera alltså att vi kan skicka resultatet av en funktion som parameter (input) till en annan funktion. Precis som i matematik så måste den innersta beräkningen utföras först innan vi kan utföra den yttre.

> Precis som i matematik behöver det innersta uttrycket räknas ut först innan vi kan fortsätta "utåt".

### Olika sätt att deklarera funktioner

Eftersom JavaScript på gott och ont är väldigt flexibelt finns det olika sätt att deklarera funktioner.

#### Function statement

Detta är det klassiska sättet att deklarera funktioner i JavaScript.

```javascript
function myFunc(){ //work };
```

Denna metod gör att funktionsnamnet är tillgängligt i hela sitt scope. Även innan den är deklarerad.

```javascript
console.log(myFunc());  // => Hello
function myFunc(){ return "Hello" };
```

#### Function expression

Detta sätt att deklarera kan ses som att vi tilldelar en anonym funktion till en variabel.

```javascript
var myFunc = function(){ //work };
```

När vi deklarerar en funktion så här så är den inte tillgänglig före deklarationen, endast efter.

```javascript
console.log(myFunc()); // => TypeError
var myFunc = function(){ return "Hello" };
```

#### Kombination

Vi kan även kombinera ovan två metoder som så:

```javascript
var myFunc = function myFunc(){ // work };
```

#### Vilket sätt bör vi använda?

Så, istället för att gräva ned oss i vilket sätt man bör använda så föreslår vi att du följer [Douglas Crockford's rekommendation][0] om att använda function expressions. Alltså:

```javascript
var myFunc = function(){ //work };
```

> Välj function expressions över function statements, tills den dag kommer du då intresserar dig av att lära dig varför.



[0]: http://www.unicodegirl.com/function-statement-versus-function-expression.html

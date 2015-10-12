## Document Object Model

Document Object Model(DOM) är ett API för HTML och XML dokument. Den definierar den logiska strukturen och hur man kommer åt ett dokument och manipulerar det. 

### Javascript och DOM 

Med denna modell kan vi nu med hjälp av Javascript kunna modifiera trädet och skapa dynamiska hemsidor. Det handlar alltså om att vi kan ta bort, komma åt, modifiera och lägga till element.

### Document

Document är ett objekt som "Äger" alla andra objekt, med det menas att utifall du vill komma åt andra objekt i DOM:en görs detta genom ` document.method()`. MetodFörklaring

Hitta element

`document.getElementById()`Hämtar ett element med hjälp av dess ID 

`document.getElementsByTagName()`Hämtar alla element med hjälp av dess tagnamn 

`document.getElementsByClassName()`Hämtar ett element med hjälp av dess klassnamn

### Element

När vi hämtar ett element ur DOM:en genom någon av de metoder som diskuterades ovan, så kan vi sedan läsa och skriva information till det elementet. Ett element är alltså bara ännu ett objekt med ett antal egenskaper och metoder. Med andra ord kan vi inte bara läsa ifrån DOM:en, utan vi kan även förändra den. Nedan ser du några exempel på vad vi kan göra med ett elementAntag att vi har ett element i variabeln elem

`elem.innerHTML`Ändrar den inre HTML:en av ett element

`elem.attribute`Ändrar ett elements attribut.

` elem.style`Ett objekt som vi kan läsa/skriva css från/till

### Exempel

Låt oss se till ett par exempel på hur vi kan manipulera DOM:en.

Exempel på att gömma ett element.

HTML

    <p id="secret"> LYSSNA PÅ MIG! </p> 

JavaScript

    var p = document.getElementById("secret");
    p.style.display = "none";

Vad vi gör ovan är alltså helt enkelt att vi först hämtar elementet med hjälp av dess ID. Sedan hämtar vi `style`-objektet på elementet. På `style`-elementet sätter vi egenskapen `display` till värdet `none`. JavaScriptkoden skulle kunna komprimeras till att skrivas på en enda rad, vet du hur?

Exempel på att hämta med tagnamn.

HTML

    <p> A </p>
    <p> B </p>
    <p> C </p>
    <p> D </p>

JavaScript

     var as = menu.getElementsByTagName('p');  
     as[0].innerHTML = "Ett";
     as[1].innerHTML = "Två";
     as[3].innerHTML = as[1].innerHTML;

Resultat

<figure>
Ett

Två

C

Två
</figure>

Ok, nu kanske det krävs en liten förklaring. Om vi som i första exemplet hämtar med id då vet vi att vi endast får ett objekt tillbaka. I andra exemplet ovan ber vi om objekten med hjälp av tagnamnet och därför returneras dessa i en array. Med andra ord: när vi hämtar ett element genom ett ID kan vi alltid vara hundra på att det bara finns ett (eftersom ett ID endast får förekomma en gång i ett HTML-dokument). Men när vi söker element via tagnamn så kan vi omöjligen veta hur många instanser det finns av just den taggen. Således har man valt att låta `getElementsByTagName` returnera en array. Således är det även därför vi ovan använder bracket-notationen (`[x]`) för att arbeta med resultatet.
> 
> Se till att du förstår varför outputen i exemplet ovan blir som den blir innan du går vidare

### onload

När vi skriver JavaScript som på något sätt interagerar med DOM:en, är det viktigt att vi är säkra på att DOM:en är redo (inladdad) innan vi börjar försöka nå den. Detta gör vi enkelt genom att använda oss av metoden `onload`.

Exempel på hur vi använder onload.

    window.onload = function(){
      // do all fancy work here
    }

Varför gör vi alltså detta? Jo, om vi inte skulle göra det så finns alltså risken för att de element vi försöker komma åt inom funktionskroppen i ovan exempel ännu inte finns.

Ovan kan förstås lika gärna göras i två steg, genom att registrera en redan deklarerad funktion.

Exempel på hur vi använder onload.

    // Declare the init function
    var init = function(){
    }
     
    // Register it as a listener to the onload event
    window.onload = init;

Vad vi har gjort nu kallas mer generellt för att registrera en funktion (en `event handler`) till ett `event`. Mer om detta i avsnittet om events.

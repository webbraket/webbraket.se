## Event listeners

Nästa ämne vi ska prata om är eventlyssnare. Något som finns i många programmeringsspråk och som ofta beteer sig liknande, om än med olika syntax. För att förstå event listeners, fundera över följande: hur vet vi att en användare har klickat på en knapp?

Mer generellt uttryckt: Event listeners hjälper oss att exekvera specifik kod vid en specifik händelse. Det kan tyckas trivialt. Men tänk på när vi skriver ett program. Om vi inte hade events skulle hela programmet endast kunna köras i ett svep (rufft uttryckt). Programmet börjar exekveras, och oavsett hur mycket klasser och funktioner vi använder så kommer programmet att köras ifrån början till slut. Med events så kan vi däremot registrera vad som kallas för `lyssnare`. Programmets exekvering "fryser" inte. Programmet stannar alltså inte när vi registrerar en event listener utan fortsätter exekvera som vanligt. När den händelse som eventlyssnaren lyssnar efter (exempelvis en knapptryckning) händer så exekveras koden lyssnaren pekar på. Detta kallas ofta för [event-driven programming][0].

Vi ska i det här kapitlet prata om metoden `addEventListener()`, men för att enklare förstå hur de fungerar behöver vi först prata om vad det betyder att JavaScript har en `Asynkron Event Model`. Beakta följande kodexempel:

Exempel på asynkron exekvering i JavaScript

    console.log("a");
     
     
    // setTimeout är en funktion som kör en annan
    // funktion efter en given väntetid i millisekunder
     
    setTimeout(function(){
      console.log("b");
    }, 1000)
     
     
    console.log("c");

Resultat

a

c

b

Hur kan det komma sig att vi fick outputen i ovan ordning? Detta har alltså att göra med den asynkrona event modellen i JavaScript. Den funktion som körs av `setTimeout` körs inte förrän väntetiden på `1000 ms` har passerat. Men, eftersom JavaScript har asynkrona event, så registreras denna funktion som ett event. Således kommer programmet fortsätta att exekvera. När tiden sedan gått ut, och event-loopen är "ledig" så exekveras den givna funktionen.

Om `setTimeout` hade varit en synkron metod hade exekveringen avstannat ("fryst") vid anropet till `setTimeout`, och inte fortsatt förrän väntetiden passerat.

Kuriosa

Även om vi hade satt timeout-tiden ovan till 0ms så hade vi fått samma output. Varför? Jo, för att även om väntetiden för `setTimeout` är 0 så registrerar den funktionen till event-loopen utan att exekvera den på en gång. Således kan den givna funktionen inte exekveras förrän nästa lediga "tick" i event-loopen.

Varför är detta då viktigt? Jo, detta gäller alltså även för när vi registrerar event-lyssnare.

### addEventListener

Istället för att gräva ned oss i mer teori, låt oss kolla på ett exempel kring hur vi kan använda [addEventListener][1].

Exempel på asynkron exekvering i JavaScript

HTML

    <p id="eventlistener-example-1">
      hello
    </p>

JavaScript

    var tag = document.getElementById('eventlistener-example-1');
    tag.addEventListener("click", function(){
      if(tag.innerHTML == "hello")
        tag.innerHTML = "world";
      else
        tag.innerHTML = "hello";
    });

Resultat (prova att klicka på texten!)

hello

#### Webbläsarstöd

Nu är en bra tid att prata om webbläsarstöd. Äldre webbläsare stödjer inte metoden addEventListener, så om ovan exempel inte fungerar för dig så betyder det att din webbläsare är för gammal. Internet Explorer, tidigare och upp till, 8 har en alternativ implementation där metoden heter `attachEvent`. Så för att ovan exempel även ska fungera i Internet Explorer 8 behöver vi välja vilken metod vi använder berodende på vilken som finns. Läs mer om det i denna tråd på [Stack Overflow][2].

#### Återanvändbara event handlers

Den funktion som körs när ett event avfyras, kallas för en `event handler`. Självklart hade vi ju kunnat skriva denna event handler som en function declaration eller function expression istället för att bara skriva den inline. Detta är bra eftersom vi då kan återanvända beteende. Såsom nedan:

Exempel på användning av addEventListener

HTML

    <p id="eventlistener-example-2">
      hello
    </p>

JavaScript

    var onClick = function(element){
      if(element.target.innerHTML == "hello")
        element.target.innerHTML = "world";
      else
        element.target.innerHTML = "hello";
    }
     
    document.getElementById('eventlistener-example-2-1').addEventListener('click', onClick);
    document.getElementById('eventlistener-example-2-2').addEventListener('click', onClick);

Resultat (prova att klicka på olika texterna!)

hello

world

Styrkan i ovan exempel är ju alltså att vi nu kan återanvända vår eventhandler och attacha den till flera olika events. En annan lärdom vi kan dra av ovan exempel är att eventhandlers anropas med argument. Detta kan vi använda för att upptäcka vilket element som faktiskt har avfyrat eventet.

[0]: http://en.wikipedia.org/wiki/Event-driven_programming
[1]: p Varför är detta då viktigt? Jo, detta gäller alltså även för när vi registrerar event-lyssnare.
[2]: http://stackoverflow.com/questions/6927637/addeventlistener-in-internet-explorer
## Semantik

När vi pratar om semantisk signifikans så pratar vi om vad någonting (t.ex.) ett stycke text har för kontextuell betydelse. Lite som att läsa emellan raderna. Vi har i tidigare kapitel flera gånger nämnt termerna semantik och semantisk signifikans. Nu är det dags att faktiskt bena ut vad det handlar om.

Intågandet av den "levande standarden" [HTML5][0] &mdash; kan anses som en stark drivkraft i diskussionen om semantik och webben. Med HTML5 deprekerade man ett antal element som bl.a. var allt för fokuserade på _presentation_. Istället introducerade man ett par intressanta och nyttiga element som fokuserade på _semantik_.

Men vad pratar vi egentligen om när vi pratar om semantik? Och vad menar vi egentligen när vi säger att de var _för_ fokuserade på presentation? Är inte det just presentation som är poängen med HTML? Att presentera information för en användare.

### Content är inte presentation

Idéen om att [separera presentation ifrån content][1] handlar i essens att det går att skilja på presentation (representation) av content ifrån faktiskt contentet. Med andra ord &mdash; att representationen av information inte är detsamma som informationen i sig. Låt oss omformulera oss &mdash; att uttrycka en tanke är inte samma sak som essansen av tanken. Den talade tanken är inte samma sak som tanken. And down the rabbit hole it goes...

Vi sniffar nu lite i gränslandet till filosofi. Vad är kunskap? Är det skillnad på kunskap och kommunicerad kunskap? Om vi kan lagra kunskap som är separerad ifrån representation borde vi inte då kunna skapa maskiner som är lika smarta som vi? Vi närmar oss kunskapsrepresentation. Vi närmar oss artificiell intelligens.

Som du märker finns det mycket att gräva i. Och det är därför vi uttrycker oss i termer av "down the rabbit hole". Men utan att gräva ned oss allt för djupt åt något håll så finns det intressanta potentiella förmåner vi kan dra nytta av genom att inse att presentation och content inte är samma sak. Och sedan agera därefter.

### Alla element denoterar någon semantik

Varje gång vi i HTML använder ett element så säger vi någonting om det content som vi väljer att placera i just det elementet. Ta t.ex. `<em>`-elementet. Ett element som används för att denotera emfas. Emfas är inte bara någonting som är relaterat till presentation. Fundera över följande meningar.

* "Hon sa att du _skulle_ göra det."
* "Hon sa att _du_ skulle göra det."
* "_Hon_ sa att du skulle göra det."

Förhoppningsvis känner du, både ifrån verkliga livet och ifrån skolan, igen att emfas kan göra att samma mening betyder helt olika saker. Ovan tre meningar får tre helt olika innebörder beroende på hur vi väljer att intonera. Alltså vart vi väljer att lägga emfas.

### Accessibility

Föreställ dig en blind person. Hur läser en blind person din webbsida? Rimligen med någon form av [screen reader][2]. En screen reader (t.ex.) är en maskin som läser källkoden för din webbsida och genom text-till-tal-syntes sedan läser upp relevant text på webbsidan.

När en screen-reader ska "läsa" våra webbsidor så skapar den egentligen en ny presentation. I termer av content och presentation. Screen-readern bryr sig egentligen bara om vårt content. Den vill identifiera vårt content, och sedan intelligent återrepresentera detta för användaren i ett format som är anpassat för denne.

Men vad är det screen readern behöver veta? Rimligen behöver den t.ex. veta vad som är meny-länkar så att den kan ge användaren en möjlighet att navigera ifrån den sidan den är på. Rimligen behöver den veta vilken del av sidan som är "huvud-content" (t.ex. en artikel) så att den inte börjar läsa upp annonserna för användaren. Rimligen behöver den veta vad artikeln har för rubrik så att den kan läsa upp den först, och sedan pausa i någon sekund så att användaren, lyssnaren, förstår att det är en rubrik. Rimligen behöver den veta vilka ord som ska läsas med extra emfas så att vi inte råkar ut för missförstånd såsom i det tidigare exemplet med punktlistan.

Detta är alltså varför det är viktigt att vi har element såsom t.ex. `<em>` som gör att vi kan denotera emfas. Eller `<nav>` för att kunna denotera meny-navigation. Detta är förstås inte ens en bråkdel av alla element med semantisk signifikans som existerar i HTML. Men vi återkommer till dessa strax.

### Bortom accessibility 

Låt oss bara understryka att den som tror att idéen om att separera content ifrån presentation endast är en tillgänglighetsfråga (accessibility) &mdash; är naiv. Vi diskuterar den blinde användaren för att ha ett exempel att utgå ifrån men både problemet och fördelarna gömmer sig mycket djupare än så. Vi är på väg mot en webb där [information är fri ifrån presentation][3]. Där en multitud av maskiner kan läsa informationen på olika sätt. Allt ifrån TV-apparater till [glasögon][4].

Kommer snart...

### Maskinläsbarhet

Kommer snart...

### Semantiska element i HTML5

Kommer snart...

### Uppmaningar

Poängen med detta kapitel är egentligen enkel. Vi vill plantera ett frö som förhoppningsvis gör att du börjar tänka på varför du väljer ett element över ett annat. Vi vill att du börjar tänka på att det finns en poäng med att hålla sin markup så "ren", minimalistisk och semantisk som möjligt. Vi vill att du börjar vara medveten om att alltid separera content ifrån presentation.

[0]: http://www.w3schools.com/html/html5_intro.asp
[1]: http://en.wikipedia.org/wiki/Separation_of_presentation_and_content
[2]: http://en.wikipedia.org/wiki/Screen_reader
[3]: http://en.wikipedia.org/wiki/Semantic_Web
[4]: http://en.wikipedia.org/wiki/Google_Glass

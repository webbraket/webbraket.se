## Kom igång med JavaScript

Om du börjar jobba med HTML och CSS kommer du snabbt upptäcka att de båda teknikerna har sina limitationer. Limitationen skulle enkelt kunna beskrivas som avsaknaden av ett ord --- interaktivitet!

### Problemet

Visst, vi kan använda HTML för att strukturera content, och visst, vi kan använda CSS för att positionera, och style:a innehållet så att det inte bara är snyggt utan även kognitivt lättillgängligt för en människa. Men hur är det egentligen med interaktiveten?

Förvisso kan vi använda pseudo-selektorn `:hover` i css för att skapa effekter när användaren låter musen rulla över länkar (såsom t.ex. understrykning). Och visst, vi kan ju genom HTML skapa olika sidor som vi sedan sammanlänkar genom hyperlänkar (`<a>`-taggen), vilket alltså betyder att användaren interaktivt kan navigera sig emellan dessa sidor.

Onekligen är ovan två nämnda exempel just det, exempel på interaktiviet vi kan uppnå genom HTML och CSS. Men finns det interaktivitet vi skulle vilja skapa som vi inte kan uppnå med bara HTML och CSS? Föreställ dig en delete-knapp. Föreställ dig att vi har en applikation, vilken som helst, och det finns en knapp som säger "Ta bort mitt konto". Vore det inte då rimligt att be användaren att konfirmera att denne verkligen vill ta bort sitt konto när den trycker på knappen? Självklart.

Tänk på ovan exempel en stund. Hur skulle vi lösa det genom HTML? Om vi ignorerar galna lösningar (som jag inte alls skulle rekommendera) med `<iframe>`'s så har vi egentligen bara ett val. Säg att knappen ligger på en sida som heter `delete.html`. När man trycker på den knappen behöver vi skicka användaren till en annan sida, vi kallar den för `confirm_delete.html` där användaren presenteras med två möjligheter till. Alltså två nya länkar till två andra sidor. Kanske är dessa länkar samma sidor som innan, kanske inte. Om inte, så har vi skapat två sidor till, nämligen: `yes_delete.html` och `no_delete.html`. Rimligen ser du vilken soppa av sidor det här snabbt blir. Och rimligen har du nu kommit på att det är här JavaScript kommer in i bilden.

Vi diskuterar nu förstås lite halvsanningar eftersom lösningen skulle kunna bli enklare med ett server-side-språk. Men lita på oss när vi säger att JavaScript kommer göra det ännu enklare.

Låt oss se till hur vi skulle kunna lösa samma sak genom JavaScript.

Exempel på en confirmation dialog genom JS

[Delete my account][0]

När du provat ovan exempel, finns det en till viktig sak att inse. Interaktiveten i ovan exempel sker "isolerat" i den lilla exempelrutan. Resten av sidan påverkas inte. Slutsatsen vi drar är alltså att vi kan använda JavaScript till att uppnå en nivå av interaktivet vi omöjligen kan uppnå med endast HTML och CSS utan att använda flera sidor.
> 
> Med JavaScript kan vi låta användaren interaktivt interagera med sidan utan att den behöver "laddas om".



[0]: #
# Versionshantering

Om du någon gång sparat flera filer på en dator och suffixat varje fil med ett versionsummer så har du versionshanterat.
Att spara en backup innebär i den naiva bemärkelsen att vi sparar en kopia av vårt arbete, men inte reflekterar över hur den kopian relaterar till tidigare kopior. Ibland skriver vi t.o.m. över vår gamla kopia.
Men när vi versionshanterar så sparar vi våra backups systematiskt så vi vet i vilken ordning dessa händelser har skett.
Uppenbart är sistnämnda strategi ett kraftufullare sätt att arbeta på än
förstnämnda.

Det enklaste (läs: naiva) sättet att versionhantera är helt enkelt att duplicera sin fil och inkrementera ett versionsnummer (se nedan).
Men eftersom datorer är bra på att utföra repetativa sysslor så insåg vi snabbt att denna process inte är någonting som människor behöver syssla med och vi har därmed delegerat arbetet till versionshanteringssystem.

```
freudianska-felsägelser-v01.docx
freudianska-felsägelser-v02.docx
freudianska-felsägelser-v03.docx
...
```

Versionhanteringssystem gör, enkelt sett, alltså just det vi pratat om.
Nämligen hjälper oss att hålla reda på flera versioner så att vi närsomhelst kan "hoppa tillbaka" i historien till en gammal (förhoppningsvis fungerande) version.

Men faktum är att versionshantering är mycket, mycket kraftfullare än så.
När du börjar bli riktigt duktig på versionshantering så kommer du inse att versionshanteringssystem inte bara är ett sätt att "ångra" långt bak i historien.
Det är ett sätt att arbeta.


Låt oss exemplifiera. Du börjar arbeta på en "feature" och halvvägs in i arbetet av den featuren så inser du att du antagligen valt ett dåligt sätt att lösa problemet på. Använder du `git` så kanske du då skulle säga `git stash`.
Detta kommando sparar undan dina förändringar och återgår till kodbasen så som den såg ut innan du började arbeta (d.v.s. den senaste "versionen" ) så att du kan applicera förändringarna igen när du vill.
Du börjar sedan arbeta på en ny lösning men kommer plötsligt på att du inte kommer ihåg hur du löste en viss detalj i ditt tidigare försök.
Så du kör `git diff stash` för att undersöka vad som skiljer sig emellan din nuvarande lösning och ditt tidigare försök.
Du hittar den kodbiten du sökte och implementerar den i ditt nya försök.
Alternativt kanske du funderade kring huruvida du ändrade på en viss fil i ditt tidigare försök eller inte. Du kör `git stash show` och får en lista på de filer du förändrade i ditt tidigare försök.

Ovan är ett trivialt exempel där `stash` används för att experimentera temporärt med kod som du inte vill spara ifall du lyckas med en bättre lösning.
Självklart finns det som vanligt tusen sätt att lösa samma "problem" på, men vi ville bara ge dig ett exempel på hur versionshantering kan vara ett mycket kraftfullt verktyg i en webbutvecklares verktygslåda.


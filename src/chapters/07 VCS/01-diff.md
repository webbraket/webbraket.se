## Diff
Att versionshantera manuellt genom att duplicera sina dokument är ofördelaktigt av flera anledningar.
En nackdel är att varje kopia måste vara en full kopia av dokumentet. Detta är förstås inte ett problem för kortlivade små kodbaser eller uppsatser.
Men anta att du har ett projekt som är `2 MB` stort och anta att du skapar en ny version varje dag.
På ett år har ditt projekt växt till `730 MB` och om du vill hålla din backup någon annanstans än på din dator så har du helt plötsligt snart en hel Gigabyte att skicka upp och ned över internet.
Det finns bättre saker att göra med din tid och bandbredd, och det finns bättre sätt att versionshantera på.

Egentligen är det väldigt logiskt. Om vi vill spara flera versioner av en fil så skulle det ju egentligen räcka med att vi sparar set:et av förändringar som har skett emellan varje version och relationen emellan versionerna (d.v.s. i vilken ordning förändringarna skedde).

Låt oss exemplifiera. Anta att vi börjar med nedan fil.

```
1. Tomat
2. Sallad
3. Gurka
```

Anta sedan att vi vill gör nedan förändring.

```
1. Tomat
2. Bladspenat
3. Gurka
```

Vad är då skillnaden emellan de två olika "versionerna"?
Skillnaden kan beskrivas på många sätt men skulle t.ex. kunna illustreras enligt nedan.

```
2. Bladspenat
```

Förändringsset:et, låt oss kalla det för en "diff", beskriver helt enkelt att allt som tidigare stod på rad 2 ska tas bort (alltså `"Sallad"`) och ersättas av texten som står där nu (alltså `"Bladspenat"`).
En diff i versionshanteringssystemet Git är annoterad när vi läser den så att det ska bli lättare att kunna överskåda vad som skiljer två versioner åt.
Ungefär såsom i nedan exempel.

```
    Tomat
--- Sallad
+++ Bladspenat
    Gurka
```

Att spara en diff tar uppenbart mycket mindre plats än att spara en hel kopia varje gång vi gör en signifikant förändring.
Således kan vi med versionshanteringssystem såsom Git vara mycket generösa i hur ofta vi sparar en ny version eftersom diskutrymme knappast är en potentiell problemfaktor.
Vill du skapa en ny version för varje ny rad du förändrar så är det helt ok.
Versionen kommer ändå bara att innehålla en rad eftersom den endast innehåller förändringsset:et, alltså diff:en.


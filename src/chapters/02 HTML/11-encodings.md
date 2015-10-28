## Teckenkodning

Kanske har du redan märkt att när man skapar html-dokument som innehåller tecken såsom `å`, `ä`, `ö` kan det hända att de ersätts med en uppsjö a mystiska tecken. Lösningen på detta är `character sets`.

För att göra en lång historia kort så var det alltså så att man i datorernas tidiga dagar representerade tecken som [ASCII][0]-koder. T.ex. så representerades `A` genom `65` och `a` genom `97`.

ASCII-tabellen använde sig av 7 bitar, vilket resulterade i 128 olika tecken (eftersom `2^7=128`), varvid vissa var "unprintable" kontroll-tecken. Som du säkert kan tänka dig upptäckte man snabbt att detta var fullt otillräckligt för att lagra all världens olika tecken. Vi har ju förstås inte bara åäö att arbeta med, utan även kinesiska, grekiska, arabiska o.s.v.


<figure>
  There is no such thing as plain text.
  <figcaption>
<cite>
  [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)][1]
</cite>
  </figcaption>
</figure>

Ovan citat understryker faktumet att datorer egentligen är väldigt korkade och bara gör det vi säger åt dem. Utan att berätta för en dokumentläsare på vilket sätt vi sparat ett visst tecken så har den ingen chans att veta vad det är för tecken, hur det ska visas, eller ens vart tecknet slutar.

In kommer [utf-8][2] och räddar dagen! Detta är kort sagt ett sätt att representera [Unicode][3]-tecken. Och kort sagt möjliggör användning av världens alla tecken. Och som kort sagt blivit den vanligaste teckenkodningen för webbsidor.

Ett dokuments teckenkodning sätter vi genom att skapa en `<meta>`-tag med attributet `charset` satt till valfritt charset (såsom just utf-8). Eftersom detta tillhör meta-information om dokumentet skall vi placera taggen under `<head>`. Vidare bör vi även specificera vårt `charset` så [tidigt som möjligt][4] i `<head>` eftersom webbläsaren behöver veta vilken teckenkodning vi använt för att ordentligt kunna läsa det dokument den redan läser.

Ett dokument som definierar character set:et utf-8

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>The utf-8, I speak!</title>
  </head>
</html>
```


[0]: http://sv.wikipedia.org/wiki/ASCII
[1]: http://www.joelonsoftware.com/articles/Unicode.html
[2]: http://sv.wikipedia.org/wiki/UTF-8
[3]: http://sv.wikipedia.org/wiki/Unicode_transformationsformat
[4]: http://stackoverflow.com/questions/5572471/in-head-which-comes-first-meta-or-title

## Kom igång med CSS

CSS &mdash; (Cascading StyleSheets) är stilmallar som i praktiken används till att formge dokument. Formge färg, teckensnitt, positionering, justering, backgrunder, scroll, o.s.v. En enda CSS-mall kan styra tusentals dokument och det är då enkelt att ändra formateringen genom att bara justera i CSS-mallen.

CSS har tagit HTML ett steg längre och möjliggjort formateringar och effekter som inte fanns i HTML standarden. En av fördelarna med CSS är att flera mallar kan användas och de har då företräde inbördes så att en "huvudmall" med de övergripande formateringarna kan ersättas på en lägre nivå av en "lokal mall" som då gäller före huvudmallen. Det är detta som åsyftas när man säger att css är `cascading`.

> Med css kan vi separera innehåll och presentation.

CSS är ett initiativ till att separera **innehåll** och **presentation**. Att definiera allt relaterat till presentation i en extern mall har många fördelar. Bland annat att:

* Vi kan återanvända presentationsreglerna över många sidor.
* Sidorna laddas snabbare eftersom CSS-filen kan cachas av webbläsaren.
* HTML-sidan lever rimligen längre eftersom vi kan förändra presentationen utan att behöva ändra avsevärt i innehållets struktur.

### Tillgänglighet & responsivitet

En målsättning och effekt av att presentation separeras ifrån innehåll -- är adaptivitet. Om innehållet är helt "befriat ifrån" presentation så skulle man i teorin kunna visa innehållet med vilken typ av presentation som som helst.

För att göra det mer uppenbart, låt oss fundera över hur situationen såg ut tidigare. Om vi beblandar presentation (css) med vårt innehåll (html) så kommer det vara svårt för en maskin att avgöra vad som hör till presentationen och vad som hör till innehållet. Tänk t.ex. på radbrytningar. Används en radbrytning för att understryka att två paragrafer är skilda ifrån varandra, eller används den för att skapa ett bekvämt visuellt avstånd? Båda fallen kan vara sanna. Detta är svårt för en maskin att avgöra.

I praktiken har detta t.ex. varit ett problem för syn- och hörselskadade. Tänk på [screen readers][0] t.ex. som genom text-to-speech försöker läsa upp en sidas innehåll för en användare. Hur skulle det vara om den började läsa saker som "blå bakgrund".

Ett av målen för W3C (standardsorganisationen för bl.a. css) är att underlätta för konumptionen av webbaserat innehåll på plattformar än just en dator. Det kan handla om allt ifrån Smartphones till enheter för talsyntes och punktskrift (Braille). Genom att separera innehåll ifrån presentation är det alltså markant lättare, eftersom maskinen inte behöver bry sig om att filtrera ut presentationen ifrån innehållet.

Detta betyder förstås att vi sedan lång tid tillbaka behövt lägga gamla troll som Frames, Iframes, Imagemaps, java applets, javascript, bilder utan ALT-text, GIF-animationer, Flash, Shockwave, PDF-dokument osv. Många funktioner som används idag går då alltså bort helt.

[0]: http://en.wikipedia.org/wiki/Screen_reader

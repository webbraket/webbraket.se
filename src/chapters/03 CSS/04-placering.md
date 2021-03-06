## Vart ska jag skriva CSS?

När du använder CSS för att formatera en sida kan du infoga CSS-formateringen på tre sätt:

1. Extern CSS-mall
en extern CSS-mall som kopplas till dokumentet
2. I dokumentet
i dokumentets huvud head-taggen
3. Direkt i element
i elementet där CSS-formateringen ska utföras

### Extern CSS-mall

Det här är den vanligaste användningen av CSS där ett externt dokument som innehåller formateringen kopplas till alla de
sidor som ska tillämpa formatet. Namnet på CSS-mallen måste ha filtilläget .css och namnet på mallen i exemplet nedan är
"mall.css".
Den här metoden är mest effektiv, om formateringen ska ändras behöver du bara göra det i ett enda mall-dokument.
Här uppfylls målet med att separera innehåll och struktur i dokumenten.
Så här kan koden för sidorna som kopplas till mallen se ut:

Exempel på referens till extern stilmall

```html
<!DOCTYPE html>
<html>
  <head>
    <title> Sidans namn </title>
    <link href="mall.css" rel="stylesheet">
  </head>
  <body>
    <h2>En rubrik, yay!</h2>
  </body>
</html>
```

Du kan koppla flera externa CSS-mallar till samma dokument. Om samma selektorer förekommer i båda
mallarna men med olika formatering gäller den mall som angivits senast i radvis ordning. I exemplet nedan
gäller alltså "mall2.css" före "mall.css":

Exempel på ett html-dokument med referenser till flera stilmallar

```html
<!DOCTYPE html>
<html>
  <head>
    <title> Sidans namn </title>
    <link href="mall.css" rel="stylesheet">
    <link href="en_till_mall.css" rel="stylesheet">
  </head>
  <body>
    <h2>En rubrik, yay!</h2>
  </body>
</html>
```

### I dokumentet

CSS-formatering angiven direkt i dokumentet kan användas när vissa sidor ska avvika från
huvudmallens formatering. Den här metoden är inte lika effektiv som att använda en extern CSS-mall.
Om formateringen ska ändras måste det utföras i varje dokument som använder formateringen.
Här formateras rubriken direkt i dokumentet:

Exempel på ett html-dokument med css definierad direkt i HEAD

```html
<!DOCTYPE html>
<html>
  <head>
    <title> Sidans namn </title>
    <style type="text/css">
      h2 { font-size: 24px; }
    </style>
  </head>
  <body>
    <h2>En rubrik, yay!</h2>
  </body>
</html>
```

### Direkt i elementet som ska formateras

Den här metoden är minst effektiv och här uppfylls inte målet med att separera innehåll och
struktur i dokumenten. CSS-formateringen anges i anslutning till de element som ska formateras.
När formatet ska användas i ett nytt elememnt måste CSS-koden anges på nytt och det innebär att sidorna
innehåller mycket kod och tar längre tid att laddas i webbläsaren.
Så här kan koden se ut när rubriken formateras direkt i elementet:

Exempel på ett html-dokument med css definierad i ett element (även kallat: inline)

```html
<!DOCTYPE html>
<html>
  <head>
    <title> Sidans namn </title>
  </head>
  <body>
    <h2 style="font-size:24px;">En rubrik, yay!</h2>
  </body>
</html>
```

Prioriteringsordningen av formateringen är följande:

1. HTML-formatering
2. CSS-kod i element eller avsnitt där formateringen ska tillämpas
3. CSS-kod i dokumentet
4. CSS i extern mall

Detta innebär att du kan börja formateringen i en extern CSS-mall som du kopplar till dina dokument.
Vill du sedan ange avvikande format lokalt i ett dokument formaterar du CSS direkt i dokumentet
(gäller då före den externa CSS-mallen). Om någon del av dokumentet ska avvika från övrig CSS-formatering
anger du detta direkt i avsnittet/objektet (gäller då före både CSS i dokumentets HEAD och CSS i en extern
CSS-mall)

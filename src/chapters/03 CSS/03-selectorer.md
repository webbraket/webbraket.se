## Selektorer

### Vanliga selektorer och atttribut

Man kan ju tycka att det borde räcka med att kunna hänvisa till element bara via deras typ, klass eller typer. Detta är dock inte sant, suck! Det går att komma åt element på andra sätt och detta gör det lättare för oss då man slipper sätta klass eller id på allt. Nedanför finner ni olika selektorer och exempel. Observera att det finns flera....Never ending story!

#### Selektor: \*

Exempel på HTML och CSS med \*

```html
    <h2>En rubrik, yay!</h2>
    <p>En paragraf, yay!</p>
```
```css
    *{
      font-size: 24px;
      background:#ff6600;
     }
```
#### Selektor: E

Exempel på HTML och CSS med E

E står i detta fall att man använder elementets typ som selektor.

```html
    <p>En paragraf, yay!</p>
```
```css
    p{
      font-size: 24px;
      background:#ff6600;
    }
```

### PseudoKlasser

#### E:link

Exempel på ett element som är en länk som inte besökts än.

```html
    <a href="http://webbraket.se">Värsta grymma grejen!</a>
```
```css
    a:link{
      color:pink;
    }
```

#### E:visited

Exempel på ett element som har blivit besökt.

```html
    <a href="http://webbraket.se">Värsta grymma grejen!</p>
```
```css
    a:visited{
      color:blue;
    }
```

#### E:hover

Exempel på element som har muspekaren över sig.

```html
    <a href="http://webbraket.se">Värsta grymma grejen!</p>
```
```css
    a:hover{
      color:green;
    }
```

#### E:active

Exempel på länk som är aktivt (exempelvis när användaren trycker ner knappen)

```html
    <a href="http://webbraket.se">Värsta grymma grejen!</p>
```
```css
    a:active{
      color:purple;
    }
```

### Kombinationer

#### E F

Exempel på referens till extern stilmall

Alla element F som kommer efter E. Alltså i detta fall alla fyra första paragrafer.

```html
    <div class="yttre">
      <p>En första paragraf</p>
      <p>En andra paragraf</p>
      <p>En tredje paragraf</p>
      <div class="inre">
        <p>En fjärde paragraf</p>
      </div>
    </div>
```
```css
    .yttre p{
      color:pink;
    }
```

#### E+F

Exempel på referens till extern stilmall

alla element som direkt föregås av E. Alltså i detta fall kommer andra och tredje paragrafen att påverkas.

```html
    <div class="yttre">
      <p>En första paragraf</p>
      <p>En andra paragraf</p>
      <p>En tredje paragraf</p>
      <div class="inre">
        <p>En rubrik, yay!</p>
      </div>
    </div>
```
```css
    p + p{
      color:pink;
    }
```

#### E \> F

Exempel på element som är direkt barn av ett annat element.

Anta att vi har följande html...

```html
    <div class="yttre">
      <p>En första paragraf</p>
      <p>En andra paragraf</p>
      <div class="inre">
        <p>En inre paragraf!</p>
      </div>
    </div>
```

Och sedan skriver denna regel..

```css
    .yttre > p{
      color:pink;
    }
```

Så kommer vi således alltså endast "träffa" de två första `<p>`-elementen eftersom endast de är **direkta** barn till elementet med klassen `.yttre`.

Resultat

<figure class="example">
  <iframe src="examples/css-selectors"></iframe>
</figure>

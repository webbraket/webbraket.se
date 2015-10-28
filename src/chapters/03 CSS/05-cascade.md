## Cascading

Tänk på namnet &mdash; _Cascading Stylesheets_ &mdash; stilmallar som "kaskadar". Vad menas egentligen med att de "kaskadar" och hur kan vi använda det till vår fördel?

Just ordet "[kaskad][0]" åsyftar idén om att någonting "faller" ned ifrån en nivå till en annan och så vidare i etapper. I relation till just CSS så handlar detta om att (de flesta) CSS-regler som appliceras på en förälder även gäller för alla förälderns barn.

Låt oss se till exempel för att bättre förstå vad vi pratar om.

Ett exempel på hur en regel kaskadar igenom ifrån föräldern till barnen

```html
<body>
  <p>First paragraph</p>
  <div>
    <p>Second paragraph</p>
  <div>
</body>
```
```css
body {
  color: green;
}
```

Resultat

<figure class="example">
  <iframe src="examples/css-cascade"></iframe>
</figure>

> Mer specifika regler skriver över mindre specifika regler oavsett i vilken ordning de dyker upp i css-filerna.

Att mer specifika regler skriver över mindre specifika regler innebär att vi kan utnyttja kaskadet till vår fördel. Genom att således definiera generella regler på en "hög" nivå och sedan skriva över med de specika ändringar som vi vill göra.

Ett exempel på hur en mer specifik regel _skriver över_ en mindre specifik (kaskadad) regel

```html
<body>
  <p>First paragraph</p>
  <div>
<p>Second paragraph</p>
  <div>
</body>
```

```css
body { color: green; }
div p { color: blue; }
```

<figure class="example">
  <iframe src="examples/css-specificity"></iframe>
</figure>

Låt oss se till ett till exempel där vi använder ett elements ID för att kunna skriva över stilarna specifikt. Notera hur den andra paragrafen fortsätter att vara **fetstilad** eftersom den "ärver" den regeln av sin förälder. Alltså, egenskapen kaskadar ned ifrån föräldern till barnet.

Ett exempel på hur en mer specifik regel _skriver över_ en mindre specifik (kaskadad) regel

```html
<p>First paragraph</p>
<p id="selected">Second paragraph</p>
<p>Third paragraph</p>
```

```css
p {
  color: red;
  font-weight: bold;
}
#selected {
  color: orange;
}
```

<figure class="example">
  <iframe src="examples/css-specificity-2"></iframe>
</figure>

[0]: http://sv.wikipedia.org/wiki/Kaskad

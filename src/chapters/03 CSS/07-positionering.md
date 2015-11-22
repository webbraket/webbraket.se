## Positionering

Om man tar en sväng på internet och funderar lite på det vi hittills lärt oss om HTML och CSS så inser man snabbt att saker inte alls bara ligger rakt upp och ned i dokumentet. Texter ligger i mitten, vi har kolumner och rader, marginaler och boxar som verkar vara "sticky".

I det här kapitlet går vi igenom de olika värden vi kan ge css-attributet `position`, närmare bestämt `absolute`, `relative` och `static`.

Om vi inte anger någonting annat så är alla element statiskt placerade. Det är värt att notera att även om namnet på attributet `position` verkar antyda det så är det verkligen inte det enda sättet webbutvecklare positionerar saker genom. Men med rätt förståelse för attributet finns det knappt någon positionering vi inte kommer kunna åstadkomma.

### Static

Om du inte anger någonting annat, kommer element att positioneras statiskt. Alltså följa sin naturliga plats i dokumentet.

Det är viktigt att uppmärksamma att ett statiskt element på de (tänk dig en sida som ett koordinatsystem) koordinaterna `{0,0}`, omöjliggör att ett statiskt placerat syskon också placeras på `{0,0}`. Med andra ord tar statiskt placerade element upp plats och således kan syskon inte ligga på varandra utan placeras istället under (om de är [block-level element][0]) eller bredvid (om de är [inline-level element][1]) varandra.

> Statiska element tar upp plats

Att ett statiskt element inte kan placeras på ett annat element gäller förstås bara element som är syskon. Ett elements barn placeras förstås naturligt "innuti" förälderelementet.

Med andra ord. Om ett förälderelement har de (hypotetiska) koordinaterna `{0,0}` så kommer även första barnet till det elementet ha koordinaterna `{0,0}`.

Låt oss se till några exempel.

Exempel på statisk positionering för två `<div>`:ar efter varandra.

<figure class="example">
  <iframe src="examples/css-positioning-static"></iframe>
</figure>

Exempel på statisk positionering för en `<div>` i en `<div>`

<figure class="example">
  <iframe src="examples/css-positioning-static-nested"></iframe>
</figure>

### Fixed

> Fixerade element tar inte upp plats

Med fixerad positionering säger vi åt ett element att ignorera sin "normala" plats i dokumentflödet och istället placera sig på en position i relation till webbläsarfönstret.

Med andra ord så är alltså (den tänkta koordinaten) `{0,0}` högst upp till vänster i webbläsaren. Detta förutsatt att vi sätter föregående värden för egenskaperna `left` och `top` vilket då i ett kordinatsystem skulle motsvaras av `x` och `y`. Således kan vi sluta oss till att origo är högst upp till vänster i webbläsaren.

Vad som gör positionering i css intressant är att vi även kan vända steken och istället sätta värden för egenskaperna `right` och `bottom`. Vi hanterar då fortfarande `x` och `y` i bemärkelsen horisontellt och vertikalt men vi har nu flyttat origo ner till högra hörnet. Plus att vårt koordinatsystem nu fungerar "baklänges". Ett högre värde för right innebär att vi flyttar vårt element längre åt vänster. Sätt detta i relation till att ett högre värde för left flyttar vårt element längre åt höger.

> Tänk på positioneringsteknikerna `fixed`, `absolute` och `relative` som positionering genom i ett koordinatsystem.

Medan ovan kommentarer gäller för alla `position`-värden utom `static`, gäller följande endast för `position`-värdet `relative`.

Relative ignorerar hur användaren scrollar i ett dokument. En tänkt koordinat, säg `{100,120}`, står i relation till browserns storlek och endast browserns storlek och det "fönster" där browsern renderar sidan. Med andra ord, kommer elementet alltid att befinna sig 120px ifrån fönstrets topp, _inte_ ifrån dokumentets topp (vilket är hur `absolute` positionering beteer sig).

Följande exempel använder sig av nedan css

```css
#blue {
  position: fixed;
  top:  20px;
  left: 30px;
}
```

Den blåa boxen i detta exempel har fixed positionering.

<figure class="example">
  <iframe src="examples/css-positioning-fixed"></iframe>
</figure>

### Absolute

Även med absolut positionering så säger vi åt ett element att ignorera sitt "normala" dokumentsflöde och istället placera sig på precis de koordinater vi specificierar.

Frågan är då bara &mdash; precis på de koordinaterna i relation till vad? I det normala fallet så betyder det i relation till fönstret. Men om någonting absolut positionerat befinner sig i någonting annat som är absolut eller relativt positionerat så räknar vi då i relation till den föräldern.

Ovan blir nog enklare att förstå om vi ser till ett par exempel.

Följande exempel använder sig av nedan css

```css
#red {
  position: absolute;
  top:   0;
  right: 0;
}
#blue {
  position: absolute;
  bottom: 0px;
  left:   0px;
}
```

Exempel på absolut positionering för två `<div>`:ar

<figure class="example">
  <iframe src="examples/css-positioning-absolute"></iframe>
</figure>

Exempel på absolut positionering för en `<div>` i en absolut positionerad `<div>`

<figure class="example">
  <iframe src="examples/css-positioning-absolute-nested"></iframe>
</figure>

### Relative

När vi positionerar ett element relativt så är det som om vi kombinerar metoderna statisk och absolut. Vi positionerar ett element relativt till dess statiska position.

Med andra ord, elementet antar först den position den bör få i det statiska flödet, och vi ser nu den platsen som "nollpunkten" (origo). Sedan tas elementet ut ur dokumentflödet och vi placerar det absolut (enligt de koordinater vi angett) i relation till sin statiska placering.

Följande exempel använder sig av nedan css

```css
#red {
  position: relative;
  top:  0;
  left: 0;
}
#blue {
  position: relative;
  top: -10px;
  left: 10px;
}
```

Exempel på relativ positionering för två `<div>`:ar

<figure class="example">
  <iframe src="examples/css-positioning-relative"></iframe>
</figure>

Exempel på relativ positionering för en `<div>` i en relativt positionerad `<div>`

<figure class="example">
  <iframe src="examples/css-positioning-relative-nested"></iframe>
</figure>

### Video om centrering

Om du finner ovan lite konfunderande finns nedan en film som applicerar några av dessa metoder i praktiken.

I videon är målet att centrera en `<div>` horisontellt och vertikalt på sidan. Detta vilket bl.a. leder oss in på en teknik som använder sig av positionering genom `absolute`.

En video om horisontell & vertikal centrering med css

<figure>
<iframe width="100%" height="375" src="http://www.youtube.com/embed/GqCj_sHxzGE?rel=0&vq=hd1080" frameborder="0" allowfullscreen></iframe>
<figcaption>Introduktionsvideo om html, css och javascript.</figcaption>
</figure>


[0]: http://en.wikipedia.org/wiki/HTML_element#Block_elements
[1]: http://en.wikipedia.org/wiki/HTML_element#Inline_elements

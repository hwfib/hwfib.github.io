---
title: Inici
order: 0
---

#### Benvingut a hwfib.com

Com ja deus haver notat, aquesta web no és com les demès... L'objectiu, en part
degut a la manca de temps dels estudiants de la FIB, és fer-la exclusivament
amb HTML estàtic vainilla, de tal manera que es pugui visualitzar a qualsevol
tipus de dispositiu sense importar els recursos. Tècnicament, això hauria de
correr a una torradora amb connexió telefònica.

hwfib.com és un portal dedicat exclusivament a material per als estudiants de
la especialitat minoritària d'enginyeria de computadors (aka. Hardware). I és
que som tan poca gent que no tenim gairebé res de material disponible a altres
repositoris com *wuolah.com* o *repofibtori*.

Aquest web està 100% mantingut per estudiants de la FIB, UPC sense cap ànim de
lucre i apostant pel desenvolupament de software i hardware lliure.

<div>
  {% assign img_88x31s = site.static_files | where: "img_88x31", true %}
  {% for img_88x31 in img_88x31s %}
    <img src="{{img_88x31.path}}" align=left />
  {% endfor %}
</div>

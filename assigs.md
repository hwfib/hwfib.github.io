---
title: Assignatures
order: 10
---

## Assignatures FIB

En aquest apartat trobaràs un resum de les assignatures de la modalitat.
Especialment enfocat a estudiants de primer i segon que encara dubtin de quina
modalitat cursar. La resposta és ben senzilla, **òbviament hardware**!

### Assignatures obligatòries de modalitat

{% assign assignatures_obligatories = site.assignatures | where: 'tipus', 'Obligatoria' %}
{% for assignatura in assignatures_obligatories -%}
  ##### {{ assignatura.codi }} ({{ assignatura.nom }})
  {{ assignatura.content }}
{% endfor %}

### Assignatures optatives de modalitat

{% assign assignatures_optatives = site.assignatures | where: 'tipus', 'Optativa' %}
{% for assignatura in assignatures_optatives -%}
  ##### {{ assignatura.codi }} ({{ assignatura.nom }})
  {{ assignatura.content }}
{% endfor %}

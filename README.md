# Curvas

## Explicação

As curvas estão em curves.js.

Cada uma é uma função function **nome**(t) {...}

Estão separadas em 6 **tipos**:

* parametric: x em função de t, y em função de t

* polar: retorna o radio da curva

* explicit: x é t, y em função de t

* two curves: duas explíticas, contém x1, x2, y1, y2

* two polars: duas polares, contém r1, r2

* four curves: quatro explíticas, contém x1, x2, y1, y2

## Funcionamento

Nas linhas 34 e 35 do arquivo index.html, trocar:

* o valor de func pelo **nome** da curva desejada (valores aceitos: astroid, cardioid, ... **sem parênteses e parâmetros**)

* o valor de type pelo **tipo** da curva desejada (valores aceitos: parametric, polar, explicit, twoCurves, twoPolars, fourCurves)
# Formule Lefkowitz

La profundidad de campo es algo que los fotógrafos usamos como una herramienta para conseguir distintos resultados, podemos configurar una muy amplia con el fin tener mas detalles o muy reducida desenfocando el fondo que queda tan bien en los retratos, si queremos aproximarnos a esos detalles entre 2x a 5x es complejo, tan complejo que cuando  nos aproximamos demasiado con el lente la profundidad de campo se ve reducida drásticamente.

Nosotros como apasionados de los detalles buscamos lo que nuestros ojos apenas pueden ver, amplificarlo, llevarlos cual obras de arte ante los ojos de de aquellos que tendrán el honor de obsérvalos como nunca antes podrían haberlo hecho, pero entre mas queremos ver esos detalles, mas debemos acercarnos, entre mas nos acercamos, menos profundidad de campo tenemos, esto es tan asi que en una magnificación de 4x al enfocar un insecto como un zancudo con suerte podremos obtener detalle en una pequeña parte de su ojo. 

Una de las mejores formas de adquirir detalles sin perder calidad es usando una técnica de apilado, esta consiste en tomar muchas fotos y usar un programa para unirlas, tomando las parte mas enfocada de cada creando una sola imagen y es ahi donde inicia una de las mas grandes preguntas en esta disciplina:

 ## ¿cuantas fotos debo tomar? 
la respuesta es clara:  no sabemos, pero podemos calcularlo solo necesitamos unos cuantos datos:

## Información del lente.
- magnificación
- apertura
- distancia 

## Información de la cámara
- tipo sensor
- del circulo de confusion - este valor se encuentra según el tamaño del sensor  aps-c, full frame, etc.       

## Información de la distancia entre el lente y el sensor
- distancia real

## Formula   
``` math
Profundidad = 2 * CoC * f* ((m+1)/(m*m))

CoC = Círculo de Confusión
m = magnificación real (1X, 2X, etc.)
f = abertura (f2.8, f4, etc.)
```

## implementación

``` ts

import {CircleOfConfusion, Lefkowitz } from "formule-lefkowitz"

const aperture = 0.17;
const extension = 160;
const focalDistance = 160;
const lensMagnification  = 4;
const overlap = 10;
const typeSensor = CircleOfConfusion.apsc;
const result  = Lefkowitz({
    aperture,
    extension,
    focalDistance,
    lensMagnification,
    overlap,
    typeSensor,
})

```

# Formule Lefkowitz

## Introducción

La profundidad de campo es algo que a los fotógrafos nos complica la vida y a la vez nos apasiona, con ella podemos jugar, aveces queremos ir por una profundad de campo muy amplia con el fin obtener mas detalles como en los  paisajes o muy poca para obtener un fondo desenfocado en retratos, la profundidad de campo se hace mas compleja cuando queremos buscar esos detalles y nos  debemos aproximar demasiado con el lente, tanto que la profundidad de campo se ve afectada drásticamente.

Nosotros como apasionados de las detalles buscamos formas de sacar lo que nuestros ojos apenas pueden ver y llevarlos como obras de arte ante los ojos de de aquellos que tendrán el honor de observar esos pequeños detalles como nunca antes podrían haberlos visto, pero como anteriormente mencioné, entre mas queremos ver esos detalles, mas debemos acercarnos, entre mas nos acercamos, menos profundidad de campo tenemos, esto es tan asi que en una ampliación de 4x al enfocar un insecto con suerte podemos tomar con detalles  una pequeña parte de su ojo.

Una de las mejores formas de obtener esos detalles sin perder calidad es usando una técnica de apilado, esta consiste en tomar muchas fotos y usar un programa para unirlas y tomar la parte que enfocada de cada una y componer una sola imagen,  y es ahi donde inicia una de las grandes preguntas en esta disciplina, ¿cuantas fotos debo tomar? la respuesta es clara no sabemos, pero podríamos, solo necesitamos unos cuantos datos:

## Información del lente.
- magnificación
- apertura
- distancia 

## Información de la cámara
- tipo sensor
## Información de la distancia entre el lente y el sensor
- del circulo de confusion   - este valor se encuentra según el tamaño del sensor  aps-c, full frame, etc.


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

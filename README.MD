Rick-encuentros en la Rick fase
===============================
#### Examen DWEC Dual Diciembre 2018

Rick y Morty se mueven entre distintas dimensiones disparando una pistola de portales mientras son perseguidos por clones de sí mismos.

Jerry conoce a Dofous-Rick, que es una mezcla entre él mismo y Rick.


## Instrucciones

- Crea un **repositorio en GitHub**.

- Realiza **_commits_** periódicamente mientras avanzas en el desarrollo de la aplicación y **publica tu solución en el repo creado en GitHub**. Sin estos dos requisitos, el examen no se corrige.

- No olvides configurar git en tu equipo para que el autor de los _commits_ seas tú.

- Envíame tu proyecto comprimido en un **ZIP** a gelpiorama@gmail.com

- Divide el proyecto en los módulos que estimes necesarios para garantizar la modularidad, la reutilización y el testing de los componentes.

## Programa principal y casos test

El _script_ principal `main.js` está compuesto por los test que de cada clase /función se proponen.

En cada una de las secciones del `main.js` escribe el código necesario para pasar los casos test de dicha sección. Este código invocará a los módulos con las funciones que necesites.


# Historias de usuario


## Personajes

### Rick

- Crea al objeto **Rick** de la Tierra, el prototipo de todos los demás. 
- Tiene un identificador `id` con valor `C-137` 
- Tiene `altas` frecuencias cerebrales. 
- Cuando `habla` dice `"Es Rick-dículo!"`.
- `dispara` la pistola de portales o `portal gun`.
- Es el `prototipo` del resto de Ricks.
- Asegúrate de que es único.

### Morty

- Crea al objeto **Morty**. 
- Tiene un `id` con valor `"earthMorty"`. 
- Emite `bajas` frecuencias cerebrales.
- Cuando `habla` dice `"Oohh man!"`.
- Su _partner_ (compañero) es el Rick de la Tierra. 
- Es el `prototipo` del resto de Morties.
- Asegúrate de que es único.


### Jerry

- Crea al objeto **Jerry**. 
- Tiene un `id` con el valor `"Jerry"`. 
- Posee una **colección de 4 monedas de R2-D2** en las que figura la inscripción "R2-D2". Las monedas son `string`.
- Encapsula el acceso a la colección de monedas con una función get.
- Cuando `habla` dice `"Tengo una colección de monedas antiguas raras!"`. Vídeo 1:54.
- Asegúrate de que es único.


### Clones

- Los clones de Rick no pueden tener su mismo `id` y entre ellos ha de ser distinto.
- Cada rick-clon tiene como `id` un número mayor que 137 que se genera automáticamente.
- Cada clon de Morty ha de tener como partner a un Rick.


## Mundos y dimensiones


### El universo

Los rick-clones se mueven por los distintos mundos y dimensiones pero todos forman parte del mismo universo.

- Crea un **objeto** JavaScript `universo` al que irás añadiendo todas las dimensiones y mundos por las que pasarán Rick y Morty. Lee el epígrafe _7.11 Array-Like Objects_ del libro del rinoceronte para la cuestión de la longitud ;)  

- Por cada mundo o dimensión, crea un `Array` que contenga a todos los personajes que accedan a él (cada personaje es un objeto).

- Crea la primera dimensión, el `Array` mundo `tierra`, mete en él a los tres objetos que has creado (Rick, Morty y Jerry) y añádelo al objeto `universo`.


## The portal gun

- Cada vez que Rick `dispara` la pistola de portales, se crea el acceso a una nueva dimensión / mundo (un `Array` para nosotros). Esa dimensión se añade al `universo` (y se actualiza su longitud). Vídeo 5:41.

- Cuando Rick, Morty y sus perseguidores cruzan el portal, has de eliminarlos del mundo actual y meterlos en el nuevo `array` mundo. Recuerda que siempre están en el objeto `universo`. Vídeo 5:41.

- Posee una función `scan` que lista el historial de dimensiones por las que ha pasado su propietario de la más reciente a la más antigua. Vídeo 4:45.
  + Cada dimensión es un `string` con su nombre.
  + La función `scan` usa la función `get historial()` para obtener el array de dimensiones.  


## Cruzando dimensiones

Es necesario que programes una función `cruzarDimension` para ser reutilizada cada vez que un personaje cruza de dimensión.

Puedes situarla en aquel componente que estimes más adecuado.

## Doofus Rick
 
- Es una mezcla entre Jerry y un clon de Rick, de modo que tiene todas las propiedades
de ambos.
- Las propiedades que comparten se quedan con el valor de las de Jerry.
- Tiene el `id` `"J-19-Z7"`.

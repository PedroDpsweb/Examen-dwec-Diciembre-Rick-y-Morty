
    
/** 
 * Importa los módulos de tus clases 
 */


/**
 * Crea el objeto Rick
 */

var  protoRick= {
    id:"C-137",
    ondas:"altas",
    habla: "Es Rick-dículo!"
};





console.assert(protoRick);
console.assert(protoRick.id == "C-137");
console.assert(protoRick.ondas == "altas");
console.assert(protoRick.habla == "Es Rick-dículo!");

/**
* Crea el objeto Morty
*/

var  protoMorty= {
    id:"earthMorty",
    ondas:"bajas",
    partner: protoRick,
    habla: "Oohh man!"
};

console.assert(protoMorty);
console.assert(protoMorty.id == "earthMorty");
console.assert(protoMorty.ondas == "bajas");
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla == "Oohh man!");


/**
* Crea el objeto Jerry
*/

var  jerry= {
    id:"Jerry",
    monedas:["R2-D2",1,2,3],
    speak: () => "Tengo una colección de monedas antiguas raras!"
};

console.assert(jerry);
console.assert(jerry.id = "Jerry");
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == "R2-D2");
console.assert(jerry.speak() == "Tengo una colección de monedas antiguas raras!");

/**
* Crea 2 Rick-clones y 1 clon de Morty
* y asocia como partner de ese Morty a uno de los Rick-clones.  
*/

var clonRick = Object.create(protoRick);
var clonRick = Object.create(protoRick);

console.assert(clonRick);
console.assert(protoRick != clonRick);
console.assert(Object.getPrototypeOf(clonRick) == protoRick);
console.assert(clonRick.id != "C-137");
console.assert(clonRick.ondas == "altas");
console.assert(clonRick.habla == "Es Rick-dículo!");

console.assert(otroRick);
console.assert(protoRick != otroRick);
console.assert(Object.getPrototypeOf(otroRick) == protoRick);
console.assert(otroRick.id != "C-137");
console.assert(otroRick.ondas == "altas");
console.assert(otroRick.habla == "Es Rick-dículo!");

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);
console.assert(clonMorty.ondas == "bajas");
console.assert(clonMorty.partner == clonRick);



/**
* Crea el objeto universo
*/

console.assert(universo);
console.assert(Object.getPrototypeOf(universo) != Array.prototype);
console.assert(universo.length == 0);

/**
* Crea la primera dimensión, el `Array` mundo `Tierra`, 
* mete en él a los 6 objetos que has creado (Rick, Morty y Jerry, 
* 2 rick-clones y 1 clon de Morty) y añádelo al objeto `universo`.
*/

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert("Tierra" in universo);
console.assert(universo.length == 1);

/**
* Crea el objeto portal gun / pistola de portales.
* 
* Dale la pistola al protoRick para que la dispare.
* Pon a la tierra en el principio del historial de dimensiones de la pistola.
* 
* Rick dispara la pistola y se añade al universo la dimensión "Fart"
*  */

console.assert(gun);
console.assert(gun.historial.length == 1);

console.assert("Fart" in universo);
console.assert(universo.length == 2);

/**
* Todos SALVO Jerry cruzan a la dimensión "Fart".
* Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
* 
* Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
* Puedes situarla en aquel componente que estimes más adecuado.
* 
* La pistola añade a su historial "Fart".
*/

console.assert(universo["Fart"].length == 5);
console.assert(universo["Tierra"].length == 1);
console.assert(gun.historial.length == 2);

/**
* Si haces un scan de la pistola, se muestra en consola
* la lista de dimensiones, desde la más reciente a la más
* antigua: Fart, Tierra.
*/

console.log(gun.scan());
console.assert(gun.historial.length == 2);


/**
* Rick dispara la pistola y se añade al universo la dimensión "Coaches".
*/

console.assert("Coach" in universo);
console.assert(universo.length == 3);

/**
* Los cuatro cruzan a la dimensión "Coach".
* 
* Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
* 
* La pistola añade a su historial "Fart".
* 
* Si haces un scan de la pistola, se muestra en consola
* Coaches, Fart, Tierra.
*/

console.assert(universo["Coaches"].length == 5);
console.assert(universo["Fart"].length == 0);
console.assert(universo["Tierra"].length == 1);
console.log(gun.scan());
console.assert(gun.historial.length == 3);



/**
* Crea un Doofus Rick segun se indica en el README
*/

console.assert(doofous);
console.assert(doofous.id == "J-19-Z7");
console.assert(doofous.ondas == "altas");
console.assert(doufus.monedas.length == 4);
console.assert(doufous.speak() == "Tengo una colección de monedas antiguas raras!");


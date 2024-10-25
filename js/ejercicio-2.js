// Crea un vector con los numeros del 1 al 5. Luego elimina el numero que esta en la posicion 2 y recorre el vector.

let numeros = [];

numeros.push("1");
numeros.push("2");
numeros.push("3");
numeros.push("4");
numeros.push("5");

numeros.splice(2, 1);

console.log(numeros);

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
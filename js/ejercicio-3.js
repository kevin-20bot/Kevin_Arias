// Escribe un programa que recorra un vector de animales y que muestre solo los que tenga mas de 5 letras en su nombre

let animales = ["Leon", "Tortuga", "Perro", "Gato", "Aguila"];


// Recorrer vector
for(let i = 0; i < animales.length; i++) {
    // Validar que el animal tenga + de 5 letras
    if(animales[i].length > 5) {
        console.log(animales[i]);
     }
}
    
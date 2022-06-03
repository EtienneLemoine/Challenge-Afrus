var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 100, 1000, 1212];

var total = numeros.length;

var pares = 0;
var impares = 0;
var mayores = 0;
var menores = 0;

for (var i = 0; i < total; i++) {
    if (numeros[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }

    if (numeros[i] > 1000) {
        mayores++;
    } else {
        menores++;
    }
}

console.log("Cantidad de elementos del arreglo: " + total);
console.log("Porcentaje de números pares: " + (pares * 100 / total) + "%");
console.log("Porcentaje de números impares: " + (impares * 100 / total) + "%");
console.log("Porcentaje de números mayores a 1000: " + (mayores * 100 / total) + "%");
console.log("Porcentaje de números menores a 1000: " + (menores * 100 / total) + "%");
console.log("El número mayor es: " + Math.max(...numeros));
console.log("El número menor es: " + Math.min(...numeros));
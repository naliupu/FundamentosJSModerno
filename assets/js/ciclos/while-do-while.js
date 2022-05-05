const carros = ["Toyota", "Mazda", "Ford", "Chevrolet", "Jeep"];

let i = 0;
// while (i < carros.length) {
//   console.log(carros[i]);
//   // i = i + 1;
//   i++;
// }

console.warn("While");
while (carros[i]) {
  console.log(carros[i]);
  i++;
}

console.warn("DO - While");

let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);

let i = 3;
while (i) {
  alert( i-- );
} //1

for (let i = 0; i < 5; ++i) alert( i );
for (let i = 0; i < 5; i++) alert( i ); //from 0 to 4
//
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
//
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
//

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
//
For each i in the interval {
  check if i has a divisor from 1..i
  if yes => the value is not a prime
  if no => the value is a prime, show it
}
// Massiv Masalalar

// 1-masala
// let vegetables = ["Cucumber", "tomato", "potato", "pumpkin"];
// console.log(vegetables[0]);
// console.log(vegetables[3]);

// 2-masala

// let fruits = ["banana", "apple" , "apricot" , "peach" , "changer"];
// fruits[4] = "Salom";
// console.log(fruits);

// 3-masala

// let fruits = []
// fruits[0] = "Banana";
// fruits[1] = "Apple" ;
// fruits[2] = "Lemon" ;
// console.log(fruits);

// 4-masala

// let phones = ["Iphone" , "Samsung" , "Redmi" , "Poco" , "Infinix"];
// console.log(phones.length);

// 5-masala

// let computers =["Mackbook", "Acer", "Samsung" ] ;
// computers.push("Linux");
// console.log(computers);

// 6-masala

// let people = ["introvert" , "extrovert" , "ambiavent"];
// people.pop();
// console.log(people);

// 7-masala

// let emotions = ["sad" , "happy" , "funny", ];
// emotions.unshift("loser");
// console.log(emotions);

// 8-masala

// let currencies = ["dollar", "euro", "soums", "won", "Singapore dollar"];
// currencies.shift()
// console.log(currencies);

// 9-masala

// let numbers = [2,4,6,7,8,9];
// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// 10-masala

// let massive = [12, 34, "salom", "xayr", true, false];
// let value = prompt("Qiymatni kirting");
// let has = false

// for (let i = 0; i < massive.length; i++) {
//     if (value === massive[i]) {
//         has = true;
//     }
// }
// if (has) {
//     console.log("Mavjud");
// } else console.log("Mavjud emas");

// Forga oid masalalar

// 1-masala


// let numbers = [12, 34, 234, 233, 12, 1, 3, 4, 12, 10];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// 2-masala

// let fruits = ["apple" , "apricot" , "peach", "strawberry", "cherry"];
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// 3-masala

// let numbers = [12, 23, 34, 23, 12, 56, 23, 86, 2, 45,];
// for (let i = 0 ; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }

// 4-masala

// let numbers = [123,145,125,632,134,1334,543,12,134,];
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 1 ) {
//         console.log(numbers[i]);
//     }
// }

// 5-masala

// let numbers = [-2344, -5322, 234, 23, 45, -46, -89, -900, 123, 987];
// for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         console.log(numbers[i]);
//       }
// }

// 6-masala

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i = numbers.length; i > 0 ; i-- ) {
//     console.log(numbers[i]);
// }

// 7-masala

// let numbers = [1,4,5,6,7,6,4,3,2,3,34,];
// let sum = 0;

// for (let i = 0 ; i < numbers.length; i++ ) {
//    sum = sum += numbers[i];
// }
// console.log(sum);

// 8-masala

// let numbers = [2,4,6,8] ;
// for (let i = 0 ; i < numbers.length ; i++) {
//      numbers[i] = numbers[i] ** 2;
//      console.log(numbers[i]);
// }

// 9-masala

// let massiv = [10, 5, 20, 35, 15];
// let katta = massiv[0]; 

// for (let i = 1; i < massiv.length; i++) {
//   if (massiv[i] > katta) {
//     katta = massiv[i];
//   }
// }
// console.log(katta);

// 10-masala

// let massiv = [10, 5, 20, 35, 15];
// let kichik = massiv[0]; 

// for (let i = 1; i < massiv.length; i++) {
//   if (massiv[i] < kichik) {
//     kichik = massiv[i];
//   }
// }
// console.log(kichik);

// 11-masala

// let manfiy = [-332,-553,43,-344,65,-77];
// for (let i = 0 ; i < manfiy.length; i++) {
//     if (manfiy[i] < 0) {
//         console.log(manfiy[i]);
//     }
// }

// 12-masala

let numbers = [12,-34,56,-1,345,-34];
let sum = 0;
for(let i = 0 ; i < numbers.length; i++) {
    if (numbers[i] > 0 ) {
        sum = sum + numbers[i]
    }
}
console.log(sum);


































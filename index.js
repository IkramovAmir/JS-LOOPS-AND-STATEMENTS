// JS-LOOPS-AND-STETEMENTS TASKS

// 1
// let n = 15;
// for (let i = 0; i <= n; i++ ) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// -----------------------------------------------------

// 2
// let n = 15;
// let countEven = 0;
// for (let i = 0; i <= n; i++ ) {
//     if (i % 2 == 0) {
//         countEven += i;
//     }
// }
// console.log(countEven);

// -------------------------------------------------------

// 3
// let n = 15;
// for (let i = n; i > 0; i--) {
//     console.log(i);
// }

// -----------------------------------------------------

// 4
// let n = 15;
// let multiplyOdd = 1;
// for (let i = 0; i <= n; i++) {
//     if (i % 2 != 0) {
//         multiplyOdd *= i;
//     }
// }
// console.log(multiplyOdd);

// --------------------------------------------------------

// 5
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// --------------------------------------------------------

// 6
// let str = "Hello World";
// let countAlphabet = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//         countAlphabet += 1;
//     }
// }
// console.log(countAlphabet);

// ------------------------------------------------------------------

// 7
// let str = "Hello World";
// let newStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
// }
// console.log(newStr)

// ------------------------------------------------------------------

// 8
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 != 0) {
//         console.log(i);
//     }
// }

// -----------------------------------------------------------------------

// 9
// let n = 456;
// n = String(n);
// console.log(n.length)

// --------------------------------------------------------------------

// // 10
// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i))
// }

// ------------------ Additional ----------------------------------

// 1
// let firstNumber = 20;
// let secondNumber = 2;
// let divade = firstNumber / secondNumber;
// if (divade % 2 == 0) {
//     console.log("result is even number");
// } else console.log("result is odd number");

// ----------------------------------------------------------------

// 2
// let n = 190;
// if (n > 100) {
//     console.log("Higher than 100");
// } else console.log("Lower than 100");

// ---------------------------------------------------------------------

// 3
// let eyeHealth = true;
// let driverLicense = true;

// if (eyeHealth && driverLicense) {
//     console.log("Ishga qabul qildingiz");
// } else console.log("Qabul qilinmadingiz!");

// ----------------------------------------------------------------------

// 4
// let traficLight = 'green';
// let peopleONTheCross = true;
// if (traficLight == 'green' && peopleONTheCross) {
//     console.log("O'tishingiz mumkin!");
// } else if (!(peopleONTheCross)) {
//     console.log("Odamni o'tkazib yuboring!");
// } else if (traficLight != 'green') {
//     console.log("Yashil yonishini kuting!");
// }

// -------------------------------------------------------------------------

// 5
// let examResult = 78;
// if (examResult < 60) {
//     console.log("Yiqildingiz!");
// } else if (examResult >= 60 && examResult < 70) {
//     console.log("Super kontrakt")
// } else if (examResult >= 70 && examResult < 80) {
//     console.log("kontrakt")
// } else {
//     console.log("Budjet");
// }
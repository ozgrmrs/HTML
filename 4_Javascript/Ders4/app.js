// let score = 85;
// // let grade = score >= 50
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
// // console.log('ders bitti'); */
// // Ternary If else
// /* let score = 49;
// score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
//                console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */
// /* let username = 'Mark';
// username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */
// // if (score >= 80) { 
// //     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// // }else if (score >= 50) {
// //     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// // }else{
// //     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// // }
// /* let score = prompt(' Sınav notunu gir : ')
// score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
//    (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
//    console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))
//  */
// let username
// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29

 
// var day = prompt("please enter a day");
// switch(day){
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "saturday":
//         message = "In Class";
//         break;
//     case "tuesday":
//     case "friday":
//         message = "TW";
//         break;

//     case "Sunday":
//         message = "offday";
//         break;
//     default :
//         message =" not defined"
//     console.log(message);        


// }
// var day = prompt("Day?:");
// var message;
// switch (day.toLowerCase()) {
//   case "monday":
//   case "wednesday":
//   case "friday":
//   case "saturday":
//     text = "Inclass";
//     break;
//   case "thursday":
//   case "tuesday":
//     text = "Workshop";
//     break;
//   case "sunday":
//     text = "tatil";
//   default:
//     text = "Invalid Entry...";
// }
// console.log(text);
// let password = "pass"
// if(password.length >=){
//     console.log('that is strong');
//     }else {
//     console.log('pass is not enough');
//     }


// loops
// let i = 0;
// let sum = 0;
// while (i < 11) {
//     sum +=i;
//     i++    
// }
// // console.log(sum);
// do {
//     sum += i;
//     i ++;
//     }
//     while (i < 8 );
//     console.log(sum);
//     /1- 100 arası fizz buzz
// for (let i=0; i<=100; i++; if(i%3 == 0);
// console.log("fizz");
// if(i%5 == 0);
// console.log("buzz");
// if(i%15 == 0);
// console.log("fizzbuz");

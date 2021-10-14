console.log("hello world")
console.log("see"+" on" + " liitlause")
console.log("2016"+" aastal"+" valiti"+" Eesti"+" presidendiks"+" Kersti Kaljulaid")
console.log("2016 aastal valiti Eesti presidendiks Kersti Kaljulaid")


let x = 52;
let y = 11;
let z = x + y;

document.getElementById("demo").innerHTML =
    "The value of z is: " + z;
//  console.log("see"+" on" + " kommentaar")  üherealine kommentaar

/* Mitmerealine kommentaar

console.log("hello world")
console.log("see"+" on" + " liitlause")

 */

// muutuja ja andmetüübid
// 1. deklareerimine
// let muutujanimi
// 2. väärtuse omistamine
// muutujanimi = väärtus

let aasta
aasta = 2016
let presidnet
presidnet = " Kersti Kaljulaid"
console.log(aasta + ". Eesti presidendiks valiti" + presidnet)

document.getElementById("president").outerHTML =
    aasta + ". Eesti presidendiks valiti" + presidnet;

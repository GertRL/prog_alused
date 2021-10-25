var nimi = window.prompt("Sisetage nimi: ");  // küsib kasutajalt nime
var num1 = window.prompt("Sisesta lubatud sõidukiirus: "); // küsib kiirusepiirangu
var num2 = window.prompt("Sisetage tegelik kiirus: ");// küsib mis oli tegelik kiirus

/// Arvutab kasutaja poolt antud andmetega trahvi

let tulemus = (num2-num1)*3 //

let vastus = Math.min(190, tulemus);



/// annab kasutajale trahvi teada
alert(nimi + " teie trahv on" + vastus +" €")
console.log(vastus);  // kuvab vastuse konsooli
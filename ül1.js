var num1 = window.prompt("Sisesta üks naturaalarv: ");  // küsib kasutajalt algarvu
var num2 = window.prompt("Sisesta selle arvu astendaja: ");  // küsib kasutajalt astendaja
let vastus;  // salvestame siia vastuse

/// astendab kasutaja poolt antud arvu
vastus = Math.pow(num1,num2);   // math liidese pow osa astendab

/// annab kasutajale teada vastuse
alert(num1 + " astmes " + num2 + " vastus on: " + vastus)
console.log(vastus);  // kuvab vastuse konsooli

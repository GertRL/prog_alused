var num1 = window.prompt("Sisetage ainepunktide arv: ");  //  küsib ainepunktide arvu
var num2 = window.prompt("Sisesta nädalate arv: "); //  küsib nädalaid


let ajakulu = (num1 * 26) //korrutab ainepunktide arvu tundidega , kus 1 ainepunkt on 26 tundi

let vastus = Math.trunc(ajakulu / num2)  // Jagab ainepunktidele kuluva aja nädalatega

///
alert("Ajakulu "+ vastus + " tundi nädalas")
console.log("Ajakulu "+ vastus + " tundi nädalas");  //
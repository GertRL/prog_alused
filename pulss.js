let vanus = prompt("Kui vana te olete: ");

let sugu = prompt("Sisesta enda sugu m/M või n/N: ");

let trenn = prompt("Mis treeningut te soovite (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)");


/*
while (!/^[0-3]+$/.test(trenn)) {
    alert("See ei ole korrektne vastus.");
    trenn = prompt("Sisestage soovitud trenni number: ");
*/


//Arvutiab maksimaalse pulsi

if (sugu == "m" || "M") {
   var pulss =(220 - vanus );

} else  {
   var pulss = Math.round(( 206 - (vanus /100 *88 )));

}
console.log("Te olete "+ vanus + " aastat vana")
console.log("Sugu on: "+ sugu )
console.log("Trenni tüübiks valisite: " + trenn);




if (trenn == 1) {                                       // tervisetreening 50-70% maksimaalsest pulsisagedusest
    var miinimum = 50;
    var minprotsent = Math.round((miinimum / 100) * pulss);

    var maksimum = 70;
    var maxprotsent = Math.round((maksimum / 100) * pulss);
    alert("Tervisetreeningu jaoks peaks teie pulss jääm "+ minprotsent + " kuni " + maxprotsent +" vahele.");

    console.log("Tervisetreeningu jaoks peaks teie pulss jääm "+ minprotsent + " kuni " + maxprotsent +" vahele.");
} else if (trenn == 2) {                                 // põhivastupidavuse treening 70-80% maksimaalsest pulsisagedusest,
    var miinimum = 70;
    var minprotsent = Math.round((miinimum / 100) * pulss);

    var maksimum = 80;
    var maxprotsent = Math.round((maksimum / 100) * pulss);
    alert("Põhivastupidavuse jaoks peaks teie pulss jääm " + minprotsent + " kuni " + maxprotsent +" vahele.");

    console.log("Põhivastupidavuse jaoks peaks teie pulss jääm " + minprotsent + " kuni " + maxprotsent +" vahele.");
}  else if (trenn == 3) {                               // intensiivne aeroobne treening 80-87% maksimaalsest pulsisagedusest.
    var miinimum = 80;
    var minprotsent = Math.round((miinimum / 100) * pulss);

    var maksimum = 87;
    var maxprotsent = Math.round((maksimum / 100) * pulss);
    alert("Intensiivse trenni jaoks peaks teie pulss jääm " + minprotsent + " kuni " + maxprotsent +" vahele.");

    console.log("Intensiivse trenni jaoks peaks teie pulss jääm " + minprotsent + " kuni " + maxprotsent +" vahele.");
} else {
}



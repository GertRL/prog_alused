
let valimine = prompt("Kas soovite istekohta ise valida (ise) või loosida (loos)");

// LOOSIMINE


if (valimine == "loos") {
function A() {
    console.log('Istekoht loositi: Vahekäigukoht')
}

function B() {
    console.log('Istekoht loositi: Aknakoht')
}
    console.log ("Valisite loosi")

var list = [
    {chance: 0.66, func: A},                    // 2/3 võimalus et tuleb Aknakoht
    {chance: 0.33, func: B},                    // 1/3 võimalus et tuleb Vahekäigukoht

];
function callRandomFunction(list) {
    var rand = Math.random()                    // Genereerib numbri 0 ja 1 vahel
    var accumulatedChance = 0

    var found = list.find(function (element) {
        accumulatedChance += element.chance
        return accumulatedChance >= rand
    })




    if( found ) {
       console.log()
       found.func()
    } else {
        console.log()
    }

}
callRandomFunction(list)
}
if (valimine == "ise") {
    let asukoht = prompt("Kas soovite istekohta aknaääres " + ("(aken) ") + "või mitte " + ("(muu)"));
    console.log("Soovisite ise valida")
    if (asukoht == "aken") {

        console.log('Valisite ise: aknakoht')

    } else {
        console.log("valisite ise: vahekäigukoha")
    }


}


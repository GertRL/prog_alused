//tüübiteisendused

let val ;
// numbrid---- tekst
val = String(55)
val = String(20+84)



// Tõeväärtused ----tekst

val = String(true)


/// objekt ---tekst

val = String(new Date());
val = String([1,2,3,4])


// toString()
val = (5).toString()
val=(true).toString()


// tekst ----number

val= Number("5") ;
val= Number("5.7");
val= Number("Tere");  /// Ei ole võimalik
val= Number(false); /// 0
val= Number(true); /// 1
val= Number(null);  /// 0
val= Number([1,2,3,4,5,6]); //// ei ole võimalik


console.log(typeof val);
console.log(val);

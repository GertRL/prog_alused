let pöialpoisid = prompt("Mitu pöialpoissi soovib õunu? [0-7]: ")

console.log("Mitu pöialpoissi tahtis õunu: "+pöialpoisid)

let õunad_kokku = 14

/// leiab ja väljastab eraldi ridadele, mitu õuna saab iga pöialpoiss (programm genereerib iga kord juhuslikult arvu 1 või 2);

for (let i = 1; i <= pöialpoisid; i++) {
    let õunad = Math.floor(Math.random() * 2) +1
    õunad_kokku = õunad_kokku - õunad
    console.log(i + ". pöialposs sai " + õunad)

}

//// leiab ja väljastab eraldi reale, mitu õuna jääb Lumivalgekesele.... 14 õuna on kokku


console.log("Lumivalgekesele jäi alles " + õunad_kokku + " õuna")
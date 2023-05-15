//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).
//Questo richiederà un minimo di ricerca.//


let kilometers = parseInt(prompt("Type how many km you want to travel")); 
let passengersAge = parseInt(prompt("Type your age")); 


(kilometers) *= 0.21;












 if (passengersAge < 18) {

    (kilometers) = kilometers - (20 / 100 * kilometers)


} else if (passengersAge > 65) {

    (kilometers) = kilometers - (40 / 100 * kilometers)
}

kilometers = kilometers.toFixed(2)



document.getElementById("price").innerHTML = "prezzo del biglietto del treno: " + kilometers;







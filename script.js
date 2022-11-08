let fname = document.getElementById("name");

let eta = document.getElementById("age");

let km = document.getElementById("km");

let cost = 0.21; 

let price

let genera = document.getElementById("genera");

let nameOutput = document.getElementById("name-output");

let ticketType = document.getElementById("ticket-type");

let wagon = document.getElementById("wagon");

let code = document.getElementById("code");

let priceOutput = document.getElementById("price");

let ticket

genera.addEventListener("click",
    function () {
        price = cost * km.value

        if (fname.value == "") {

            alert("Inserisci nome e cognome, perfavore")

        } else {

            if (eta.value === "minorenne") {
                price -= price * 0.20;
                ticket = "Biglietto scontato del 20%" 
            } else if (eta.value === "senior") {
                price -= price * 0.40;
                ticket = "Biglietto scontato del 40%" 
            } else {
                ticket = "Biglietto standard" 
            }

            nameOutput.innerHTML = fname.value

            ticketType.innerHTML = ticket

            wagon.innerHTML = Math.floor(Math.random() * 10) + 1;

            code.innerHTML= Math.floor(Math.random() * 90000) + 10000;

            priceOutput.innerHTML = price.toFixed(2) + "€"
        }

    }
)
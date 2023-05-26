function getGreeting() {
    // Laver et array til alle mine Greetings
    let text = ["Godmorgen!","Godformiddag!", "Godmiddag!","Godeftermiddag!","Godaften!","Godnat!"];

    // Tiden
    let time = new Date().getHours();

    // Laver en variable til at opbevare alle
    let greeting;

    // Tid mellem 06:00-09:00
    if (time >= 6 && time < 9) {
        // set greeting to good morning
        greeting = text[0];
    }
    // Tid mellem 09:00-12:00
    else if (time >= 9 && time < 12) {
        // Lad greeting blive Godformidag
        greeting = text[1];
    }
    // Tid mellem 12:00-15:00
    else if (time >= 12 && time < 15) {
        // Lad greeting blive Godmiddag
        greeting = text[2];

    }   
    //Tid mellem 15:00-18:00 
    else if (time >= 15 && time < 18) {
        // Lad greeting blive Godeftermiddag
        greeting = text[3];
    }
    
    // Tid mellem 18:00-00:00
    else if(time >= 18 && time < 24){ 
        // Lad greeting blive Godaften!
        greeting = text[4];
    }
    else{
        // Lad greeting blive Godnat! udenfor tidspunkterne.
        greeting = text[5];
    }

    // return greeting
    return greeting;
}

// get element med id hilsen
document.getElementById("hilsen").innerHTML = getGreeting();

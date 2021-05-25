function genereerTafel() {
    var antwoordVeld = document.getElementById("tafel-antwoord");
    antwoordVeld.value = "1 x 1 = 1";
    
    return false; // We moeten false returnen, om te voorkomen dat de browser de pagina herlaad.
}
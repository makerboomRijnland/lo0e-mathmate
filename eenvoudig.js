function genereerTafel() {
    var vermenigvuldigtal = document.getElementById("tafel-vermenigvuldigtal").value; // De invoer van de gebruiker
    var antwoordVeld = document.getElementById("tafel-antwoord");

    var product = 1 * vermenigvuldigtal;  // We rekenen het product uit van 1 vermenigvuldiging
    var vermenigvuldiging = "1 x " + vermenigvuldigtal + " = " + product; // Dit is de tekstuele berekening die we kunnen toevoegen aan het antwoordveld.
    antwoordVeld.value = vermenigvuldiging;

    return false; // We moeten false returnen, om te voorkomen dat de browser de pagina herlaad.
}
//1. Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".

var fName = 'Gabriele'
if (fName < 5) {
  console.log("Short name")
} else {
  console.log("Long name")
}

//2. Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.

var clientAge = prompt("What is clients age?")
var legalAge = 18
if (clientAge < 18) {
    alert("Can't drive")
    console.log("Can't drive")
} else {
    alert("Can drive")
    console.log("Can drive")
}

//3. Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

//DAR BANDAU PERDELIOTI CIA KAD VEIKTU TEISINGAI :)

var clientAge = prompt("What is clients age?")
var legalAge = 18


if (clientAge < 0 && clientAge >= 120) {
    alert("Invalid Age")
    console.log("Invalid Age") 
}
    else if  (clientAge == 0  && clientAge <18  ) {
    alert("Can't drive")
    console.log("Can't drive")
}  else if 
    (clientAge == 18  && clientAge <120) {
    alert("Can drive")
    console.log("Can drive")
}



//4. Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas

var phone = 'iPhone'
var isIphoneUser 

console.log(isIphoneUser === 'iPhone')


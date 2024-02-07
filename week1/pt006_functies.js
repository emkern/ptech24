/* Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen */

/* OPDRACHT 1: Toon een Groetbericht */
// Schrijf een functie-expressie met de naam toonGroet die een groetbericht naar de console logt. De functie accepteert één parameter, naam, en toont een groetbericht met de opgegeven naam.

// function toonGroet(naam) {
//     //console.log("hallo " + naam)
//     console.log(`hallo ${naam}`)
// }

let toonGroet = (naam) => console.log(`hallo ${naam}`)

toonGroet("michael")

/* OPDRACHT 2: Tel getallen op en log het resultaat */
// Schrijf een functie-expressie met de naam telOpEnLog die twee getallen optelt en het resultaat naar de console logt. De functie accepteert twee parameters, getal1 en getal2, telt ze op en logt het resultaat.

let telOpEnLog = (getal1, getal2) => console.log(getal1+getal2)

telOpEnLog(1,2)

// Onderstaande opdrachten vereisen het gebruik van het return sleutelwoord

/* OPDRACHT 3: Bereken de Oppervlakte van een Rechthoek */
// Schrijf een functie-expressie met de naam `berekenOppervlakteRechthoek` die de oppervlakte van een rechthoek berekent. De functie accepteert twee parameters, `lengte` en `breedte`.

let berekenOppervlakteRechthoek = (lengte,breedte) => console.log(lengte*breedte)

berekenOppervlakteRechthoek(2,4)

/* OPDRACHT 4: Bepaal of een Getal Even is */
// Schrijf een functie-expressie met de naam `isEven` die controleert of een gegeven getal even is. De functie accepteert één parameter, `getal`.

let isEven = (getal) => getal%2 == 0

console.log(isEven(3))

/* OPDRACHT 5: Concateneer Twee Strings */
// Schrijf een functie-expressie met de naam `concateneerStrings` die twee strings concateneert. De functie accepteert twee parameters, `string1` en `string2`.

let concateneerStrings = (string1, string2) => console.log(string1 + ' ' + string2)

concateneerStrings("halli", "hallo")

/* OPDRACHT 6: Herschrijf functies uit opdracht 1 en 5 naar een arrow functie */

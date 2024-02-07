/* Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen */

/* OPDRACHT 1: For loop - Tel tot 5 */
// Schrijf een for-loop die de getallen van 1 tot 5 logt naar de console.

for(let i = 0; i < 5; i++) {
    console.log(i)
}

/* OPDRACHT 2: For loop - Maak de tafel van 3 */
// Schrijf een for-loop die de tafel van 3 logt naar de console (van 3 tot 30).

for (let i = 0; i < 30; i = i+3) {
    console.log(i)
}

/* OPDRACHT 3: While loop */
// Programmmer de herhalingen van opdracht 1 met een while loop

let i = 0

while(i < 5) {
    console.log(i)
    i++
}

/* OPDRACHT 4: While loop */
// Programmmer de herhalingen van opdracht 2 met een while loop

let x = 0

while (x < 30) {
    console.log(x)
    x = x+3
}

/* OPDRACHT 5: For ... of loop - Log kleuren */
// Gegeven een array met kleuren (['rood', 'groen', 'blauw']), schrijf een for...of-loop om elke kleur naar de console te loggen.

let kleuren = ['rood', 'groen', 'blauw']
 
// for (i = 0; i < kleuren.length; i++) {
//     console.log(kleuren[i])
// }
 
for (kleur of kleuren) {
    console.log(kleur)
}

/* OPDRACHT 6: For ... of loop - Lengte van elk woord */
// Gegeven een array met woorden, schrijf een for...of-loop om de lengte van elk woord naar de console te loggen.

let woorden = ['appel', 'banaan', 'kiwi']

for (woord of woorden) {
    console.log(woord.length)
}

/* OPDRACHT 7: For ... in loop - Log Eigenschappen */
// Gegeven een object met eigenschappen, schrijf een for...in-loop om elke eigenschap naar de console te loggen.

let persoon = { naam: 'John', leeftijd: 25, stad: 'Amsterdam' }

for (eigenschap in persoon) {
    console.log(eigenschap + ' ' + persoon[eigenschap])
}

/* OPDRACHT 8: For ... in loop - Log waarden */
// Gegeven een object met eigenschappen, schrijf een for...in-loop om elke eigenschap naar de console te loggen.

let telefoon = { merk: 'Samsung', model: 'Galaxy', jaar: 2022 }

for (eigenschap in telefoon) {
    console.log(eigenschap + ' ' + telefoon[eigenschap])
}
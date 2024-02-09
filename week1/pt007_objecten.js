/* Met de toetscombinatie [CMD] + [/] kun je '//' voor de regel weghalen en terugplaatsen */

/* OPDRACHT 1: Definieer een object */
// Definieer een eenvoudig object met de naam persoon dat de eigenschappen naam en leeftijd heeft. Geef het object de waarden "John" voor naam en 30 voor leeftijd.

let persoon = {
    naam: "John",
    leeftijd: 30
}


/* OPDRACHT 2: Uitbreiding */
// Breid het object persoon uit met verschillende soorten eigenschappen, zoals een string, een numerieke waarde, een boolean, en een array.

persoon = {
    naam: "John",
    leeftijd: 30,
    moe: true,
    hobbies: ["voetbal", "muay thai"]
}


/* OPDRACHT 3: Dot & bracket notation */
// Gebruik zowel dot notatie als bracket notatie om de waarde van de naam-eigenschap van het persoon-object op te halen en naar de console te loggen.

// console.log(persoon["naam"])
console.log(persoon.naam)

/* OPDRACHT 4: Methode */
// Voeg een methode verjaardagVieren toe aan het persoon-object. Deze methode moet de leeftijd van de persoon met één verhogen. Je kan binnen het object naar de eigenschap leeftijd verwijzen met "this.leeftijd".

persoon = {
    naam: "John",
    leeftijd: 30,
    moe: true,
    hobbies: ["voetbal", "muay thai"],
    verjaardagVieren() {
        this.leeftijd++
        console.log(this.leeftijd)
    }
}

/* OPDRACHT 5: Boodschap loggen */
// Breid de methode verjaardagVieren uit om een bericht naar de console te loggen waarin de naam en nieuwe leeftijd van de persoon worden weergegeven.

persoon = {
    naam: "John",
    leeftijd: 30,
    moe: true,
    hobbies: ["voetbal", "muay thai"],
    verjaardagVieren() {
        this.leeftijd++
        console.log(this.leeftijd)
    }
}

persoon.verjaardagVieren()
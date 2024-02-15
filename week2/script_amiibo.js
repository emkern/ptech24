// api documentation: 'https://www.amiiboapi.com/'
const baseURL = "https://www.amiiboapi.com/api/";
const endPoint = "amiibo/?gameseries=Super Mario";

// STAP 0. - creeer de url om data mee op te vragen
// combinatie van baseURL en endPoint
const URL = baseURL + endPoint;

// verder in de getAmiibo function

/****************/
/* VUL DE LIJST */
/****************/
function getAmiibo() {
	// STAP 1a. onderaan wordt deze functie aangeroepen bij het laden van de pagina
	// STAP 1b. vraag de data op van de api url
	// nb. de getData function heb je gratis gekregen
	// STAP 2. haal de Amiibo array uit de data en sla die op
	// STAP 3. loop over elke Amiibo in de lijst
	
	// vraag de data op aan de api met de URL
	getData(URL).then( data => {  
		// haal de Amiibo array uit de data
		// allAmiibo is een array
		const allAmiibo = data.amiibo;
        
        // console.log(allAmiibo)

		// loop over alle amiibo's in de array (allAmiibo) heen 
		// 'anAmiibo' is bij steeds de volgende amiibo in de array
		allAmiibo.forEach( anAmiibo => {
			console.log(`${anAmiibo.character} is a part of ${anAmiibo.amiiboSeries}`)
		})
	});	
	
}

/****************/
/* FETCH DATA   */
/* RETURNS JSON */
/****************/

// generieke functie om data aan een API te vragen
// deze kun je keer op keer hergebruiken
// nb. in het echt iets complexer --> bijv ook rekening houden met fouten

// 1. doe een verzoek aan de API om data
// 2. ga verder als de API antwoord geeft
// 3. als het goed gaat krijg je een 'response'-object met data terug
// 3. daarmee kun je nog niet aan de slag
// 4. het 'response'-object zet je om naar JSON
// 4. met JSON kun je aan de slag in jouw JS
// 5. als de response is omgezet naar JSON kun je weer verder
// 6. de naam van de naar JSON omgezette info is 'jsonData'
// 6. Die naam mag je overigens zelf verzinnen
// 7. de JSON ('jsonData') geef je terug aan de 'getData' functie
// 8. de 'getData' functie geeft de 'jsonData' weer terug aan de 'getAmiibo' functie
// 9. async betekent dat terwijl de data wordt opgehaald er andere dingen gedaan kunnen worden
// 9. op het moment dat de data er is geeft de functie een seintje
// 9. dan kun je dan wat met de data gaan doen

async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}

/*********/
/* START */
/*********/

getAmiibo();
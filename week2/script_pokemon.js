let getPokemon = () => {
// functiong getPokemon() {

    getData("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0").then(data => {
        // console.log(data.results[0].name)

        const allPokemons = data.results

        allPokemons.forEach(pokemon => {
            console.log(pokemon.name)
        });
    }

)

}

let getData = async (URL) => {
// async function getData(URL) {
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

getPokemon()
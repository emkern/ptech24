const getPokemon = () => {
// function getPokemon() {

  getData('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0').then((data) => {
    // console.log(data.results[0].name)

    const allPokemons = data.results;

    const cPokemons = allPokemons.filter((pokemon) => pokemon.name.startsWith('c'));
    console.log(`${cPokemons.length} pokemon start with a c, they are:`);

    cPokemons.forEach((pokemon) => {
      console.log(`${pokemon.name}`);
    });
  },

  );
};

const getData = async (URL) => {
// async function getData(URL) {
  return (
    fetch(URL)
        .then(
            (response) => response.json(),
        )
        .then(
            (jsonData) => {
              return jsonData;
            },
        )
  );
};

getPokemon();


function getRandomPokemonId() {
    return Math.floor(Math.random() * 151) + 1;
  }

export async function fetchRandomPokemonData() {
    const pokemonData = [];
    for (let i = 0; i < 9; i++) {
      const randomPokemonId = getRandomPokemonId();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
      const data = await response.json();
      pokemonData.push(data);
    }
    return pokemonData;
  }

  
  /*
  pokemonData.sprites.back_default
   */
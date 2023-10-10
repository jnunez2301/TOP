import { fetchRandomPokemonData } from "../helpers/getPokemons";
import { useState, useEffect } from "react";

const Cards = () => {
  const [pokemonData, setPokemonData] = useState([]); // State to store the fetched Pokémon data

  useEffect(() => {
    // Fetch random Pokémon data when the component mounts
    async function fetchData() {
      const data = await fetchRandomPokemonData();
      setPokemonData(data);
    }

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const cards = pokemonData.map((pokemon, index) => ({
    title: pokemon.name,
    img: pokemon.sprites.front_default,
    id: pokemon.id,
  }));

  console.log(cards);

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="menu-card">
          <img src={card.img} alt={card.title} height={'100px'} width={'100px'} />
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

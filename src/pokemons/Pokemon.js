import React from 'react';
import PokemonItem from './PokemonItem';
import Pokeball from '../components/layout/Pokeball';

const Pokemon = ({ pokemon, loading, pokemonImg }) => {
  if (loading) {
    return <Pokeball />;
  } else {
    return (
      <div>
        <PokemonItem pokemon={pokemon} pokemonImg={pokemonImg} />
      </div>
    );
  }
};

export default Pokemon;

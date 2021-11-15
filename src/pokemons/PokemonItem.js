import React from 'react';
import PropTypes from 'prop-types';
import pokemon_logo from '../components/layout/pokemon_logo.svg';

const PokemonItem = ({
  pokemon: { name, base_experience, height, weight, types, abilities, stats },
  pokemonImg,
}) => {
  if (pokemonImg) {
    return (
      <div className="card-2 text-center">
        <div className="card-2">
          <img
            src={pokemonImg}
            alt="Avatar"
            className="round-img"
            style={{ width: 120 }}
          />

          <h1 style={{ textTransform: 'uppercase' }}>{name}</h1>
          <h5>Type: {types[0].type.name.toUpperCase()}</h5>
          <div style={otherInfo}>
            <p>Base Experience: {base_experience} xp</p>
            <p>Height: {height}"</p>
            <p>Weight: {weight} kg</p>
          </div>
        </div>
        <div className="card-2">
          <h3>Abilities:</h3>
          {abilities && <p>{abilities[0].ability.name.toUpperCase()}</p>}
          {abilities[1]
            ? abilities && <p>{abilities[1].ability.name.toUpperCase()}</p>
            : 'No more abilities'}
        </div>
        <div className="card-2">
          <h3>Stats:</h3>
          {stats.map(s => (
            <p key={s.stat.name}>
              {s.stat.name.toUpperCase()}: {s.base_stat}
            </p>
          ))}
        </div>
      </div>
    );
  } else {
    return <img src={pokemon_logo} alt="Pokemon Logo" />;
  }
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  pokemonImg: PropTypes.string.isRequired,
};

const otherInfo = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  marginTop: '1.5rem',
};

export default PokemonItem;

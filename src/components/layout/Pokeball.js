import React from 'react';
import pokeball from './pokeball.gif';

const Pokeball = () => {
  return (
    <div>
      <img
        src={pokeball}
        alt="Loading..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Pokeball;

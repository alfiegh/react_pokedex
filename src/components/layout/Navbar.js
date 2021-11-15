import React from 'react';

const Navbar = ({ icon, title }) => {
  return (
    <div>
      <nav className="navbar bg-primary my-1">
        <h1>
          <i className={icon}> {title}</i>
        </h1>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Pokedex',
  icon: 'fas fa-globe',
};

export default Navbar;

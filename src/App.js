import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';

import Search from './pokemons/Search';
import Alert from './components/layout/Alert';
import Pokemon from './pokemons/Pokemon';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    pokemon: {},
    loading: false,
    pokemonImg: '',
    alert: null,
  };

  searchPokemon = async text => {
    try {
      this.setState({ loading: true });

      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}/`);

      this.setState({
        pokemon: res.data,
        loading: false,
        pokemonImg: res.data.sprites.front_default,
      });
      console.log(res.data);
    } catch (err) {
      alert('Pokemon not found, please check the spelling ☺️');
      this.setState({ loading: false });
    }
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => this.setState({ alert: null }), 2500);
  };

  clearPokemon = () => {
    this.setState({
      pokemon: {},
      pokemonImg: '',
    });
  };

  render() {
    const { pokemon, pokemonImg, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchPokemon={this.searchPokemon}
            setAlert={this.setAlert}
            clearPokemon={this.clearPokemon}
            showClear={Object.keys(pokemon).length > 0 ? true : false}
          />
          <Pokemon
            loading={loading}
            pokemon={pokemon}
            pokemonImg={pokemonImg}
          />
        </div>
      </div>
    );
  }
}

export default App;

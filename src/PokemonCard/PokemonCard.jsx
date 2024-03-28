import { Component } from "react";
import "./PokemonCard.css";

const POKEMON_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokemonCard extends Component {
  render() {
    let imageSource = `${POKEMON_API}${this.props.id}.png`;
    return (
      <div className="pokemon-card">
        <h2 className="pokemon-card-title">Pokemon</h2>
        <div className="pokemon-card-image">
          <img src={imageSource} />
        </div>
        <div className="pokemon-card-data">Type: {this.props.type}</div>
        <div className="pokemon-card-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default PokemonCard;

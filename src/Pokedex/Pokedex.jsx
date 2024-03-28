import { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="pokedex-winner">Winner Player</h2>;
    } else {
      title = <h2 className="pokedex-loser">Loser Player</h2>;
    }
    return (
      <div className="pokedex">
        {title}
        <h3>Total Exp: {this.props.exp}</h3>
        <div className="pokedex-cards">
          {this.props.pokemon.map((p, index) => (
            <PokemonCard
              key={index}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;

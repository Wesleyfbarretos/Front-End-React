import { useState } from "react";
import { Pokemon } from "../../shared/models/pokemon";
export function ShinyCard(pokemon: Pokemon) {

    function pokemonSprite(pokemon: Pokemon, name: string) {
       return pokemon.sprites.find(sprite => sprite.name == name)!.img
     } 
     
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-id">
                    {pokemon.id}
                </div>
                <div className="card-name">
                    {"Shiny " + pokemon.name}
                </div>
                <div>
                    <img className="card-img-front" src={pokemonSprite(pokemon, "front_shiny")} alt="front_shiny.img" />
                </div>
                <div>
                    <img className="card-img-back" src={pokemonSprite(pokemon, "back_shiny")} alt="back_shiny.img" />
                </div>
            </div>
        </div>
    )
}
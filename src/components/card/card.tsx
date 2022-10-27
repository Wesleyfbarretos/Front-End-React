import { Link } from "react-router-dom"
import { Pokemon } from "../../shared/models/pokemon"
import "./card.css"



export function Card(pokemon: Pokemon) {
    function pokemonSprite(pokemon: Pokemon, name: string) {
        return pokemon.sprites.find(sprite => sprite.name == name)!.img
     }    
     
    return(
        <div className="card">

            <div className="front-card">
                <div className="id-pokemon">{pokemon.id}</div>
                <div className="card-image">
                    <img src={pokemonSprite(pokemon, "front_default")} alt="" className="card-img" />
                </div>
                <h2>{pokemon.name}</h2>
                <div className="types-container">
                   {
                    pokemon.types.map((type, index) => <div key={index} className={"card" +(index==1? "-second-type": "-type")}>{type.name}</div>)
                   }
                </div>
            </div>



            <div className="back-card">
                <div className="id-pokemon">{pokemon.id}</div>

                <div className="card-image">
                    <img src={pokemonSprite(pokemon, "back_default")} alt="" />
                </div> 
                

                <h2><Link target={"_blank"} to={"/shiny-home"}>{pokemon.name}</Link></h2>
            </div>
        </div>
    )
}
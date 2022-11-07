import { Pokemon } from "../../shared/models/pokemon";
import { colorByType } from "../../util/types-object";
import "./shiny-card.scss"
export function ShinyCard(pokemon: Pokemon) {

    function pokemonSprite(pokemon: Pokemon, name: string) {
       return pokemon.sprites.find(sprite => sprite.name == name)!.img
     } 

     function linearBackgroundValue() {
        return { background:`linear-gradient(45deg,${colorByType[pokemon.types[0].name.toUpperCase()]},${colorByType[pokemon.types[1].name.toUpperCase()]})`}
    }
    
    function normalBackgroundValue () {
        return { background: `${colorByType[pokemon.types[0].name.toUpperCase()]}` }
    }
    
    function colorOrLinearColorForCard() {
        if(pokemon.types.length == 2) {
            return linearBackgroundValue()
        }
        
        return normalBackgroundValue() 
    }
     
    return (
            <div 
            className="shiny-card"
            style={colorOrLinearColorForCard()}
            >
                <div className="card-id">
                    {pokemon.id}
                </div>
                <h1 className="card-name">
                    {"SHINY " + pokemon.name.toUpperCase()}
                </h1>
                <div className="img-container-front">
                    <img className="card-img-front" src={pokemonSprite(pokemon, "front_shiny")} alt="front_shiny.img" />
                </div>
                <div className="img-container-back">
                    <img className="card-img-back" src={pokemonSprite(pokemon, "back_shiny")} alt="back_shiny.img" />
                </div>
            </div>
    )
}
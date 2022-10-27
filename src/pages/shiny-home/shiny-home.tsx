import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokeballLoader } from "../../components/pokeball-loader/pokeball-loader"
import { ShinyCard } from "../../components/shiny-card/shiny-card"
import { Pokemon } from "../../shared/models/pokemon"

export interface ShinyHomeRequest {
  pokemon: Pokemon,
  isLoading: boolean
}

export function ShinyHome() {

    let [request, setRequest] = useState<ShinyHomeRequest>({
      pokemon: {
        id: 0,
        name: "",
        sprites: [],
        types: []
      },
      isLoading: true
    })

    const {id} = useParams()
    const url = `http://localhost:3000/pokemon/${id}`
    
 
   async function fetchPokemonShiny(): Promise<void> {
    const data = await fetch(url)
    const result = await data.json()
    setRequest({
      pokemon: result,
      isLoading: false
    })
  }

    useEffect(() => {fetchPokemonShiny(), []})


    return (

       <div id="card-place-link">
            {request.isLoading? <PokeballLoader /> : <ShinyCard {...request.pokemon}/>}
       </div>
    )
}
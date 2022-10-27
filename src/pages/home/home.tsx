import  React, { useEffect, useState } from 'react'
import { Card } from '../../components/card/card'
import { Navigation } from '../../components/navigation/navigation'
import { PokeballLoader } from '../../components/pokeball-loader/pokeball-loader'
import { Pokemon } from '../../shared/models/pokemon'
import { Request } from '../../shared/models/request'

export interface PokemonHomeRequest extends Request<Pokemon[]>{
  next: string
  search: string
}

export interface FilterByType {
  filterValue: string
  backgroundStyle: string
}


function App() {

 let [request, setRequest] = useState<PokemonHomeRequest>(
    {
      next: "http://localhost:3000/pokemons",
      value: [],
      isLoading: true,
      search: ""
    }
  )

  let [onFilterTypeChange, setOnFilterTypeChange] = useState<FilterByType>({
    filterValue: "NULL",
    backgroundStyle: ""
  })

  function filterTypeChange(eventFilterValue:string, eventBackgroundStyle: string) {
    setOnFilterTypeChange(() => {
      return {
        filterValue: eventFilterValue,
        backgroundStyle: eventBackgroundStyle
      }
    })
    console.log(onFilterTypeChange.filterValue)
  }

  async function fetchPokemon(): Promise<void> {
    const result = await fetch(request.next)
    const { next, results } = await result.json()

    setRequest((prevState) =>  {
      const newState = {
        next: next,
        value: [...prevState.value, ...results],
        isLoading: false,
        search: request.search,
      }
      return newState
    })
  }


  // const filteredPokemons = request.value.filter((pokemon) => {
  //   if(onFilterTypeChange.filter == "NULL") {
  //     return pokemon
  //  }
  //  if(request.value.filter(type => type.name.toLowerCase().includes(onFilterTypeChange.filter.toLowerCase()))) {
  //     return pokemon
  //  } else {
  //   return false
  //  }
    
  //   })

 function pokemonLoader() {
   return request.value.filter(pokemon => {
      if(request.search == "" && onFilterTypeChange.filterValue == "NULL") {
        return true
      } 
      if (pokemon.name.toLowerCase().includes(request.search.toLowerCase())) {
        return true
      }
    }).map((pokemon: Pokemon) => <Card key={pokemon.id} {...pokemon}/>)
   }
   
  useEffect(() => {fetchPokemon()}, [])
 
  return (
    <div className="App">
      
    <Navigation 
    request = {request} 
    setRequest = {setRequest} 
    filterTypeChange={filterTypeChange} 
    onFilterTypeChange={onFilterTypeChange}
     />

    <main id='card-place'>
      {
        request.isLoading? <PokeballLoader /> : pokemonLoader()
      }
    </main>
    <div id='loader'></div>

    </div>

   
  )
}

export default App

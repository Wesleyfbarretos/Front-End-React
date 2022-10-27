import { FilterByType, PokemonHomeRequest } from "../../pages/home/home"
import { SelectTypes } from "../select-types/select-types"
import "./navigation.css"    

export interface stateParameter {
    request: PokemonHomeRequest,
    setRequest: React.Dispatch<React.SetStateAction<PokemonHomeRequest>>
    filterTypeChange: (eventFilterValue: string, eventBackgroundStyle: string) => void
    onFilterTypeChange: FilterByType
}

export function Navigation({request, setRequest, filterTypeChange, onFilterTypeChange}: stateParameter) {

    return (
        <header className='cabecalho'>
        <h1 className="logo">Pokédex</h1>
        <nav>
            <SelectTypes 
            filterTypeChange={filterTypeChange} 
            onFilterTypeChange={onFilterTypeChange}
            />
            
            <button className='stylebutton' id="reset-button">Reset</button>
        </nav>
        <nav>
            <input type="text" placeholder="Enter Pokémon Name" className='inputsize' id="searchbar" onChange={(event) => {
              setRequest({
                next: request.next,
                value: request.value,
                isLoading: request.isLoading, 
                search: event.target.value,              
              })
            }} /> 
        </nav>
    </header>
    
    )
}
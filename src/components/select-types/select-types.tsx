import { FilterByType } from "../../pages/home/home"
import { colorByType } from "../../util/types-object"

interface FilterTypeChange {
    filterTypeChange: (eventFilterValue: string, eventBackgroundStyle: string) => void
    onFilterTypeChange: FilterByType
}

export function SelectTypes({filterTypeChange, onFilterTypeChange}: FilterTypeChange ) { 
    function options() {
        return Object.entries(colorByType).map(([key, value]) => {
             return(
                 <option key={key} value={value}  style={{
                     backgroundColor: value
                 }}>{key}</option>
             )
         })
    } 

     return (
        <select name="Types" id="type" className='types' required 
        onChange={event => {
            const index = event.target.selectedIndex
            filterTypeChange(event.target[index].textContent!, event.target.value)
        }}
        style={
            {
                backgroundColor: onFilterTypeChange.backgroundStyle
            }
        }> 
            {options()}
        </select>
     )
 }

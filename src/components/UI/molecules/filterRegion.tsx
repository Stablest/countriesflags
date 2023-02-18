import '../../styles/home.css'
import '../../scripts/optionScript'
import { useEffect, useRef } from 'react'

export default function FilterRegion(){
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    const ref = useRef(null)
    // useEffect(() => buttom(),[])
    return(
        <select title='options' name="Scroll" ref={ref} className="region-select" onChange={value => optionsSelect}>
            <option value="all">Filter by Region</option>
            <option value="africa">África</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
    
    function allCountries():string{
        return 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    }

    function africaCountries():string{
        return 'https://restcountries.com/v3/region/africa?fields=name,capital,region,population,flags'
    }

    function americaCountries():string{
        return 'https://restcountries.com/v3/region/america?fields=name,capital,region,population,flags'
    }

    function asiaCountries():string{
        return 'https://restcountries.com/v3/region/asia?fields=name,capital,region,population,flags'
    }

    function europeCountries():string{
        return 'https://restcountries.com/v3/region/europe?fields=name,capital,region,population,flags'
    }

    function oceaniaCountries():string{
        return 'https://restcountries.com/v3/region/oceania?fields=name,capital,region,population,flags'
    }
    
    function optionsSelect(){
        const element:any = ref.current
        console.log(element[1])
        if(element){
            if(element.options[element.selectIndex].value == 'africa')
                console.log("africa")
        }
    }
}
import '../../styles/home.css'
import '../../scripts/optionScript'
import { useEffect, useRef, useState } from 'react'

export default function FilterRegion(props:any){
    const ref = useRef(null)
    const [option, setOption] = useState('https://restcountries.com/v3/all?fields=name,capital,region,population,flags')
    useEffect(() => {props.onRegionChange(option)}, [option, props.onRegionChange])

    return(
        <select title='options' name="Scroll" ref={ref} className="region-select" onChange={event => optionsSelect(event)}>
            <option value="all">Filter by Region</option>
            <option value="africa">África</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
    
    function optionsSelect(event:any){
        const element:any = ref.current
        if(element){
            switch(event.target.value){
                case 'all':
                    setOption('https://restcountries.com/v3/all?fields=name,capital,region,population,flags')
                    break
                case 'africa':
                    setOption('https://restcountries.com/v3/region/africa?fields=name,capital,region,population,flags')
                    break
                case 'america':
                    setOption('https://restcountries.com/v3/region/america?fields=name,capital,region,population,flags')
                    break
                case 'asia':
                    setOption('https://restcountries.com/v3/region/asia?fields=name,capital,region,population,flags')
                    break
                case 'europe':
                    setOption('https://restcountries.com/v3/region/europe?fields=name,capital,region,population,flags')
                    break
                case 'oceania':
                    setOption('https://restcountries.com/v3/region/oceania?fields=name,capital,region,population,flags')
                    break
            }
        }
    }
}
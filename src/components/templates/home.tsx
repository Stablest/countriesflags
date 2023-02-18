import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'
import CountrySummaryText from "../UI/molecules/countrySummaryText"
import { useEffect, useState } from "react"

type CountrySummaryType = {
    flags:string,
    name:string,
    population:number,
    region:string,
    capital:string,
}

export default function Home(){
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    // const countries = new Array<CountrySummaryType>()
    const [countries, setCountries] = useState<CountrySummaryType[]>([])
    // countries.push(...allCountries())
    useEffect(() => {allCountries()},[])
    return(
        <>
            <Navbar></Navbar>
            <main className="container">
                <MiniHeader></MiniHeader>
                <div className="container-countries">
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                    <CountrySummary country={countries[0] ? randomCountry() : 'aaaa'}></CountrySummary>
                </div>
            </main>
        </>
    )

    async function allCountries():Promise<void>{
        const response = await fetch(URL)
        const data = await response.json()
        let countries = new Array<CountrySummaryType>()
        data.forEach( (country:any) => {
            const countryAux:CountrySummaryType = {
                flags : country.flags.pop(),
                name : country.name.common,
                population : country.population,
                region : country.region,
                capital : country.capital,
            }
            countries.push(countryAux)
        });
        setCountries(countries)
    }

    function randomCountry():CountrySummaryType{
        const randomNumber = Math.floor((Math.random()*999)%countries.length)
        return (countries[randomNumber])
    }


}
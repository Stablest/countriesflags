import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'
import type { CountrySummaryType } from '../interfaces/summaryInterface'
import { useEffect, useState } from "react"

export default function Home(){
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    // const countries = new Array<CountrySummaryType>()
    const [countries, setCountries] = useState<CountrySummaryType[]>([])
    const [region, setRegion] = useState(URL)

    useEffect(() => {allCountries()},[region])
    useEffect(() => {handleRegionChange},[region])

    return(
        <>
            <Navbar></Navbar>
            <main className="container">
                <MiniHeader regionChange={handleRegionChange}></MiniHeader>
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

    function handleRegionChange(selectedRegion:any){
        setRegion(selectedRegion)
        console.log(region)
    }

    async function allCountries():Promise<void>{
        const response = await fetch(region)
        const data = await response.json()
        let countries = new Array<CountrySummaryType>()
        data.forEach( (country:any) => {
            const countryAux:CountrySummaryType = {
                flags : country.flags.pop(),
                name : country.name.common,
                population : country.population.toLocaleString(),
                region : country.region,
                capital : country.capital,
            }
            countries.push(countryAux)
        });
        setCountries(countries)
        console.log('cccc')
    }

    function randomCountry():CountrySummaryType{
        const randomNumber = Math.floor((Math.random()*999)%countries.length)
        return (countries[randomNumber])
    }


}
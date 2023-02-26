import Navbar from "../components/UI/organisms/navbar"
import CountryDetailsTemp from "../components/templates/countryDetailsTemp/countryDetailsTemp"
import '/src/components/styles/global.css'
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CountrySummaryType } from "../components/interfaces/summaryInterface";


export default function CountryDetailsPage() {
    const URL = 'https://restcountries.com/v3/all?fields=flags,name,currencies,population,tld,region,languages,subregion,capital,borders,cca2,ccn3,cca3,cioc'

    const [param, setParam] = useState(useParams())
    const [id, setId] = useState(-1)
    const [location, setLocation] = useState(useLocation())
    const [allCountries, setAllCountries] = useState<CountrySummaryType[]>([])
    const [countryInfo, setCountryInfo] = useState({} as CountrySummaryType)

    useEffect(() => {
        getCountries()
    }, [])

    useEffect(() => {
        let index: any = JSON.stringify(id)
        index = Number(index.replace(/[^0-9]/g, ""))
        if ((typeof index == 'number') && allCountries)
            setCountryInfo(allCountries[index])
    }, [allCountries])

    useEffect(() => {
        let index: number | string = JSON.stringify(param)
        index = Number(index.replace(/[^0-9]/g, ""))
        setId(index)
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <CountryDetailsTemp allCountries={allCountries} countryInfo={typeof countryInfo != 'undefined' ? countryInfo : 'error'} />
        </>
    )

    async function fetchData(where: string): Promise<any> {
        const response = await fetch(where)
        const data = await response.json()
        return data
    }

    async function getCountries(): Promise<void> { // Get and setState of all countries returned by the API.
        const data = await fetchData(URL)
        const countries: CountrySummaryType[] = []
        data.forEach((country: any, index: number) => {
            const countryAux: CountrySummaryType = {
                id: index,
                flags: country.flags.shift(),
                name: country.name.common,
                nativeName: country.name.nativeName,
                topLevelDomain: [...country.tld],
                cca2: country.cca2,
                ccn3: country.ccn3,
                cca3: country.cca3,
                cioc: country.cioc,
                population: country.population.toLocaleString(),
                currencies: country.currencies,
                region: country.region,
                languages: country.languages,
                subRegion: country.subregion,
                capital: [...country.capital],
                borderCountries: [...country.borders],
            }
            countries.push(countryAux)
        });
        setAllCountries(countries)
    }


}
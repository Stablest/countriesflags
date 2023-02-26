import Navbar from "../../UI/organisms/navbar"
import MiniHeader from "../../UI/organisms/miniHeader"
import CountrySummary from "../../UI/organisms/countrySummary/countrySummary"
import './home.css'
import type { CountrySummaryType } from '../../interfaces/summaryInterface'
import { useEffect, useState } from "react"

export default function Home() {
    const URL = 'https://restcountries.com/v3/all?fields=flags,name,currencies,population,tld,region,languages,subregion,capital,borders,cca2,ccn3,cca3,cioc'
    const baseCountry: CountrySummaryType = { // Base country for when an error occurs(e.g., if getCountries() can't get data from the api). 
        id: 0,
        flags: '',
        name: '',
        nativeName: {},
        topLevelDomain: [],
        cca2: '',
        ccn3: '',
        cca3: '',
        cioc: '',
        population: 0,
        currencies: {},
        region: '',
        languages: {},
        subRegion: '',
        capital: [],
        borderCountries: [],
    }

    const [allCountries, setAllCountries] = useState<CountrySummaryType[]>([])
    const [pageCountries, setPageCountries] = useState<CountrySummaryType[]>([])
    const [region, setRegion] = useState('all')
    const [countryByText, setCountryByText] = useState<string>('')
    const [pseudoPage, setPseudoPage] = useState(0)

    useEffect(() => { getCountries() }, []) // Run one time when the Home component is rendered.
    useEffect(() => { getPageCountries() }, [allCountries, region, countryByText]) // Runs everytime allCountries, region or countryByText are updated.
    useEffect(() => { window.addEventListener('scroll', handleScroll) }, [pseudoPage])

    return (
        <>
            <main className="container">
                <MiniHeader regionChange={handleRegionChange} countryByText={handleSearchBar}></MiniHeader>
                <div className="container-countries">
                    {multiCountrySummary()}
                </div>
            </main>
        </>
    )

    function multiCountrySummary() {
        let countriesList = [];
        for (let i = 0; i < (pseudoPage + 1) * 16; i++) {
            pageCountries[i] ? countriesList.push(<CountrySummary key={i} id={i} country={pageCountries[i] ? pageCountries[i] : baseCountry} />) : 'error'
        }
        return (
            <>{countriesList}</>
        );
    };

    function handleRegionChange(event: any) {
        setRegion(event.target.value)
    }

    function handleSearchBar(event: any) {
        console.log('texto : ', event.target.value)
        setCountryByText(event.target.value)
    }

    function handleScroll(): void {
        const windowHeight = document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const isBottom = scrollTop + windowHeight >= documentHeight - (documentHeight * 0.05);

        if (isBottom) {
            setPseudoPage(pseudoPage + 1);
            console.log('page')
        }
    }

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
                flags: country.flags.pop(),
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
        console.log('Get Countries : OK')
        setAllCountries(countries)
    }

    function getPageCountries(): void { // Set countries information on page, based on all countries and filters applied by user
        if (allCountries.length != 0) {
            let countryList: CountrySummaryType[] = []
            countryList = compareRegion(countryList)
            countryList = randomCountriesList([...countryList])
            countryList = compareCountryName(countryList)
            setPageCountries(countryList)
            console.log('getPage : OK')
        }
    }

    function compareRegion(countryList: CountrySummaryType[]): CountrySummaryType[] {
        if (region !== 'all') {
            allCountries.forEach(country => {
                if (country.region.toUpperCase() == region.toUpperCase())
                    countryList.push(country)
            })
            return (countryList) // Return only countries of specified region
        }
        return allCountries // Return all countries if region equals all
    }

    function randomCountriesList(countryList: CountrySummaryType[]): CountrySummaryType[] {
        const auxList: CountrySummaryType[] = []
        const availableIndex: number[] = []
        for (let i = 0; i < countryList.length; i++)
            availableIndex.push(i)
        while (countryList.length != 0) {
            const randomNumber = (Math.floor(Math.random() * 999)) % countryList.length
            auxList.push(countryList[randomNumber])
            availableIndex.splice(randomNumber, 1)
            countryList.splice(randomNumber, 1)
        }
        return auxList
    }

    function compareCountryName(countryList: CountrySummaryType[]): CountrySummaryType[] {
        if (countryByText.length != 0) {
            let list = new Array<CountrySummaryType>()
            for (let i = 0; i < countryList.length; i++) {
                if (countryList[i].name.toUpperCase().includes(countryByText.toUpperCase()))
                    list.push(countryList[i])
            }
            countryList = [...list]
        }
        return countryList
    }
}
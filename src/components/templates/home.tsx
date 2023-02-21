import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'
import type { CountrySummaryType } from '../interfaces/summaryInterface'
import { useEffect, useState, useMemo } from "react"

export default function Home() {
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    const baseCountry: CountrySummaryType = { // Base country for when an error occurs(e.g., if getCountries() can't get data from the api). 
        flags: '',
        name: '',
        population: 0,
        region: '',
        capital: '',
    }

    const [allCountries, setAllCountries] = useState<CountrySummaryType[]>([])
    const [pageCountries, setPageCountries] = useState<CountrySummaryType[]>([])
    const [region, setRegion] = useState('all')
    const [countryByText, setCountryByText] = useState<string>('')
    const [pseudoPage, setPseudoPage] = useState(0)
    const [theme, setTheme] = useState('src/components/styles/blackTheme.css')

    useEffect(() => { getCountries() }, []) // Run one time when the Home component is rendered.
    useEffect(() => { getPageCountries() }, [allCountries, region, countryByText]) // Runs everytime allCountries, region or countryByText are updated.
    useEffect(() => {
        const head = document.head;
        let link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;

        head.appendChild(link);
        return () => { head.removeChild(link); }
    }, [theme])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [pseudoPage])

    return (
        <>
            <Navbar onThemeChange={handleThemeSwitch}></Navbar>
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
            pageCountries[i] ? countriesList.push(<CountrySummary key={i} country={pageCountries[i] ? pageCountries[i] : baseCountry} />) : 'error'
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

    function handleThemeSwitch(theme: string) {
        setTheme(theme)
        console.log('Tema : ', theme)
    }

    function handleScroll(): void {
        const windowHeight = document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const isBottom = scrollTop + windowHeight >= documentHeight;
        console.log('ISBOTTOM> ', isBottom)

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
        data.forEach((country: any) => {
            const countryAux: CountrySummaryType = {
                flags: country.flags.pop(),
                name: country.name.common,
                population: country.population.toLocaleString(),
                region: country.region,
                capital: country.capital,
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

    // setPerson({
    //     ...person, // Copy the old fields
    //     firstName: e.target.value // But override this one
    //   });
}
import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'
import type { CountrySummaryType } from '../interfaces/summaryInterface'
import { useEffect, useState, Fragment } from "react"
import React from "react"

export default function Home() {
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    // const countries = new Array<CountrySummaryType>()
    const [allCountries, setAllCountries] = useState<CountrySummaryType[]>([])
    const [pageCountries, setPageCountries] = useState<CountrySummaryType[]>([])
    const [availableIndex, setAvailableIndex] = useState<number[]>([])
    const [region, setRegion] = useState('all')
    const [countryByText, setCountryByText] = useState<string>('')

    useEffect(() => { getCountries() }, [])
    useEffect(() => { startAvailableIndex() }, [allCountries])


    useEffect(() => { getPageCountries() }, [region, allCountries])

    return (
        <>
            <Navbar></Navbar>
            <main className="container">
                <MiniHeader regionChange={handleRegionChange} countryByText={handleSearchBar}></MiniHeader>
                <div className="container-countries">
                    {multiCountrySummary(40)}
                </div>
            </main>
        </>
    )

    function multiCountrySummary(number: number) {
        let countriesList = [];
        for (let i = 0; i < number; i++) {
            countriesList.push(<CountrySummary country={pageCountries[0] != undefined ? randomCountry() : 'error'} />);
        }
        return (
            <>{countriesList}</>
        );
    };

    function handleRegionChange(event: any) {
        setRegion(event.target.value)
    }

    function handleSearchBar(event: any) {
        setCountryByText(event.target.value)
    }

    async function fetchData(where: string): Promise<any> {
        const response = await fetch(where)
        const data = await response.json()
        return data
    }

    async function getCountries(): Promise<void> {
        const data = await fetchData(URL)
        let countries = new Array<CountrySummaryType>()
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

    function getPageCountries(): void {
        if (allCountries) {
            if (region == 'all')
                setPageCountries(allCountries)
            else {
                let auxList = new Array<CountrySummaryType>()
                allCountries.forEach(country => {
                    if (country.region.toUpperCase() == region.toUpperCase()) {
                        auxList.push(country)
                    }
                })
                setPageCountries(auxList)
            }
        }
    }

    function startAvailableIndex(): void {
        let availableList = new Array<number>()
        if (allCountries) {
            for (let i = 0; i < allCountries.length; i++) {
                availableList.push(i)
            }
            console.log('LISTA : OK')
            setAvailableIndex(availableList)
        }
    }

    // function addAvailableIndex(index: number): void {
    //     setAvailableIndex(prevState => [...prevState, index])
    // }

    function removeAvailableIndex(index: number): void {
        if (availableIndex.length == 0) {
            let availableList = availableIndex
            console.log('SPLICE:', availableList)
            availableList.splice(index, 1)
            setAvailableIndex(availableList)
        }
    }

    function getAvailableIndex(): number {
        if (availableIndex) {
            const randomIndex = (Math.floor((Math.random() * 999)) % availableIndex.length)
            const randomCountryPosition = availableIndex[randomIndex]
            removeAvailableIndex(randomIndex)
            console.log('getAvailableIndex return ', randomCountryPosition)
            return randomCountryPosition
        }
        return -1
    }

    function randomCountry(): CountrySummaryType {
        const randomNumber = getAvailableIndex()

        // console.log(getAvailableIndex())
        // const randomNumber = Math.floor(Math.random() * 999) % pageCountries.length

        return (pageCountries[randomNumber])
    }

    // setPerson({
    //     ...person, // Copy the old fields
    //     firstName: e.target.value // But override this one
    //   });
}
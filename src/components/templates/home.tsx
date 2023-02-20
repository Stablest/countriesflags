import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'
import type { CountrySummaryType } from '../interfaces/summaryInterface'
import { useEffect, useState, useMemo } from "react"
import React from "react"

export default function Home() {
    const URL = 'https://restcountries.com/v3/all?fields=name,capital,region,population,flags'
    const baseCountry: CountrySummaryType = {
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



    useEffect(() => { getCountries() }, [])
    useEffect(() => { getPageCountries() }, [allCountries, region, countryByText])

    return (
        <>
            <Navbar></Navbar>
            <main className="container">
                <MiniHeader regionChange={handleRegionChange} countryByText={handleSearchBar}></MiniHeader>
                <div className="container-countries">
                    {multiCountrySummary(20)}
                </div>
            </main>
        </>
    )

    // const countrySummaries = useMemo(() => {
    //     return randomCountry();
    // }, [pageCountries]);

    function multiCountrySummary(number: number) {
        let countriesList = [];
        for (let i = 0; i < number; i++) {
            pageCountries[i] ? countriesList.push(<CountrySummary key={i} index={i} pageCountries={pageCountries} country={pageCountries[i] ? pageCountries[i] : 'error'} />) : 'error' // 231 229 236 31
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
                    if (country.region.toUpperCase() == region.toUpperCase())
                        auxList.push(country)
                })
                let auxList2 = new Array<CountrySummaryType>()
                let availableIndex = new Array<number>()

                for (let i = 0; i < auxList.length; i++)
                    availableIndex.push(i)
                while (auxList.length != 0) {
                    const randomNumber = (Math.floor(Math.random() * 999)) % auxList.length
                    auxList2.push(auxList[randomNumber])
                    availableIndex.splice(randomNumber, 1)
                    auxList.splice(randomNumber, 1)
                }

                auxList2.forEach(country => {
                    auxList.push(country)
                })

                if (countryByText.length != 0) {
                    let list = new Array<CountrySummaryType>()
                    for (let i = 0; i < auxList.length; i++) {
                        if (auxList[i].name.includes(countryByText)) {
                            list.push(auxList[i])
                            console.log('item add')
                        }
                    }
                    if (list.length != 0) {
                        auxList.splice(0)
                        list.forEach(country => {
                            auxList.push(country)
                        })
                        console.log('LISTA : ', auxList)
                    }
                    else
                        auxList.splice(0)
                }
                console.log(auxList.length)

                setPageCountries(auxList)
            }
        }
    }

    // setPerson({
    //     ...person, // Copy the old fields
    //     firstName: e.target.value // But override this one
    //   });
}
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

    // const countries: CountrySummaryType[] = []

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

    function multiCountrySummary(number: number) {
        let countriesList = [];
        for (let i = 0; i < number; i++) {
            pageCountries[i] ? countriesList.push(<CountrySummary key={i} index={i} pageCountries={pageCountries} country={pageCountries[i] ? pageCountries[i] : 'error'} />) : 'error'
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

    function getPageCountries(): void {
        if (allCountries.length != 0) {
            let countryList: CountrySummaryType[] = []
            if (region == 'all') {
                countryList = [...randomCountriesList([...allCountries])]
                countryList = [...compareCountryName(countryList)]
                console.log('all')
            }
            else {
                countryList = [...compareRegion(countryList)]
                countryList = [...randomCountriesList(countryList)]
                countryList = [...compareCountryName(countryList)]
            }
            setPageCountries(countryList)
            console.log('getPage : OK')
        }
    }

    function compareRegion(countryList: CountrySummaryType[]): CountrySummaryType[] {
        allCountries.forEach(country => {
            if (country.region.toUpperCase() == region.toUpperCase())
                countryList.push(country)
        })
        return countryList
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
                if (countryList[i].name.toUpperCase().includes(countryByText.toUpperCase())) {
                    list.push(countryList[i])
                }
            }
            if (list.length != 0) {
                countryList.splice(0)
                list.forEach(country => {
                    countryList.push(country)
                })
            }
            else
                countryList.splice(0)
        }
        return countryList
    }
    // setPerson({
    //     ...person, // Copy the old fields
    //     firstName: e.target.value // But override this one
    //   });
}
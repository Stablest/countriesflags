import { useEffect, useState } from "react"
import MiniCountryBox from "../../atoms/miniCountryBox/miniCountryBox"
import './borderCountries.css'
import { CountrySummaryType } from "../../../interfaces/summaryInterface"
import { Link, Navigate, NavLink, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function BorderCountries(props: any) {
    const navigate = useNavigate()
    const { country } = useParams()
    const [allCountries, setAllCountries] = useState<CountrySummaryType[]>()
    const [countryBorder, setCountryBorder] = useState<CountrySummaryType[]>([])

    useEffect(() => { setAllCountries(props.allCountries) }, [props.allCountries])


    useEffect(() => {
        setCountryBorder(getBorderFullCountry(props.borderCountries))
    }, [allCountries])

    return (
        <div id="border-countries">
            <span>Border Countries:</span>
            <div id="mini-countries">
                {setMiniCountryBox()}
            </div>
        </div>
    )

    function setMiniCountryBox() {
        const list: any = []
        countryBorder?.forEach((country: CountrySummaryType, index: number) => {
            list.push(
                <Link key={country.id} style={{ textDecoration: 'none' }} reloadDocument state={props.allCountries} to={`/countryDetails/:${country.id}`}>
                    <MiniCountryBox countryName={country.name} />
                </Link>
            )
        })
        return list
    }

    function getBorderFullCountry(tag: string | string[]): any {
        if (typeof allCountries != 'undefined' && 'null') {
            if (tag instanceof Array) {
                const list: CountrySummaryType[] = []
                allCountries.forEach((country: CountrySummaryType) => {
                    tag.forEach((text: string) => {
                        if ((text === country.cca3) || (text === country.cca2) || (text === country.ccn3) || (text === country.cioc))
                            list.push(country)
                    })
                })
                return list
            }
            else {
                allCountries.forEach((country) => {
                    if ((country.cca2 || country.cca3 || country.ccn3 || country.cioc) === tag)
                        return (country)
                });
            }
        }
    }
}
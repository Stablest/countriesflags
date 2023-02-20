import CountrySummaryText from "../molecules/countrySummaryText";
import '../../styles/home.css'
import { useEffect, useRef } from "react";
import home from '../../templates/home'

export default function CountrySummary(props: any) {
    // const ref = useRef()
    // useEffect(() => {
    //     ref.current = props.country
    //     console.log('MOUNT COUNTRY : ', props.country.name)
    //     return () => {
    //         props.add(props.pageCountries?.indexOf(props.country))
    //         // console.log(props.pageCountries?.indexOf(props.country))
    //         console.log('DISMOUNT : ', props.pageCountries?.indexOf(props.country))
    //     }//indexof

    // }, [props.country])

    return (
        <div id='country-summary'>
            <div id='div-img'>
                <img src={props.country.flags} alt="country-flag" />
            </div>
            <CountrySummaryText country={props.country}></CountrySummaryText>
        </div>
    )
}
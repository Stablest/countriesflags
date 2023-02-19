import CountrySummaryText from "../molecules/countrySummaryText";
import '../../styles/home.css'
import { useEffect } from "react";
import home from '../../templates/home'

export default function CountrySummary(props: any) {
    // useEffect(() => {
    //     return () => { props.add(props.index) }
    // }, [])

    return (
        <div id='country-summary'>
            <div id='div-img'>
                <img src={props.country.flags} alt="country-flag" />
            </div>
            <CountrySummaryText country={props.country}></CountrySummaryText>
        </div>
    )
}
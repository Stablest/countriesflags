import CountrySummaryText from "../../molecules/countrySummaryText/countrySummaryText";
import './countrySummary.css'
import { Link } from 'react-router-dom'


export default function CountrySummary(props: any) {

    return (
        <div id='country-summary'>
            <div id='div-img'>
                <Link to={`countryDetails/:${props.country.id}`}><img src={props.country.flags} alt="country-flag" /></Link>
            </div>
            <CountrySummaryText country={props.country}></CountrySummaryText>
        </div>
    )


}
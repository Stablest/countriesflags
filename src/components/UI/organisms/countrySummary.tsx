import CountrySummaryText from "../molecules/countrySummaryText";
import '../../styles/home.css'

export default function CountrySummary(props:any){
    return(
        <div id='country-summary'>
            <div id='div-img'>
                <img src={props.country.flags} alt="country-flag" />
            </div>
            <CountrySummaryText country={props.country}></CountrySummaryText>
        </div>
    )
}
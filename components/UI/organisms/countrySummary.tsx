import CountrySummaryText from "../molecules/countrySummaryText";
import '../../styles/home.css'

export default function CountrySummary(){
    return(
        <div id='country-summary'>
            <div id='div-img'>
                <img src="https://flagcdn.com/w320/br.png" alt="country-flag" />
            </div>
            <CountrySummaryText></CountrySummaryText>
        </div>
    )
}
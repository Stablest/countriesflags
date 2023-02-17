import CountrySummaryText from "../molecules/countrySummaryText";
import '../../styles/home.css'

export default function CountrySummary(){
    return(
        <div id='country-summary'>
            <img src="https://avatars.githubusercontent.com/u/45415868?v=4" alt="country-flag" />
            <CountrySummaryText></CountrySummaryText>
        </div>
    )
}
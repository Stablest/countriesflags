import BackButton from "../../UI/atoms/backButton/backButton";
import CountryInfo from "../../UI/organisms/countryInfo/countryInfo";
import '/src/components/templates/countryDetailsTemp/countryDetailsTemp.css'
import '/src/components/styles/global.css'
import { Link } from "react-router-dom";



export default function CountryDetailsTemp(props: any) {
    return (
        <div className="container-details-page">
            <div id="margin-button">
                <Link to={'../'}>
                    <BackButton />
                </Link>
            </div>
            <div id="container-flag-info">
                <img src={props.countryInfo.flags} alt={props.countryInfo.altSpellings ? props.countryInfo.altSpellings : 'country flag'} />
                <CountryInfo allCountries={props.allCountries} countryInfo={props.countryInfo} />
            </div>
        </div>
    )
}
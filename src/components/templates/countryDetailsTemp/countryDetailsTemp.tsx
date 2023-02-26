import BackButton from "../../UI/atoms/backButton/backButton";
import CountryInfo from "../../UI/organisms/countryInfo/countryInfo";
import '/src/components/templates/countryDetailsTemp/countryDetailsTemp.css'
import '/src/components/styles/global.css'
import { Link } from "react-router-dom";



export default function CountryDetailsTemp(props: any) {
    return (
        <div className="container">
            <div id="margin-button">
                <Link to={'../'}>
                    <BackButton />
                </Link>
            </div>
            <div id="container-flag-info">
                <div className="container-img">
                    <img src={props.countryInfo.flags} alt="" />
                </div>
                <CountryInfo allCountries={props.allCountries} countryInfo={props.countryInfo} />
            </div>
        </div>
    )
}
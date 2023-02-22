import BackButton from "../UI/atoms/backButton";
import CountryInfo from "../UI/organisms/countryInfo";


export default function CountryDetailsTemp() {
    return (
        <div className="container">
            <BackButton />
            <div>
                <img src="" alt="" />
                <CountryInfo />
            </div>
        </div>
    )
}
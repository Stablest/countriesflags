import Navbar from "../components/UI/organisms/navbar"
import CountryInfo from "../components/UI/organisms/countryInfo"
import '/src/components/styles/global.css'
import '/src/components/styles/countryDetailsPage.css'

export default function CountryDetails() {
    return (
        <>
            <Navbar></Navbar>
            <CountryInfo />
        </>
    )
}
import './countryName.css'

export default function CountryName(props: any) {
    return (
        <span id="country-name">{props.name}</span>
    )
}
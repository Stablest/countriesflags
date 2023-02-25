import './miniCountryBox.css'

export default function MiniCountryBox(props: any) {
    return (
        <div id='mini-country-box'>
            <span>{props.countryName}</span>
        </div>
    )
}
import CountryName from "../../atoms/countryName/countryName"
import CountryProps from "../../atoms/countryProps/countryProps"
import PropsValue from "../../atoms/propsValue/propsValue"
import './countrySummaryText.css'


export default function CountrySummaryText(props: any) {
    return (
        <div className='box'>
            <div id='summary-description'>
                <CountryName name={props.country.name}></CountryName>
                <div className="props">
                    <div className="props-name-value">
                        <CountryProps props={'Population'}></CountryProps>
                        <PropsValue value={props.country.population}></PropsValue>
                    </div>
                    <div className="props-name-value">
                        <CountryProps props={'Region'}></CountryProps>
                        <PropsValue value={props.country.region}></PropsValue>
                    </div>
                    <div className="props-name-value">
                        <CountryProps props={'Capital'}></CountryProps>
                        <PropsValue value={props.country.capital}></PropsValue>
                    </div>
                </div>
            </div>
        </div>
    )
}
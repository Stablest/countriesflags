import CountryName from "../atoms/countryName"
import CountryProps from "../atoms/countryProps"
import PropsValue from "../atoms/propsValue"
import '../../styles/home.css'


export default function CountrySummaryText(){
    return(
        <div className='box'>
            <div id='summary-description'>
                <CountryName></CountryName>
                <div className="props">
                    <div className="props-name-value">
                        <CountryProps></CountryProps>
                        <PropsValue></PropsValue>
                    </div>
                    <div className="props-name-value">
                        <CountryProps></CountryProps>
                        <PropsValue></PropsValue>
                    </div>
                    <div className="props-name-value">
                        <CountryProps></CountryProps>
                        <PropsValue></PropsValue>
                    </div>
                </div>
            </div>
        </div>
    )
}
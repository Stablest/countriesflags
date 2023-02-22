import CountryName from "../atoms/countryName/countryName"
import CountryProps from "../atoms/countryProps/countryProps"
import PropsValue from "../atoms/propsValue/propsValue"
import BorderCountries from "../molecules/borderCountries"

export default function CountryInfo() {
    return (
        <div>
            <CountryName />
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
                <div className="props-name-value">
                    <CountryProps></CountryProps>
                    <PropsValue></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps></CountryProps>
                    <PropsValue></PropsValue>
                </div>
            </div>
            <BorderCountries></BorderCountries>
        </div>
    )
}
import CountryName from "../../atoms/countryName/countryName"
import CountryProps from "../../atoms/countryProps/countryProps"
import PropsValue from "../../atoms/propsValue/propsValue"
import BorderCountries from "../../molecules/borderCountries/borderCountries"
import './countryInfo.css'

export default function CountryInfo(props: any) {

    return (
        <div id="country-info">
            <div>
                <CountryName name={props.countryInfo.name} />
            </div>
            <div className="props-info">
                <div className="props-name-value">
                    <CountryProps props='Native Name'></CountryProps>
                    <PropsValue value={getPropertyValue(getPropertyValue(props.countryInfo.nativeName, 0), 0)}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Top Level Domain'></CountryProps>
                    <PropsValue value={props.countryInfo.topLevelDomain}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Population'></CountryProps>
                    <PropsValue value={props.countryInfo.population}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Currencies'></CountryProps>
                    <PropsValue value={getPropertyValue(getPropertyValue(props.countryInfo.currencies, 0), 0)}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Region'></CountryProps>
                    <PropsValue value={props.countryInfo.region}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Languages'></CountryProps>
                    <PropsValue value={getPropertyValue(props.countryInfo.languages, -1)}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Sub Region'></CountryProps>
                    <PropsValue value={props.countryInfo.subRegion}></PropsValue>
                </div>
                <div className="props-name-value">
                    <CountryProps props='Capital'></CountryProps>
                    <PropsValue value={props.countryInfo.capital}></PropsValue>
                </div>
            </div>
            <div>
                <BorderCountries allCountries={props.allCountries} borderCountries={props.countryInfo.borderCountries}></BorderCountries>
            </div>
        </div>
    )

    function getPropertyValue(obj: any, index: number): any {
        if (typeof obj != 'undefined' && 'null') {
            const objArray = Object.getOwnPropertyNames(obj)
            if (index >= 0)
                return propertyValue(obj, objArray[0], false)
            else
                return (propertyValue(obj, objArray, true))
        }
    }

    function propertyValue(obj: any, propertyName: string | string[], multiple: boolean): any {
        if (typeof obj != 'undefined' && 'null') {
            if (multiple === false) {
                if (typeof propertyName == 'string')
                    return obj[propertyName];
            }
            else {
                const list = []
                for (let [key, value] of Object.entries(obj))
                    list.push(value)
                return list.toString()
            }
        }
    }

    // function camelCaseToSpace(string: string): string {
    //     string.replace(/([A-Z])/g, ' $1')
    //     return string
    // }
    // function multiComponent()
}
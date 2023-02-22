import './searchDescription.css'

export default function SearchDescription(props: any) {
    return (
        <span id='search-description'>
            <input type="text" placeholder='Search for a country...' onChange={props.countryByText} />
        </span>
    )
}
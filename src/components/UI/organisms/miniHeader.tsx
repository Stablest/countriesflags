import SearchBar from "../molecules/searchBar"
import FilterRegion from "../molecules/filterRegion"

export default function MiniHeader(props: any) {
    return (
        <div className="container-mini-header">
            <SearchBar countryByText={props.countryByText}></SearchBar>
            <FilterRegion onRegionChange={props.regionChange}></FilterRegion>
        </div>
    )
}
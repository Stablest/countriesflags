import SearchBar from "../molecules/searchBar/searchBar"
import FilterRegion from "../molecules/filterRegion/filterRegion"

export default function MiniHeader(props: any) {
    return (
        <div className="container-mini-header">
            <SearchBar countryByText={props.countryByText}></SearchBar>
            <FilterRegion onRegionChange={props.regionChange}></FilterRegion>
        </div>
    )
}
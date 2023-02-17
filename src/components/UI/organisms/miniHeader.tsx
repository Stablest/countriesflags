import SearchBar from "../molecules/searchBar"
import FilterRegion from "../molecules/filterRegion"

export default function MiniHeader(){
    return(
        <div className="container-mini-header">
            <SearchBar></SearchBar>
            <FilterRegion></FilterRegion>
        </div>
    )
}
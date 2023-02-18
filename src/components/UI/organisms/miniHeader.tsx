import SearchBar from "../molecules/searchBar"
import FilterRegion from "../molecules/filterRegion"
import { useEffect,useState } from "react"

export default function MiniHeader(props:any){
    return(
        <div className="container-mini-header">
            <SearchBar></SearchBar>
            <FilterRegion onRegionChange={props.regionChange}></FilterRegion>
        </div>
    )
}
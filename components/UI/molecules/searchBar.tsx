import SearchDescription from "../atoms/searchDescription";

export default function SearchBar(){
    return(
        <div className="search-bar-box">
            <img src="./assets/magnifier-glass.svg" alt="img" className="small-img"/>
            <SearchDescription></SearchDescription>
        </div>
    )
}
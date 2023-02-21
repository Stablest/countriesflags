import '../../styles/home.css'

export default function FilterRegion(props: any) {

    return (
        <select title='options' name="Scroll" className="region-select" onChange={props.onRegionChange}>
            <option value="all">Filter by Region</option>
            <option value="africa">África</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}
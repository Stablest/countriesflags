import Navbar from "../UI/organisms/navbar"
import MiniHeader from "../UI/organisms/miniHeader"
import CountrySummary from "../UI/organisms/countrySummary"
import '../styles/home.css'


export default function Home(){
    return(
        <>
            <Navbar></Navbar>
            <main className="container">
                <MiniHeader></MiniHeader>
                <div className="container-countries">
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                    <CountrySummary></CountrySummary>
                </div>
            </main>
        </>
    )
}
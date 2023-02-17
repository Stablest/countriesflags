import Title from "../atoms/title"
import ThemeSwitch from "../molecules/themeSwitch"

export default function Navbar(){
    return(
        <nav id="navbar">
            <Title></Title>
            <ThemeSwitch></ThemeSwitch>
        </nav>
    )
}
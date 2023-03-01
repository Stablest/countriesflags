import Title from "../atoms/title/title"
import ThemeSwitch from "../molecules/themeSwitch"
import '../../styles/global.css'

export default function Navbar(props: any) {
    return (
        <nav id="navbar">
            <Title></Title>
            <ThemeSwitch></ThemeSwitch>
        </nav>
    )
}
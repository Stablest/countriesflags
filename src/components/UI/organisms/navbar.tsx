import Title from "../atoms/title"
import ThemeSwitch from "../molecules/themeSwitch"

export default function Navbar(props: any) {
    return (
        <nav id="navbar">
            <Title></Title>
            <ThemeSwitch onThemeChange={props.onThemeChange}></ThemeSwitch>
        </nav>
    )
}
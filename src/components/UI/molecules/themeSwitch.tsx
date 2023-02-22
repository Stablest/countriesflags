import { useState, useEffect } from 'react'


export default function ThemeSwitch(props: any) {
    const [theme, setTheme] = useState('../src/components/styles/blackTheme.css')

    useEffect(() => {
        const head = document.head;
        let link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;

        head.appendChild(link);
        return () => { head.removeChild(link); }
    }, [theme])

    return (
        <div id="themeSwitch">
            <button onClick={e => handleThemeChange()}>
                <img src="../assets/moon.svg" alt="moon-icon" className='dark-mode-img' />
                <span>Dark Mode</span>
            </button>
        </div>
    )

    function handleThemeChange() {
        switch (theme) {
            case '../src/components/styles/blackTheme.css':
                setTheme('../src/components/styles/whiteTheme.css')
                break
            case '../src/components/styles/whiteTheme.css':
                setTheme('../src/components/styles/blackTheme.css')
                break
        }
    }
}
import { useState, useEffect } from 'react'

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(window.localStorage.getItem('themeState') ? window.localStorage.getItem('themeState') : (window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'black' : 'white')

    useEffect(() => {
        if (theme == 'white') {
            const root: HTMLElement | null = document.querySelector(':root')
            root?.style.setProperty('--Elements', 'hsl(0, 0%, 100%)')
            root?.style.setProperty('--Background', 'hsl(0, 0%, 98%)')
            root?.style.setProperty('--TextAndLightModeElements', 'hsl(200, 15%, 8%)')
            root?.style.setProperty('--VeryDarkBlueText', 'hsl(200, 15%, 8%)')
            root?.style.setProperty('--DarkGrayInput', '#858585')
            root?.style.setProperty('--VeryLightGrayBackground', 'hsl(0, 0%, 98%)')
            root?.style.setProperty('--Shadow', '3px 3px 3px #ececec')
            root?.style.setProperty('--Filter', 'initial')
            root?.style.setProperty('--FilterSearch', 'invert(52%) sepia(0%) saturate(0%) hue-rotate(242deg) brightness(100%) contrast(99%)')
        } else {
            if (theme == 'black') {
                const root: HTMLElement | null = document.querySelector(':root')
                root?.style.setProperty('--Elements', 'hsl(209, 23%, 22%)')
                root?.style.setProperty('--Background', 'hsl(207, 26%, 17%)')
                root?.style.setProperty('--TextAndLightModeElements', 'hsl(0, 0%, 100%)')
                root?.style.setProperty('--Shadow', '3px 3px 3px rgb(41, 41, 41)')
                root?.style.setProperty('--DarkGrayInput', 'initial')
                root?.style.setProperty('--FilterSearch', 'initial')
                root?.style.setProperty('--Filter', 'invert(97%) sepia(8%) saturate(74%) hue-rotate(42deg) brightness(116%) contrast(100%)')
            } else {
                console.log('Error in ThemeSwitch')
            }
        }
    }, [theme])

    function handleThemeChange() {
        switch (theme) {
            case 'black':
                window.localStorage.setItem('themeState', 'white')
                setTheme('white')
                break
            case 'white':
                window.localStorage.setItem('themeState', 'black')
                setTheme('black')
                break
            default:
                console.log('Error in handleThemeChange')
                break
        }
    }

    return (
        <div id="themeSwitch">
            <button onClick={handleThemeChange}>
                <img src="/assets/moon.svg" alt="moon-icon" className='dark-mode-img' />
                <span>Dark Mode</span>
            </button>
        </div>
    )
}
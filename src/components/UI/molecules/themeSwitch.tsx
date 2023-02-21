import { useState, useEffect } from 'react'


export default function ThemeSwitch(props: any) {
    const [themeUrl, setThemeUrl] = useState('src/components/styles/blackTheme.css')

    useEffect(() => { props.onThemeChange(themeUrl) }, [themeUrl])
    return (
        <div id="themeSwitch">
            <button onClick={e => handleThemeChange()}>
                <img src="./assets/moon.svg" alt="moon-icon" className='dark-mode-img' />
            </button>
            <span>Dark Mode</span>
        </div>
    )

    function handleThemeChange() {
        switch (themeUrl) {
            case 'src/components/styles/blackTheme.css':
                setThemeUrl('src/components/styles/whiteTheme.css')
                console.log('a')
                break
            case 'src/components/styles/whiteTheme.css':
                setThemeUrl('src/components/styles/blackTheme.css')
                console.log('b')
                break
        }
    }
}
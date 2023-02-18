import '../../styles/home.css'

export default function ThemeSwitch(){
    return(
        <div id="themeSwitch">
            <button>
                <img src="./assets/moon.svg" alt="moon-icon" className='dark-mode-img' />
            </button>
            <span>Dark Mode</span>
        </div>
    )
}
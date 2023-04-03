import IDarkModeProps from "../../../interface/IDarkModeProps";

const getDefaultMode = () => {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
}

const getDefaultTextMode = () => {
    const savedMode = localStorage.getItem('textMode');
    return savedMode === "Dark mode" ? "Light mode" : 'Dark mode';
}

const DarkMode: React.FC<IDarkModeProps> = ({ styles, useState, useEffect}) => {

    const [darkMode, setDarkMode] = useState(getDefaultMode());
    const [buttonText, setButtonText] = useState(getDefaultTextMode());

    const getDarkMode = () => {
        darkMode == styles.dark ? setDarkMode(styles.light) : setDarkMode(styles.dark)
        buttonText === "Dark mode" ? setButtonText('Light mode') : setButtonText('Dark mode')
        localStorage.setItem('textMode', buttonText)
    }

    useEffect(() => {
        document.body.className = darkMode
        localStorage.setItem('mode', darkMode);
    }, [darkMode])

    return (
        <div className={styles.header_darkMode}><button type="button" onClick={() => getDarkMode()}>{buttonText}</button></div>
    )

}

export default DarkMode;
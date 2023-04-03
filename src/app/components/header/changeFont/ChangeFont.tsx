import IChangeFontProps from "../../../interface/IChangeFontProps"
import FontOptionTypes from "../../../types/FontOptionTypes"

const ChangeFont: React.FC<IChangeFontProps> = ({styles, useEffect, selectFont, setSelectFont }) => {

    const fontOptions: FontOptionTypes[] = [
        { name: "arial", style: styles.arial },
        { name: "serif", style: styles.serif },
        { name: "sans serif", style: styles.sans_serif },
        { name: "cursive", style: styles.cursive },
        { name: "Mono", style: styles.mono },
        { name: "times new roman", style: styles.times },
    ];

    useEffect(() => {
        const storedItem = localStorage.getItem('selectedItem');
        if (storedItem) {
          setSelectFont(storedItem);
        }
    }, [setSelectFont]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFont = e.target.value;
        localStorage.setItem('selectedItem', selectedFont);
        setSelectFont(selectedFont);
    }

    return (
        <select value={selectFont} onChange={handleSelectChange}>
            {fontOptions.map((font, i) => {
                return(
                    <option key={i} value={font.style}>{font.name}</option>
                )
            })
            }
        </select>
    )
}

export default ChangeFont;
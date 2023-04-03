import ISearchBoxProps from "../../../interface/ISearchBoxProps"
import searchLogo from "/src/app/assets/search_icon.png"

const SearchBox: React.FC<ISearchBoxProps> = ({ styles, getMeaning, query, setQuery }) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' ? getMeaning() : ""
    };

    return (
        <div className={styles.header_searchBox_inputBloc}>
            <input type="search" value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search for any word..." />
            <button type="submit" onClick={() => getMeaning()}><img src={searchLogo} alt="search logo" /></button>
        </div>
    )
}

export default SearchBox;
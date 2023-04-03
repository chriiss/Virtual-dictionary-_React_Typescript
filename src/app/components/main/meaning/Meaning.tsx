import DefinitionType from "../../../types/DefinitionTypes"
import IWordListProps from "../../../interface/IWordListProps"
import IMeaningProps from "../../../interface/IMeaningProps"
import soundLogo from "/src/app/assets/sound_icon.png"
import linkLogo from "/src/app/assets/link_icon.png"

const Meaning: React.FC<IMeaningProps> = ({ styles, meaning, selectFont }) => {

    const playAudio = (m: IWordListProps) => {
        for (let i = 0; i < m.phonetics.length; i++) {
            const audio = new Audio(m && m.phonetics[i] && m.phonetics[i].audio);
            audio.play();
        }
    }

    return (
        <section className={styles.main_meaning}>
            {meaning && (
                <div className={`${styles.main_meaning_bloc} ${selectFont}`}>
                    <div className={styles.main_meaning_bloc_children}>
                        <div>
                            <h1>{meaning.word}</h1>
                            <p>{meaning.phonetics[0] && meaning.phonetics[0].text}</p>
                        </div>
                        <div>
                            <button type="button" onClick={() => playAudio(meaning)}><img src={soundLogo} alt="sound logo" /></button>
                        </div>
                    </div>
                    <div className={styles.main_meaning_bloc_childrenBis}>
                        {meaning.meanings.map((data: DefinitionType, index: number) => {
                            return (
                                <div className={styles.main_meaning_bloc_childrenBis_grandChild} key={index}>
                                    <h2>{data.partOfSpeech}</h2>
                                    <h3>Meaning</h3>
                                    {data.definitions && data.definitions.map((item: any) => {
                                        return (
                                            <ul key={item.definition}>
                                                <li><p>{item.definition}</p></li>
                                                <li>{item.example}</li>
                                            </ul>
                                        )
                                    })}
                                    <div className={styles.main_flex}>
                                        <h3>Synonyms</h3>
                                        <p>{data.synonyms + " "}</p>
                                    </div>
                                    <div className={styles.main_flex}>
                                        <h3>Antonyms</h3>
                                        <p>{data.antonyms + " "}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.main_flex}>
                        <h3>Source</h3>
                        <a href={meaning.sourceUrls} target="_blank">{meaning.sourceUrls}&nbsp;<img src={linkLogo}  alt="link logo"/></a>
                    </div>
                </div>)
            }
        </section>
    )
}

export default Meaning;
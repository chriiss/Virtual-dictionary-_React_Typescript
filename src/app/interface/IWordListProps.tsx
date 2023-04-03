import DefinitionType from "../types/DefinitionTypes"
import PhoneTicsType from "../types/PhoneTicsTypes"

interface IWordListProps {
    word: string,
    meanings: DefinitionType[],
    phonetics:  PhoneTicsType[],
    sourceUrls: string[]
}

export default IWordListProps;
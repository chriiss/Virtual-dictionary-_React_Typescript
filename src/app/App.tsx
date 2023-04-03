import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './styles/App.module.scss'
import dataJson from "./data/DataJson.json"
import IWordListProps from './interface/IWordListProps';
import Logo from './components/header/logo/Logo';
import DarkMode from './components/header/darkMode/DarkMode';
import ChangeFont from './components/header/changeFont/ChangeFont';
import SearchBox from './components/main/searchBox/SearchBox';
import Meaning from './components/main/meaning/Meaning';

const App = () => {
  const [query, setQuery] = useState<string>("")
  const [meaning, setMeaning] = useState<IWordListProps>()
  const [selectFont, setSelectFont] = useState(styles.arial)

  const getMeaning = async () => {
    try  {
      await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`).then(response => {setMeaning(response.data[0])})
      setQuery("")
    } catch(error: any) {
      console.log(error)
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_bloc}>
          <div><Logo /></div>
          <ChangeFont React={React} styles={styles} useEffect={useEffect} selectFont={selectFont} setSelectFont={setSelectFont} />
          <DarkMode React={React} styles={styles} useState={useState} useEffect={useEffect} />
        </div>
        <div className={styles.header_searchBox}>
          <SearchBox React={React} styles={styles} getMeaning={getMeaning} query={query} setQuery={setQuery} />
        </div>
      </header><br />
      <main className={styles.main}>
        <Meaning React={React} styles={styles} meaning={meaning} selectFont={selectFont} />
      </main>
    </div>
  )
}

export default App

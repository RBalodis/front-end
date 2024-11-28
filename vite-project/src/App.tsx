import './App.css'
import CardList from './components/molecules/CardList'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ApiResponse, Character } from './types.ts'

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const getCharacters = async () => {
    const response = await axios.get<ApiResponse>('https://rickandmortyapi.com/api/character')
    setCharacters(response.data.results.map(char => ({
      ...char,
      location: char.location || { name: 'Unknown' }
    })))
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <CardList characters={characters}/>
    </div>
  )
}
export default App


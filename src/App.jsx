import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { getCharacters } from './utils/getCharacters';
import './App.css'
import { SearchBar } from './components/SearchBar';

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCharacters(true, null)
      .then((data) => setData(data));
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const fetchCharacter = () => {
    getCharacters(false, search)
      .then((data) => setData(data));
  }


  return (
    <main className='container'>
      <h1 className='title'>Rick and Morty Wiki</h1>
      <SearchBar fetchCharacter={fetchCharacter} handleInput={handleInput} />
        {data && (
          <section className='card-container'>
            {
              data.results.map((character) => {
                return (
                  <Card key={character.id} character={character} />
                  )
              })
            }
          </section>
        )}
    </main>
  )
}

export default App

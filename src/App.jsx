import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { API_URL } from './utils/constants';
import './App.css'
import { SearchBar } from './components/SearchBar';

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json()
      })
      .then(data => setData(data))
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const fetchCharacter = () => {
    fetch(`${API_URL}?name=${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error(error))
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

 import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { API_URL } from './utils/constants';
import './App.css'

function App() {
  const [data, setData] = useState(null);

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

  return (
    <main className='container'>
      <h1 className='title'>Rick and Morty Wiki</h1>
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

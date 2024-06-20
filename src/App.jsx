import { Card } from './components/Card';
import { SearchBar } from './components/SearchBar';
import { useFetchCharacters } from './hooks/useFetchCharacters';

function App() {
  const { data, setSearch, fetchCharacter } = useFetchCharacters();

  const handleInput = (e) => {
    setSearch(e.target.value);
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

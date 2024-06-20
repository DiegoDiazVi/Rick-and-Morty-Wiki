export const SearchBar = ({ fetchCharacter ,handleInput }) => {
    return (
        <section className='search-container'>
            <input className='search-input 'type="text" placeholder='Search for character' onBlur={handleInput}/>
            <button className='search-button' onClick={() =>fetchCharacter(false)}>🔍</button>
        </section>
    )
}
export function Card({ character }) {
    const { name, image, gender, status, species, location:{name: locationName} } = character;
    return (
        <>
        {
            character && (
            <div className='card'>
                <img className='card-avatar' src={image} alt="is the image of a character"/>
                <h2 className='card-name'>{name}</h2>
                <p className='card-species'>
                    <span className={'ball ' + (status === 'Alive' ? 'alive' : status === 'Dead' ? 'dead' : 'unknown')}></span> {` ${status} - ${species} (${gender})`}
                </p>
                <p className='card-location'>{`Last location: ${locationName}`}</p>
            </div>
            )
        }
        </>
    )
}
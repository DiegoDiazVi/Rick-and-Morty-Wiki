import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useFetchCharacters = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        getCharacters(true, null)
            .then((data) => setData(data));
    }, []);

    const fetchCharacter = () => {
        getCharacters(false, search)
            .then((data) => setData(data));
    }

    return { data, search, setSearch, fetchCharacter };
}
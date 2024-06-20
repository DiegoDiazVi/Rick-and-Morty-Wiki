import { API_URL } from './constants';

export const getCharacters = async (isFirstCall, search) => {
    const url = isFirstCall ? API_URL : `${API_URL}?name=${search}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
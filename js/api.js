/**
 * api.js — Capa d'accés a la PokéAPI.
 * Aquest és l'ÚNIC fitxer que fa crides fetch.
 * Implementa les funcions; la resta de mòduls les importaran.
 */

const BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Retorna la llista dels primers 151 Pokémon                                                            
 * Endpoint: GET /pokemon?limit=151
 * @returns {Promise<Array<{name: string, url: string}>>}
 */
export async function fetchPokemonList() {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=151`);
        if (!response.ok) {
            throw new Error('Error al cargar');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }

}

/**
 * Retorna les dades completes d'un Pokémon.
 * Endpoint: GET /pokemon/{idOrName}
 * @param {string|number} idOrName
 * @returns {Promise<Object>}
 */
export async function fetchPokemon(idOrName) {
    
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
    if (!response.ok) {
        throw new Error('Error al cargar');
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Retorna les dades d'espècie (inclou URL cadena evolutiva).
 * Endpoint: GET /pokemon-species/{id}
 * @param {number} id
 * @returns {Promise<Object>}
 */
 export async function fetchSpecies(id) {
    
    try {
        const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
     if (!response.ok) {
        throw new Error('Error al cargar');
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Retorna la cadena evolutiva donada la seva URL completa.
 * @param {string} url
 * @returns {Promise<Object>}
 */
export async function fetchEvolutionChain(url) {
    
    try {
        const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al cargar');
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
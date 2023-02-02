import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REHYDRATE } from 'redux-persist'
import type { IPokemon } from '../types/pokemon/Pokemon/Pokemon'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === REHYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getMove: builder.query<IPokemon, string>({
            query: (name) => `move/${name}`,
        }),
        getPokemonByName: builder.query<IPokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
        listPokemon: builder.query<any, { limit?:number, offset?:number }>({
            query: (arg) => {
                const { limit = 5000, offset = 0 } = arg;
                console.log('arg: ', arg);
                return {
                    url: 'pokemon/',
                    params: { limit, offset },
                };
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useListPokemonQuery,useGetMoveQuery } = pokemonApi
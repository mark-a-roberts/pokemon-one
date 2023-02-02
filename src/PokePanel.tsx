import {useGetPokemonByNameQuery} from "./services/pokemon";
import {Link} from "react-router-dom";
import React from "react";

export function PokePanel({name}:{name:string}) {
    const {data, error, isLoading} = useGetPokemonByNameQuery(name)
    console.log( `Loading ${name}`)

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading {name}...</>
            ) : data ? (
                <>
                    <Link to={`/poke/${name}`}>
                        <h3>{data.species.name}</h3>
                    </Link>
                    <img src={data.sprites.front_shiny} alt={data.species.name}/>
                </>
            ) : null}
        </>
    )
}
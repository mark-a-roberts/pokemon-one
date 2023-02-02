import React, {useEffect, useState} from "react";
import {useListPokemonQuery} from "./services/pokemon";
import {PokePanel} from "./PokePanel";

export function PokePage({page = 0, limit = 50}) {
    const [offset, setOffset] = useState(0);
    const {data, error, isLoading} = useListPokemonQuery({offset, limit});
    useEffect(() => {
        setOffset(page*limit)
    }, [page, limit])
    return (
        <>
            {error ? (
                <>Error loading list</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <div className={'container'}>
                        {data.results.map((pokemon: any) =>
                            <div className={'item'} key={pokemon.name}>
                                <PokePanel name={pokemon.name}></PokePanel>
                            </div>
                        )}
                    </div>

                </>
            ) : null}
        </>
    )
}
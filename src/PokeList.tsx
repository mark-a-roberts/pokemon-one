import {useListPokemonQuery} from "./services/pokemon";
import React, {useState} from "react";
import {PokePage} from "./PokePage";

export function PokeList() {
    // get part of list to determine count
    const {data, error, isLoading} = useListPokemonQuery({offset:0, limit:5});
    const limit = 50;
    const count = data?.count ?? limit;

    const [page, setPage] = useState<number>(0);
    const choosePage = (next:number) => {
        if (next >= 0) {
            setPage(next)
        }
    }

    return <>
        <PokePage page={page} limit={limit}></PokePage>
        <div>
            <button onClick={() => choosePage(page-1)}>Page {page-1}</button>
            <button onClick={() => choosePage(page+1)}>Page {page+1}</button>
        </div>
    </>
}
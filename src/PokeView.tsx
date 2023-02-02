import {useGetPokemonByNameQuery} from "./services/pokemon";
import {Link} from "react-router-dom";
import React from "react";

export function PokeView({name}:{name:string}) {
    const {data, error, isLoading} = useGetPokemonByNameQuery(name)
    console.log( `Loading ${name}`)

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading {name}...</>
            ) : data ? (
                <div>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny} alt={data.species.name}/>
                    <h4>Stats</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Stats</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.stats.map(
                            (stat) => (
                                <tr key={`${stat.stat.name}`}>
                                    <td>{stat.stat.name}</td>
                                    <td>
                                        Base stat: {stat.base_stat}<br/>
                                        Effort: {stat.effort}
                                    </td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>

                    <h4>Abilities</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Ability</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.abilities.map(
                                (ability) => (
                                    <tr key={`${ability.ability.name}`}>
                                        <td>{ability.ability.name}</td>
                                        <td></td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <h4>Moves</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Move</th>
                            <th>Details</th>
                        </tr>

                        </thead>
                        <tbody>
                        {data.moves.map(
                            (move) => (
                                <tr key={`${move.move.name}`}>
                                    <td>
                                        <Link to={`/move/${move.move.name}`}>{move.move.name}</Link>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                    <div>
                        <h4>Sprites</h4>
                        <div>
                            {Object.entries(data.sprites)
                                .filter((e) => (typeof e[1] === 'string'))
                                .map(([key, sprite]) => (
                                    <div key={`${key}`} style={{display:'inline-block'}}>
                                        <img src={sprite} alt={key}/>
                                        <h6>{key}</h6>
                                    </div>
                                ))
                            }
                        </div>
                        <h4>Other</h4>
                        <div>
                            {Object.entries(data.sprites.other)
                                .filter((e) => (typeof e[1] === 'string'))
                                .map(([key, sprite]) => (
                                    <div key={`${key}`} style={{display:'inline-block'}}>
                                        <img src={sprite} alt={key}/>
                                        <h6>{key}</h6>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Link to={`/`}>
                        <h3>Back</h3>
                    </Link>
                </div>
            ) : null}
        </>
    )

}
import {useGetMoveQuery} from "./services/pokemon";
import {Link} from "react-router-dom";
import React from "react";

export function PokeMove({name}: { name: string }) {
    const {data, error, isLoading} = useGetMoveQuery(name)
    console.log(`Loading ${name}`)

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Key</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading {name}...</>
                ) : data ? (
                    <>
                        {
                            Object.entries(data).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>
                                        <pre>{JSON.stringify(value, null, 2)}</pre>
                                    </td>

                                </tr>
                            ))
                        }
                    </>
                ) : null}
                </tbody>
            </table>
            <Link to={`/`}>
                <h3>Back</h3>
            </Link>
        </>
    )

}
import React, {useState, useEffect} from 'react'
import './App.css'
import {NotFound} from "./NotFound";
import {
    Routes, Route,
    useParams, BrowserRouter
} from "react-router-dom";

import {PokeList} from "./PokeList";
import {PokeMove} from "./PokeMove";
import {PokeView} from "./PokeView";

function MoveRoute() {
    const {id} = useParams();
    return id ?
        <>
            <PokeMove name={id}></PokeMove>
        </> : <></>
}


function PokeRoute() {
    const {id} = useParams();
    return id ?
    <>
        <PokeView name={id}></PokeView>
    </> : <></>
}

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<PokeList />} />
                    <Route path="/poke/:id" element={<PokeRoute />} />
                    <Route path="/move/:id" element={<MoveRoute />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

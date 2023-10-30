import React, { useState } from "react";
import {SearchElement} from "./icons/Search";

export function Search() {
    // Поле и кнопка поиска

    const [searchData, setSearchData] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(searchData);
    }

    return (
        <form className="search-form" onSubmit={submitHandler}>
            <button type="submit" className="search-button"> <svg className="search-svg">{SearchElement()}</svg> </button>
            <input
                className="search-input"
                id="search"
                type="search"
                placeholder="Поиск"
                value={searchData}
                onChange={(event) => setSearchData(event.target.value)}
            />
        </form >
    )
}
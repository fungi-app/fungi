import React, { useState } from "react";

export function Search() {

    const [searchData, setSearchData] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(searchData);
    }

    return (
        <form className="search-form" onSubmit={submitHandler}>
            <button type="submit" className="search-button">Поиск</button>
            <input
            className="search-input"
            id="search"
            type="search"
            placeholder="Поиск"
            value={searchData}
            onChange={(event) => setSearchData(event.target.value)}
             />
        </form>
    )
}
import { SearchInput } from "./inputs/TextInput";
import {SearchElement} from "./icons/Search";
import { useState } from "react";

interface searchProps {
    title: string,
    value: Function | undefined,
    inputName: string,
    required: boolean,
}

export function Search(props:searchProps) {
    // Поле и кнопка поиска

    return (
        <div className="search-form">
            <button className="search-button"> <svg className="search-svg">{SearchElement()}</svg> </button>
            <SearchInput title={props.title} value={props.value} inputName="inputName" required={props.required}/>
        </div >
    )
}
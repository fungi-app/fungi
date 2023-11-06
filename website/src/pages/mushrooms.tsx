import { MushroomList } from "../components/MushroomList";
import { Header } from "../components/Header";
import { TextInput } from "../components/inputs/TextInput";
import { useState } from "react";

export function MushroomEncyclopedia() {
    const [searchData, setSearchData] = useState('')

    return (
    <>
        <Header />
         <main>
            <TextInput title={"Поиск"} value={setSearchData} required={false}/>
            <MushroomList search_text={searchData}/>
        </main> 
    </>
    )
}
import { MushroomList } from "../components/MushroomList";
import { Search } from "../components/Search";
import { Header } from "../components/Header";
import { useState } from "react";

export function MushroomEncyclopedia() {
    const [searchData, setSearchData] = useState('')

    return (
        <>
            <Header />
            <main>
                <Search title={"Поиск"} value={setSearchData} inputName="searchInput" required={false} />
                <MushroomList search_text={searchData} />
            </main>
        </>
    )
}
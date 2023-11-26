import { useState } from "react";
import { FamilyList } from "../components/FamilyList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export function FamilyEncyclopedia() {
    const [searchData, setSearchData] = useState('');

    return (
        <>
            <Header />
            <main>
                <Search title={"Поиск"} value={setSearchData} inputName="searchInput" required={false} />
                <FamilyList search_text={searchData} />
            </main>
        </>
    )
}
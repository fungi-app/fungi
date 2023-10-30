import { FamilyList } from "../components/FamilyList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export function FamilyEncyclopedia() {
    return (
        <>
            <Header />
            <main>
                <Search />
                 <FamilyList />
            </main>
        </>
        )
}
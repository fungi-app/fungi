import { FamilyList } from "../components/FamilyList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export function FamilyEncyclopedia() {
    return (
        <>
            <Header />
            <main>
                <Search />
                 {/* <FamilyList /> TypeError: Cannot read properties of null (reading 'useContext') */}
            </main>
        </>
        )
}
import { MushroomList } from "../components/MushroomList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

export function MushroomEncyclopedia() {
    return (
    <>
        <Header />
         <main>
            <Search />
            {/* <MushroomList /> TypeError: Cannot read properties of null (reading 'useContext') */}
        </main> 
    </>
    )
}
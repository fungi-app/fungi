import { MushroomList } from "../components/MushroomList";
import { Header } from "../components/Header";

export function mushrooms() {
    return (
    <>
        <Header />
        <main>
            <MushroomList />
        </main>
    </>
    )
}
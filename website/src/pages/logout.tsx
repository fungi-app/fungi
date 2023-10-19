import { Header } from "../components/Header";

export function Logout () {
    return (
    <>
        <Header />
        <main>
        {/* <LeftMenu /> */}
        <div className="content">
        <h1>Выход из аккаунта</h1>
        <form>
            <button type="submit">Выйти</button>
        </form>
        </div>
        </main>
    </>
    )
}
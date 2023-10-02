import {Header} from "../components/Header";
import {LeftMenu} from "../components/LeftMenu";

export function Login () {
    return (
    <>
        <Header />
        <main>
            <LeftMenu />
            <div className="content">
            <h1>Вход</h1>
            <form>
                <label>Логин:<input placeholder="Введите свой логин" /></label>
                <label
                >Пароль:<input
                    type="password"
                    placeholder="Введите свой пароль"
                /></label
                >
                <input className="submit" type="submit" value="Войти" />
            </form>
            </div>
        </main>
    </>
    )
}

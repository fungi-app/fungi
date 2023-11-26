import { Header } from "../components/Header";

export function Register () {
    // input.username,
    // input.nickname,
    // input.email,
    // input.password,
    // ctx.device

    return (
    <>
        <Header />
        <main>
        {/* <LeftMenu /> */}
        <div className="content">
        <h1>Регистрация</h1>
        <form>
            <label>Ваше имя <input type="text"/></label>
            <label>Ваш никнейм <input type="text"/></label>
            <label>Ваш email <input type="email"/></label>
            <label>Ваш пароль <input type="password"/></label>
            <label>Повторите ваш пароль <input type="password"/></label>
            <button type="submit">Зарегистрироваться</button>
        </form>
        </div>
        </main>
    </>
    )
}
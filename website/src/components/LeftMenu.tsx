export function LeftMenu () {
    return (
        <div className="left-menu">
        <ul>
            <li className="left-menu__name-category">Разделы</li>
            <li><a href="/">Главная</a></li>
            <li><a href="/publications">Публикции</a></li>
            <li><a href="/encyclopedia">Энциклопедия</a></li>
            <li className="left-menu__name-category">Временные</li>
            <li><a href="/addMushroom">Добавление в бд</a></li>
        </ul>
        </div>
    )
}
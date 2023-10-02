export function Search () {
    return (
        <form className="search">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-search"
            ><circle cx="11" cy="11" r="8"></circle><line
            x1="21"
            y1="21"
            x2="16.65"
            y2="16.65"></line></svg>
        <input type="search" placeholder="Найти Fungi" className="search__input" />
        <button className="search__button">Найти</button>
        </form>
        )
}
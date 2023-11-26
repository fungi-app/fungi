import { Logo } from "./Logo";
//import { Search } from "./Search";

export function Header () {
    const menu = [
        {
          name: "О нас",
          link: "/about",
        },
        {
          name: "Публикации",
          link: "/publications",
        },
        {
          name: "Энциклопедия",
          link: "/encyclopedia",
        },
      ];
    return (
        <header className="header">
        <div className="header__search-wrapper">
            <Logo />
        </div>
        <div className="header__links-wrapper">
            {
            menu.map((e) => (
                <a
                className="header__link"
                href={e.link}
                >
                {e.name}
                </a>
            ))
            }
        </div>
        <button className="sandwich">
            {/* <Icon name="sandwich" size={24} /> */}
        </button>
        <div className="dropdown" aria-hidden="true">
            {
            menu.map((e) => (
                <a href={e.link}>
                {e.name}
                </a>
            ))
            }
        </div>
        </header>
    )
}

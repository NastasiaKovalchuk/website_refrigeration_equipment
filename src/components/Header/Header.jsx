import style from "./Header.module.scss";
import { Logo } from "./Logo";
import { SearchLogo } from "./SearchLogo";
import { MdOutlineClose } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleToggleSearch = () => setVisibleSearch(!visibleSearch);
  const handleBurger = () => setBurger(!burger);

  return (
    <>
      <header className={style.header}>
        <div className={style.header__wrapper}>
          <Logo />
          <ul
            className={`${style.contact} ${
              burger ? style["contact-active"] : ""
            }`}
          >
            <li>
              <a href="mailto:info@lead-group.ru">info@lead-group.ru</a>
            </li>
            <li>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
            </li>
          </ul>
        </div>
        {visibleSearch ? (
          <div className={style["header__search-block"]}>
            <input type="text" placeholder="search..." />
            <button onClick={handleToggleSearch}>
              <MdOutlineClose />
            </button>
          </div>
        ) : (
          <button onClick={handleToggleSearch}>
            <SearchLogo />
          </button>
        )}
        <button onClick={handleBurger} className={style.humburger}>
          {burger ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </button>
      </header>
      <nav className={`${style.links} ${burger ? style["active-links"] : ""}`}>
        <ul>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Флот</a>
          </li>
          <li>
            <a href="/">Инвесторам</a>
          </li>
          <li>
            <a href="/">Карьера</a>
          </li>
          <li>
            <a href="/">Пресс-центр</a>
          </li>
          <li>
            <a href="/">устойчивое развитие</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

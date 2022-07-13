import '../sass/header.scss'

export default function Header() {

  return (
    <header className="header">
      <img className="header__logo" src="./imgs/logo.svg" alt="logo" />

      {/* <div> */}
        <ul className="header-list">
          <li className="header-list__item item">
            <a className="item__link" href="/">
              Home
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              About us
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              Shop
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              Contact
            </a>
          </li>

          <li className="header-list__item item">
            <a className="item__link" href="/">
              <img src="./imgs/search.svg" alt="search" />
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              <img src="./imgs/favorites.svg" alt="favorites" />
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              <img src="./imgs/login.svg" alt="login" />
            </a>
          </li>
          <li className="header-list__item item">
            <a className="item__link" href="/">
              <img src="./imgs/basket.svg" alt="basket" />
            </a>
          </li>
        </ul>
      {/* </div> */}
    </header>
  )
}

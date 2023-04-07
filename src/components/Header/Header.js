import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          <img src={'https://extendeal.com/img/icon-black.svg'} alt="Logo" />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <Link to="/" className={styles.header__link}>
                Productos
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link to="/products/create" className={styles.header__link}>
                Añadir Productos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/* import React from 'react';
import { Link } from 'react-router-dom';
import './Header.module.scss';

function Header() {
    return (
        <header>
            <div class="header-container">
                <a href="#" class="logo">Logo</a>
                <nav class="nav">
                    <Link className="nav-link" to="/">
                        Products
                    </Link>
                    <Link className="nav-link" to="/products/create">
                        Add products
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header; */
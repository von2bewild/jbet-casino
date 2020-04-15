import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo-jbet.png';

import iconHouse from 'assets/icon-house.svg';
import iconPhone from 'assets/icon-phone.svg';
import iconEarth from 'assets/icon-earth.svg';
import iconMenu from 'assets/icon-menu-dotted.svg';
import flagUk from 'assets/flag-uk.png';

import * as S from './styles';

function Navigation() {
  const [isDropdownActive, toggleDropdown] = useState(false);
  const [selectedNavItem, setNavItem] = useState('');

  return (
    <S.Wrapper>
      <header>
        <S.TopNav>
          <ul>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <Link to="/" className="nav-item">
                <img src={iconHouse} alt="" />
                <span className="nav-label">home</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-item">
                <img src={iconPhone} alt="" />
                <span className="nav-label">get app</span>
              </Link>
            </li>
          </ul>
          <aside>
            <S.LoginForm>
              <header>
                <input
                  type="text"
                  className="textfield"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="textfield"
                  placeholder="Password"
                />
                <button className="login">login</button>
                <button className="signup">sign up</button>
              </header>
              <footer>
                <Link to="/">
                  forgot <i>username</i> or <i>password</i>
                </Link>
                <p>
                  25/01/2020 <strong>00:14:23</strong> (GMT+8)
                </p>
              </footer>
            </S.LoginForm>

            <S.Settings>
              <img src={flagUk} alt="" />
              <span className="country-label">En</span>
              <img src={iconMenu} alt="" className="menu-dotted" />
              <img src={iconEarth} alt="" />
            </S.Settings>
          </aside>
        </S.TopNav>
      </header>
      <nav>
        <S.BottomNav>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('live-casino');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              live casino
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('slots');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              slots
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('shooting-game');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              shooting game
            </Link>
          </li>
          <li>
            <Link to="/">table game</Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('sports');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              sports
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('virtuals');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              virtuals
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('vip');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              vip
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseEnter={() => {
                toggleDropdown(true);
                setNavItem('promotions');
              }}
              onMouseLeave={() => toggleDropdown(false)}
            >
              promotions
            </Link>
          </li>
        </S.BottomNav>
      </nav>
      <S.NavDropdown
        className={isDropdownActive ? 'active' : ''}
        onMouseEnter={() => toggleDropdown(true)}
        onMouseLeave={() => toggleDropdown(false)}
      >
        <section className={selectedNavItem === 'live-casino' ? 'active' : ''}>
          <ul className="live-casino">
            <li>
              <img src="" alt="" />
              <h6>Live bikini dealer</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>Live asian dealer</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>Live euro 1 dealer</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>Live euro 2 dealer</h6>
            </li>
          </ul>
        </section>
        <section className={selectedNavItem === 'slots' ? 'active' : ''}>
          <ul className="slots">
            <li>
              <img src="" alt="" />
              <h6>av slots</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>bb games</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>betsoft</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>gameplay</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>pragmatic</h6>
            </li>
          </ul>
        </section>
        <section
          className={selectedNavItem === 'shooting-game' ? 'active' : ''}
        >
          <ul className="shooting-game">
            <li>
              <img src="" alt="" />
              <h6>fishing world 2</h6>
            </li>
            <li>
              <img src="" alt="" />
              <h6>max quest</h6>
            </li>
          </ul>
        </section>
        <section className={selectedNavItem === 'sports' ? 'active' : ''}>
          <ul className="sports">
            <li>
              <img src="" alt="" />
              <h6>bet now</h6>
            </li>
          </ul>
        </section>
        <section className={selectedNavItem === 'virtuals' ? 'active' : ''}>
          <ul className="virtuals">
            <li>
              <img src="" alt="" />
              <h6>virtual sports</h6>
            </li>
          </ul>
        </section>
        <section className={selectedNavItem === 'vip' ? 'active' : ''}>
          <ul className="vip">
            <li>
              <img src="" alt="" />
              <h6>bet now</h6>
            </li>
          </ul>
        </section>
        <section className={selectedNavItem === 'promotions' ? 'active' : ''}>
          <ul className="promotions">
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
          <h6>more promotion</h6>
        </section>
      </S.NavDropdown>
    </S.Wrapper>
  );
}

export default Navigation;

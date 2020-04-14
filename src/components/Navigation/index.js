import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo-jbet.png';

import iconHouse from 'assets/icon-house.svg';
import iconPhone from 'assets/icon-phone.svg';
import iconEarth from 'assets/icon-earth.svg';
import iconMenu from 'assets/icon-menu-dotted.svg';
import flagUk from 'assets/flag-uk.png';

import * as S from './styles';

function Navigation() {
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
              <img src={iconMenu} alt="" className="menu-dotted"/>
              <img src={iconEarth} alt="" />
            </S.Settings>
          </aside>
        </S.TopNav>
      </header>
      <nav>
        <S.BottomNav>
          <li>
            <Link to="/">live casino</Link>
          </li>
          <li>
            <Link to="/">slots</Link>
          </li>
          <li>
            <Link to="/">shooting game</Link>
          </li>
          <li>
            <Link to="/">table game</Link>
          </li>
          <li>
            <Link to="/">sports</Link>
          </li>
          <li>
            <Link to="/">virtuals</Link>
          </li>
          <li>
            <Link to="/">vip</Link>
          </li>
          <li>
            <Link to="/">promotions</Link>
          </li>
        </S.BottomNav>
      </nav>
    </S.Wrapper>
  );
}

export default Navigation;

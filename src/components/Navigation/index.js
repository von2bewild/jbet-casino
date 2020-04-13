import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo-jbet.png';

import * as S from './styles';

function Navigation() {
  return (
    <S.Wrapper>
      <header>
        <S.TopNav>
          <figure>
            <img src={logo} alt="" />
          </figure>
          <ul>
            <li></li>
          </ul>
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

import React from 'react';

import banner1 from 'assets/img-home-banner-1.png';
import banner2 from 'assets/img-home-banner-2.png';
import banner3 from 'assets/img-home-banner-3.png';
import banner4 from 'assets/img-home-banner-4.png';

import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <header />
      <footer>
        <p>
          New customers only. Opt-in required. 1st deposit bonus 100% up to
          £200. 2nd deposit bonus 50% up to £200, 3rd deposit bonus 25% up to
          £200, 4th deposit bonus 25% up to £200. Min deposit £10. 40x wagering,
          30 days to complete wagering, eligibility, game weighting and game
          restrictions apply. Max Bet with bonus funds £5. Neteller/Skrill
          deposits excluded, cash balance can be withdrawn at any time. Full
          bonus terms.
        </p>
      </footer>
      <ul>
        <li>
          <img src={banner1} alt=""/>
        </li>
        <li>
          <img src={banner2} alt=""/>
        </li>
        <li>
          <img src={banner3} alt=""/>
        </li>
        <li>
          <img src={banner4} alt=""/>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Header;

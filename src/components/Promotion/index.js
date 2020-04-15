import React from 'react';

import iconGroup from 'assets/icon-group.svg';
import iconVip from 'assets/icon-vip.svg';
import iconGift from 'assets/icon-gift.svg';
import iconPhone from 'assets/icon-phone-call.svg';

import * as S from './styles';

function Promotion() {
  return (
    <S.Wrapper>
      <ul>
        <li>
          <figure>
            <img src={iconGroup} alt="" className="icon1" />
          </figure>
          <h4>Affiliate Program</h4>
          <p>Free to join affiliates program and earn commissions based.</p>
        </li>
        <li>
          <figure>
            <img src={iconVip} alt="" className="icon2" />
          </figure>
          <h4>VIP Program</h4>
          <p>Upgrade to VIP to enjoy exclusive benefit and earn rewards.</p>
        </li>
        <li>
          <figure>
            <img src={iconGift} alt="" className="icon3" />
          </figure>
          <h4>Jbet Casino Promotion</h4>
          <p>Apply for special financing and earn rewards.</p>
        </li>
        <li>
          <figure>
            <img src={iconPhone} alt="" className="icon4" />
          </figure>
          <h4>24/7 Customer Service</h4>
          <p>Have a question? Call a Specialist or chat online.</p>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Promotion;

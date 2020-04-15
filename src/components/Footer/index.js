import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logoSeal from 'assets/logo-seal.png';
import iconWebanq from 'assets/icon-webanq.svg';
import iconNeteller from 'assets/icon-neteller.png';
import iconMaster from 'assets/icon-master-card.png';
import iconVisa from 'assets/icon-visa.png';
import iconJcb from 'assets/icon-jcb.png';
import iconChrome from 'assets/icon-chrome.svg';
import iconSafari from 'assets/icon-safari.svg';
import iconFirefox from 'assets/icon-firefox.svg';
import iconTwitter from 'assets/icon-twitter.svg';

import * as S from './styles';

function Footer() {
  return (
    <Fragment>
      <S.FooterNav>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">VIP Program</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/">Affiliate</Link>
          </li>
        </ul>
        <p>© 2020 Jbetcasino. All rights reserved.</p>
      </S.FooterNav>
      <S.FooterContent>
        <section>
          <article>
            <S.FooterItem>
              <span className="label">License</span>
              <figure>
                <img src={logoSeal} alt="" className="logo-seal" />
                <p>
                  Operated by Wild Jungle N.V. Under License No. 80848 / JAZ
                </p>
              </figure>
            </S.FooterItem>
            <S.FooterItem className="margin-left">
              <span className="label">Payment Method</span>
              <figure>
                <img src={iconWebanq} alt="" className="logo-webanq" />
                <img src={iconNeteller} alt="" className="logo-neteller" />
                <img src={iconMaster} alt="" className="logo-master" />
                <img src={iconVisa} alt="" className="logo-visa" />
                <img src={iconJcb} alt="" className="logo-jcb" />
              </figure>
            </S.FooterItem>
          </article>
          <article>
            <S.FooterItem>
              <span className="label">Suggested Browser</span>
              <figure>
                <img src={iconChrome} alt="" className="logo-browser" />
                <img src={iconSafari} alt="" className="logo-browser" />
                <img src={iconFirefox} alt="" className="logo-browser" />
              </figure>
            </S.FooterItem>
            <S.FooterItem className="margin-left">
              <span className="label">Follow us</span>
              <figure>
                <a href="/" target="_blank">
                  <img src={iconTwitter} alt="" className="logo-browser" />
                </a>
              </figure>
            </S.FooterItem>
          </article>
        </section>
      </S.FooterContent>
    </Fragment>
  );
}

export default Footer;

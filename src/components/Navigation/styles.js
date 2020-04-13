import styled from 'styled-components';
import colors from 'theme/colors';
import bgTopNav from 'assets/bg-topnav.jpg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > header {
    width: 100%;
    height: 100px;
    background: ${colors.green_1} url(${bgTopNav}) repeat-x;
  }
  > nav {
    background: #003402;
    height: 47px;
    width: 100%;
    opacity: 0.75;
  }
`;

export const TopNav = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  figure {
    height: 56px;

    img {
      height: 100%;
    }
  }
`;

export const BottomNav = styled.ul`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;

  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    display: block;
    padding: 10px;
    font-weight: 600;
    &:hover {
      color: ${colors.green_3};
    }
  }
`;

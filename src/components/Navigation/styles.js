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
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 20px;
    }
    img {
      height: 56px;
      margin-right: 50px;
    }
    .nav-item {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
        max-width: 25px;
        max-height: 25px;
      }
      .nav-label {
        font-size: 15px;
        text-transform: uppercase;
        color: #fff;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
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

export const LoginForm = styled.div`
  margin-top: 12px;
  header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .textfield {
      width: 200px;
      height: 39px;
      background: #fff;
      border-radius: 11px;
      border: none;
      padding: 0 10px;
      margin-right: 20px;
    }
    .login {
      width: 93px;
      height: 39px;
      background: #c7982b;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      border: none;
      border-radius: 10px;
      margin-right: 10px;
    }
    .signup {
      width: 158px;
      height: 39px;
      background: #00ff55;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      color: #000;
      border: none;
      border-radius: 10px;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    a {
      color: #fff;
      font-size: 12px;
      i {
        text-decoration: underline;
        font-style: normal;
      }
    }
    p {
      font-size: 12px;
      margin: 0;
      color: #fff;
      strong {
        color: #18fb64;
        font-weight: 400;
      }
    }
  }
`;

export const Settings = styled.div`
  margin-left: 30px;
  img {
    cursor: pointer;
  }
  .country-label {
    color: #fff;
    margin: 0 0 0 10px;
  }
  .menu-dotted {
    height: 26px;
  }
`;

export const NavDropdown = styled.aside`
  height: 260px;
  width: 100%;
  position: fixed;
  top: 147px;
  left: 0;
  background: rgba(0, 52, 2, 0.75);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: 0.2s all ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
  }
  > section {
    display: none;
    &.active {
      display: block;
    }
  }
  ul {
    margin: 20px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1200px;
    position: relative;

    li {
      text-align: center;
      cursor: pointer;
    }
    &.active {
      display: flex;
    }
    &.live-casino li {
      flex: 0 0 24%;
    }
    &.slots li {
      flex: 0 0 19%;
    }
    &.sports li {
      flex: 0 0 100%;
    }
    &.virtuals li {
      flex: 0 0 100%;
    }
    &.shooting-game li {
      flex: 0 0 49%;
    }
    &.promotions li {
      flex: 0 0 24%;
    }
  }
  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    display: block;
    background: #ddd;
    margin: auto;
  }
  h6 {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    display: block;
    margin: 10px auto 0;
    font-weight: 600;
    text-align: center;
  }
`;

import styled from 'styled-components';
import colors from 'theme/colors';

export const Wrapper = styled.div`
  > nav {
  }
`;

export const FooterNav = styled.div`
  max-width: 1400px;
  margin: auto;
  width: 100%;
  background: #fff;
  justify-content: space-between;
  display: flex;
  padding: 25px 20px;

  ul {
    display: flex;
    li {
      padding: 0 15px;
      border-right: 1px solid #ddd;
    }
    li:last-child {
      border-right: none;
    }
    li:first-child {
      padding: 0 15px 0 0;
    }
  }
  a {
    font-size: 17px;
    margin: 0;
    color: #0f0000;
    &:hover {
      color: ${colors.green_3};
    }
  }
  p {
    margin: 0;
    color: #0f0000;
    font-size: 17px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  background: #f1f1f1;

  > section {
    max-width: 1400px;
    padding: 45px 20px;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    display: flex;

    > article {
      display: flex;
    }
  }
`;

export const FooterItem = styled.div`
  &.margin-left {
    margin-left: 60px;
  }
  .label {
    font-size: 12px;
    font-weight: 600;
    color: #858585;
    display: block;
  }

  figure {
    margin: 10px 0 0 0;
    padding: 0;
    display: flex;
    align-items: center;

    p {
      font-size: 10px;
      color: #484747;
      max-width: 160px;
      margin: 0;
    }
    .logo-seal {
      width: 52px;
    }
    .logo-webanq {
      width: 97px;
      margin: 10px 10px 0 0;
    }
    .logo-neteller {
      width: 88px;
      margin: 10px 10px 0 0;
    }
    .logo-master {
      width: 45px;
      margin: 10px 10px 0 0;
    }
    .logo-visa {
      width: 75px;
      margin: 10px 10px 0 0;
    }
    .logo-jcb {
      width: 31px;
      margin: 10px 10px 0 0;
    }
    .logo-browser {
      width: 34px;
      margin: 10px 10px 0 0;
    }
  }
`;

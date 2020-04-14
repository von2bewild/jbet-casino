import styled from 'styled-components';
import bg from 'assets/bg-header-home.jpg';
import colors from 'theme/colors';

export const Wrapper = styled.div`
  header {
    height: 520px;
    background: #444 url(${bg}) center right/cover no-repeat;
  }
  footer {
    width: 100%;
    background: ${colors.green_1};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      max-width: 1400px;
      font-size: 14px;
      color: #e5e5e5;
      margin: 0;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    max-width: 1600px;
    margin: auto;
    li {
      flex: 0 0 49.5%;
      img {
        width: 100%;
        padding-bottom: 15px;
      }
    }
  }
`;

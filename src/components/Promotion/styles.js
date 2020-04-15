import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 20px;
  background: #2c7d04;

  ul {
    display: flex;
    max-width: 1200px;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    flex-wrap: wrap;

    li {
      flex: 0 0 24%;
      text-align: center;
      @media (max-width: 900px) {
        flex: 0 0 49%;
        margin-bottom: 20px;
      }
      figure {
        height: 133px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        display: block;
        margin: auto;

        &.icon1 {
          width: 124px;
        }
        &.icon2 {
          width: 133px;
        }
        &.icon3 {
          width: 95px;
        }
        &.icon4 {
          width: 92px;
        }
      }
    }
  }
  h4 {
    color: #fff;
    font-weight: 700;
    margin: 10px 0 0 0;
    font-size: 16px;
  }
  p {
    color: #fff;
    margin: 5px 0 0 0;
    font-size: 14px;
  }
`;

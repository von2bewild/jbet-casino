import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #e8e8e8;
  padding: 40px 20px;

  ul {
    max-width: 1400px;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      flex: 0 0 48%;
    }
  }
  h3 {
    font-size: 20px;
    color: #169572;
    font-weight: 700;
  }
  p {
    color: #232121;
    letter-spacing: 0.17px;
    font-size: 17px;
  }
`;

import styled from 'styled-components';

export const NavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  min-height: 15vh;
  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.3rem;
  }
  span {
    background: #ff26;
  }
`;

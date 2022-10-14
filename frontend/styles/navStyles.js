import styled from 'styled-components';

export const MenuItems = styled.button`
  background: none;
  border: none;
  height: 30px;
`;
export const NavLogo = styled.div`
  svg {
    margin-bottom: 1rem;
  }
`;

export const NavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin: 0 1rem;

  svg {
    font-size: 2rem;
    color: white;
  }
  a {
    font-size: 4.2rem;
    color: black;
    margin-left: 5rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  cursor: pointer;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div:last-child {
    margin-left: 1rem;
  }

  h3 {
    color: black;
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.3rem;
    color: black;
  }
  span {
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.85rem;
    padding-bottom: 0.1rem;
    position: absolute;
    right: -10%;
    top: -20%;
    pointer-events: none;
  }
`;

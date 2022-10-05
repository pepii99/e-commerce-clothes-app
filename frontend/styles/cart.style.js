import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  color: #474747;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  /* display: none; */
`;

export const CartStyle = styled.div`
  width: 35%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  image {
    width: 8rem;
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  svg {
    font-size: 5rem;
    color: var(--secondary);
  }
`;

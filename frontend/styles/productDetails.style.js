import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 30%;
  }
`;

export const ProductInfo = styled.div`
  width: 25%;
  align-self: flex-end;
  margin-bottom: 5%;

  h3 {
    color: var(--secondary);
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  #color {
    margin-top: 1rem;
    text-transform: uppercase;
    color: var(--secondary);
  }
  #price {
    margin-top: 1rem;
    color: var(--secondary);
  }
`;

export const ProductDescription = styled.div`
  width: 20%;
  align-self: flex-end;
  margin-bottom: 5%;

  h3 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.7rem;
    line-height: 1.4rem;
    margin: 1rem 0;
  }
  a {
    text-decoration: underline;
    font-size: 0.65rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  button {
    background-color: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
`;

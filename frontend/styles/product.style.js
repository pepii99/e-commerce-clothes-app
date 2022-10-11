import styled from 'styled-components';

export const ProductStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  flex-direction: row;
`;

export const ProductImage = styled.div`
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  margin-left: 1rem;
  width: 10%;

  h2 {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 0.8rem;
  }
`;

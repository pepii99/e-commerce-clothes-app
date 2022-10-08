import styled from 'styled-components';

export const HomeMenu = styled.div`
  position: absolute;
  z-index: 2;
  top: 92%;
  left: 40%;
  color: white;
  a:first-child {
    margin: 0;
  }
  a {
    margin-left: 2rem;
    font-size: 1rem;
  }
`;
export const HomeStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 3rem;
  }
`;

export const HomeDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

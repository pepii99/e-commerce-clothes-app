import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';

export const CartWrapper = styled(motion.div)`
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
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: auto;
  position: relative;
`;

export const Card = styled(motion.div)`
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

export const CardInfo = styled(motion.div)`
  width: 50%;

  h3 {
    text-transform: uppercase;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
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

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;

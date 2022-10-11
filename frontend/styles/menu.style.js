import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  color: #474747;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const MenuStyle = styled(motion.div)`
  width: 20%;
  background: #f1f1f1;
  padding: 2rem 2rem;
`;

export const MenuHeader = styled(motion.div)`
  display: flex;
  justify-content: start;
  gap: 2rem;
  margin-bottom: 5rem;
  /* flex-direction: row; */

  h2 {
    font-size: 1rem;
    color: var(--secondary);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const MenuItems = styled(motion.div)`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1rem;
    margin: 0;
    color: black;
  }
`;

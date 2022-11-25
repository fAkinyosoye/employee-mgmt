import styled from "styled-components";

import { Colors } from "./Colors";

interface BurgerProps {
  open: boolean;
  setOpen: Function;
  className: string;
}

export const Burger = ({ open, setOpen, className }: BurgerProps) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      className={className}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.button<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${Colors.boiGreen};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(-4px)" : "translateX(0)")};
    }
    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

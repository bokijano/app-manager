import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 40%;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: bolder;
  background: transparent;
  border: 0.05rem solid blue;
  color: lightblue;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.5rem 30%;
  &:hover {
    background: lightblue;
    color: blue;
    &:focus {
      outline: none;
    }
  }
`;

export default ButtonWrapper;

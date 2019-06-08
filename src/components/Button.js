import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 60%;
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: bolder;
  background: transparent;
  border: 0.05rem solid blue;
  border-color: ${props => (props.list ? "yellow" : "lightblue")};
  color: dodgerBlue;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.5rem 20%;
  &:hover {
    background: ${props => (props.list ? "yellow" : "lightblue")};
    color: blue;
    &:focus {
      outline: none;
    }
  }
`;

export default ButtonWrapper;

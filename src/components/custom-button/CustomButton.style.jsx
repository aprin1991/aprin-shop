import styled, { css } from "styled-components";

const buttnstyle = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const collectionButton = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  opacity: 0;
  transition: all ease 0.4s;
  pointer-events: none;
`;
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const getButtonStyle = (props) => {
  if (props?.isGoogleButton) {
    return googleSignInStyles;
  } else if (props?.collection) {
    return collectionButton;
  }
  return props?.inverted ? invertedButtonStyles : buttnstyle;
};
export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${getButtonStyle}
`;

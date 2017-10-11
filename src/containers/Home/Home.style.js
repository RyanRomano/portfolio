import styled, { css } from 'styled-components';

export const Hero = styled.div`
  height: 50vh;
  background-image: url('${require('../../assets/header.png')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
  	color: white;
  	text-align: center;
  	margin: .25em;
  }
`;

export const RevealP = styled.p`
  position: relative;
  margin-bottom: 50px;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  &:hover {
    color: pink;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

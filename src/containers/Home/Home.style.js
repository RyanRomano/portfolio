import styled, { css } from 'styled-components'

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Hero = styled.div`
  height: 50vh;
  background-image: url('${require('../../assets/header.png')}');
  margin-bottom: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

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
    color: white;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

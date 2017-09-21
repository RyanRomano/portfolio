import styled, { css } from 'styled-components'

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Navbar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  h1 {

  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
  }

  li {
    display: inline;
    margin-left: .5em;
    font-size: 1.5em;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: white;
  }
`

export const Hero = styled.div`
  height: 50vh;
  background-image: url('${require('../../assets/header.png')}');

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
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
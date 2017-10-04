import { injectGlobal } from 'styled-components';
import styled, { css } from 'styled-components'

export const Navbar = styled.div`
	display: flex;
	justify-content: space-between;

  h1 {
    color: black;
		flex-basis: 25%;
	}

 	a {
		color: black;
	}

	a:hover,
	h1:hover {
		color: white;
	}

	a:nth-child(5){
		text-decoration: none;
		padding-top: .95em;
		font-size: 1.5em;
	}
`

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=VT323');

	body {
		font-family: 'VT323', monospace;
		font-size: 24px;
		margin: 0;
		padding: 0;
		background-color: lightgrey;
	}

	.overlay {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	  width: 100%;
	  position: fixed;
	  z-index: 1;
	  top: 0;
	  left: 0;
	  background-color: rgba(0,0,0, 1);
		transition-duration: .5s;
		font-size: 3em;

		a:nth-child(5), h1{
			display: none;
		}

		a:nth-child(6){
			visibility: visible;
		}

		.menuItem {
			margin-top: 1em;
			margin-bottom: 1em;
			margin-left: auto;
			margin-right: auto;
		}
		.closeX {
			text-decoration: none;
			position: fixed;
			right: 10%;
			top: .8em;
		}

	}

	.overlay a {
		color: white;
	}

	.normal {
		a:nth-child(2),
		a:nth-child(3),
		a:nth-child(4),
		a:nth-child(6){
			display: none;
		}
	}
`

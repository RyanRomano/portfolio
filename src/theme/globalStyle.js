import { injectGlobal } from 'styled-components';

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=VT323');

	body {
		font-family: 'VT323', monospace;
		font-size: 24px;
		margin: 0;
		padding: 0;
		background-color: rgb(247, 247,247);
	}

	p:hover{
		color:pink;
	}

`

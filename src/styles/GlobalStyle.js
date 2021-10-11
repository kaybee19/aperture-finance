import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*----------------------------
	xs: 0px
	sm: 600px
	md: 900px
	lg: 1200px
	xl: 1536px
----------------------------*/

/*----------------------------
	Global styles
----------------------------*/

	.bg-white {
		background-color: white;
	}
	.container {
		padding-left: 6.5%;
		padding-right: 6.5%;
	}
	nav {
		background-color: white;
		padding: 1rem 0;
	}
	nav .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.navContent {
		display: flex;	
	}
	.flexClass {
		display: flex;
		align-items: center;
	}
	.borderClass {
		border-radius: 40px;
	}
	.button-link {
		text-decoration: none;
	}
	.linkClass {
		color: #5234F9!important;
		text-decoration: none;
	}
	.hiddenClass {
		display: none!important;
	}

	/*-- Fonts --*/

	.MuiTypography-root {
		font-family: 'Poppins', sans-serif!important;
	}
	.fontBold {
		font-weight: 600!important;
	}
	.textColor {
		color: #6E6699;
	}


/*----------------------------
	Particles Background
----------------------------*/


	.heroText #tsparticles {
		display: none!important;
	}

	.tsparticles-canvas-el {
    position: absolute!important;
    height: 100vh!important;
	}


/*----------------------------
	Navbar styles
----------------------------*/

	nav {
		position: relative;
		z-index: 5;
	}
	
	.languageClass {
		margin: 0 1.5rem;
	}
	.languageClass img.flag {
		border-radius: 5px;
	}
	.languageClass #languageButton {
		cursor: pointer;
		margin: .25rem 1.5rem 0 .25rem;
	}
	#basic-menu .MuiPopover-paper .Mui-focusVisible {
		background-color: white!important;
	}
	#basic-menu .MuiPopover-paper .Mui-focusVisible:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
	@media (max-width: 600px) {
		#languageButton {
			margin: .25rem 0.75rem 0 .25rem!important;
		}
		.languageClass {
			margin: 0;
		}
	}


/*----------------------------
	Component styles
----------------------------*/

	/*-- Hero --*/
	.heroText {
		width: 57.5%;
	}
	.heroText p {
		margin-top: 1.5rem;
	}
	.heroText button {
		margin-top: 2rem;
	}
	@media (max-width: 900px) {
		.heroText {
			width: 80%;
		}
	}

	/*-- Content --*/
	#contentWrapper p {
		margin: 1.5rem 0;
	}

	/*-- How --*/
	#how {
		overflow: clip;
		padding-bottom: 5rem;
	}
	#how h4 {
		font-size: 31px!important;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}
	#how .container .textColor {
		width: 40%;
	}
	#how #stable {
		min-height: 100vh;
		width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
    background-color: #FAFAFA;
	}
	#how .stable-fixed {
		height: 120vh;
		position: relative;
		z-index: -10;
	}
	.reverse {
  	float: right!important;
  	left: auto!important;
  	animation-name: icon-animation-reverse!important;
	}
	@media (max-width: 900px) {
		#how .container .textColor {
			width: auto;
		}
	}

	/*-- Launch App --*/
	#launch {
		min-height: 120vh;
		position: relative;
	}

	/*-- Performance --*/
	#performance {
		min-height: 120vh;
		position: relative;
	}
	#performance .g2-tooltip-value {
		position: relative;
		font-weight: 600;
	}
	#performance .g2-tooltip-value:before  {
		content: '$';
		position: absolute;
		font-weight: 600;
		left: -8px;
		top: 0;
		height: 100%;
		width: 100%;
	}

	/*-- Footer --*/
	#footer {
		min-height: 18vh;
    background: white;
		position: relative;
		@media (max-width: 900px) {
			min-height: 22.5vh;
		}
		@media (max-width: 900px) and (max-height: 500px) {
			min-height: 50vh;
		}
		@media (max-width: 365px) {
			min-height: 27.5vh;
		}
	}


`;

export default GlobalStyle;
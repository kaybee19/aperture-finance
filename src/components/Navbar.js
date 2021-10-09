import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useApp } from '../context/Context';
import AppButton from './layout/AppButton';
import { HashLink } from 'react-router-hash-link';

// Images
import logo from '../assets/images/logo.png';
import eng from '../assets/images/eng.png';
import ch from '../assets/images/china.png';
import menu from '../assets/images/menu.png';

// Material UI
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavButton = styled.div`
	@media (max-width: 600px) {
		& p {
			display: none!important
		}
		& button {
			background-color: transparent!important;
			color: rgb(82, 52, 249);
			padding: 0!important;
		}
		& svg {
			font-size: 2rem!important;
		}
	}
`;

const NavDrawer = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
	justify-content: center;
	position: relative;
	@media (max-width: 900px) {
		margin-bottom: 5rem;
	}
	@media (max-width: 400px) {
		margin: 0;
	}
`

const Close = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	padding: 0 1rem;
	font-size: 3rem;
	font-weight: 200;
	cursor: pointer;
`

const NavItems = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-transform: capitalize;
	& a {
		margin: 1rem;
	}
`;

const Image = styled.img`
	cursor: pointer;
`;

// Reusable nav links component
const NavLinks = (props) => {
	return (
		<HashLink className='button-link' to={`/#${props.link}`}>
			<Typography variant='h6' style={{color: 'black'}}>{props.text}</Typography>
		</HashLink>
	)
}

export default function Navbar() {

	const { colorSelect, language, langSelect } = useApp();
	const [languageIcon, setIcon] = React.useState(language);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nav, setNav] = React.useState(false);
  const open = Boolean(anchorEl);

  // Drawer & navbar onclick handler
  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNav(!nav);
  };

  // On page load set language
	React.useEffect(() => {
		if (language === 'english') {
			setIcon(eng)
		}
		else if (language === 'chinese')  {
			setIcon(ch)
		}
	}, [language]);

	// Handlers for dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

	// Handler for language change accross website
	const handleChange = (event) => {
		let val = event.target.getAttribute('value');
		langSelect(val);
		if (val === 'english') {
			setIcon(eng)
		}
		else if (val === 'chinese')  {
			setIcon(ch)
		}
		handleClose();
	};

	const buttonText = { english: 'investor portal', chinese: '投资者门户' }

  // Language navbar item
	const navLang = (
		<div id='nav-menu'>
			<div
	      id="languageButton"
	      aria-controls="language-menu"
	      aria-haspopup="true"
	      aria-expanded={open ? 'true' : undefined}
	      onClick={handleClick}
	    >
				<img className='flag' src={languageIcon} width='32' alt='' />
				<KeyboardArrowDownIcon />
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
				'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem value='english' onClick={handleChange}>English</MenuItem>
				<MenuItem value='chinese' onClick={handleChange}>Chinese</MenuItem>
			</Menu>
		</div>
	);

	const drawerText = {
		english: {
			about: 'about us',
			how: 'how this works',
			risks: 'what are the risks',
			performance: 'performance',
			funds: 'funds available',
		},
		chinese: {
			about: '关于我们',
			how: '这是如何工作的',
			risks: '有什么风险',
			performance: '表现',
			funds: '可用资金',
		}
	}

  // Navbar items
  const Items = (
  	<NavDrawer>
  		<Close onClick={toggleDrawer}>&times;</Close>
      <NavItems onClick={toggleDrawer}>
      	<NavLinks link='about' text={drawerText[language] && drawerText[language].about} />
      	<NavLinks link='how' text={drawerText[language] && drawerText[language].how} />
      	<NavLinks link='risks' text={drawerText[language] && drawerText[language].risks} />
      	<NavLinks link='performance' text={drawerText[language] && drawerText[language].performance} />
      	<NavLinks link='funds' text={drawerText[language] && drawerText[language].funds} />
      </NavItems>
      <div className="flexClass languageClass" style={{ margin: '2rem 0',marginLeft: '3.5rem'}}>
    		{navLang}
      </div>
			<AppButton icon={<PersonIcon />} link='http://vps.aperture.finance:8080/' external text={buttonText[language]} color={colorSelect('primary')} />
  	</NavDrawer>
	);

	return (
		<nav>
			<div className='container'>
				<Link to='/'>
					<img src={logo} width='50' alt='aperture finance' />
				</Link>
				<div className='navContent'>
					<NavButton>
						<AppButton icon={<PersonIcon />} link='http://vps.aperture.finance:8080/' external text={buttonText[language]} color={colorSelect('primary')} />
					</NavButton>
					<div className='flexClass languageClass'>
						{navLang}
						<div>
							<Image onClick={toggleDrawer} src={menu} width='21' alt="menu hamburger" />
						</div>
		        <Drawer
		          anchor='right'
		          open={nav}
		          onClose={toggleDrawer}
		        >
		          {Items}
		        </Drawer>
					</div>
				</div>
			</div>
		</nav>
	);
};
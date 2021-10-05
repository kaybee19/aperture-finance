import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useApp } from '../context/Context';
import AppButton from './layout/AppButton';

// Images
import logo from '../assets/images/logo.png';
import eng from '../assets/images/eng.png';
import ch from '../assets/images/china.png';
import menu from '../assets/images/menu.png';

// Material UI
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

export default function Navbar() {

	const { colorSelect, language, langSelect } = useApp();
	const [languageIcon, setIcon] = React.useState(language);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

	return (
		<nav>
			<div className='container'>
				<Link to='/'>
					<img src={logo} width='50' alt='aperture finance' />
				</Link>
				<div className='navContent'>
					<NavButton>
						<AppButton icon={<PersonIcon />} text={buttonText[language]} color={colorSelect('primary')} />
					</NavButton>
					<div className='flexClass languageClass'>
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
						<div>
							<img src={menu} width='21' alt="menu hamburger" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
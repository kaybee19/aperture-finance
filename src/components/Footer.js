import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Material UI
import Typography from '@mui/material/Typography';
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const FooterWrapper = styled.div`
	background-color: white;
	padding-bottom: 2rem;
	padding-top: 1rem;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
  position: fixed;
  z-index: -1;
  bottom: 0;
  & a {
  	color: black!important;
  }
`;

const Wrapper = styled.div`
	margin: 24px 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 900px) {
		flex-direction: column;
		& a {
			margin-top: 1rem;
		}
	}
`;

const Icons = styled.div`
	display: flex;
	& a {
		margin-left: .75rem;
	}
`;

const Icon = (props) => {
	return(
		<a target='_blank' rel="noreferrer" href={props.link}>
			<span style={{color: props.color}}>{props.icon}</span>
		</a>
	)
}

export default function Footer() {

	const { colorSelect, language } = useApp();
  const el = React.useRef(null);
  const child = React.useRef(null);

  // Function + useEffect for handling fixed background
  const handleScroll = () => {
  	let rect = el.current.getBoundingClientRect();
		if (rect.bottom < -100) {
			child.current.style.zIndex = '-5';
			el.current.style.zIndex = '-5';
		}
		else {
			child.current.style.zIndex = '-4';
			el.current.style.zIndex = '-4';
		}
  }
  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

	const iconLinks = [
		{link: 'https://www.instagram.com', icon: <Instagram /> },
		{link: 'https://www.linkedin.com', icon: <LinkedIn /> },
		{link: 'http://twitter.com', icon: <Twitter /> },
		{link: 'https://www.facebook.com', icon: <Facebook /> },
	];

	const text = {
		english: 'Email',
		chinese: '电子邮件'
	}

	const rights = {
		chinese: '版权所有',
		english: 'All rights reserved'
	}

	return (
		<div ref={el} id="footer">
			<FooterWrapper ref={child} className='container'>
				<Wrapper>
					<Typography variant='body2'>{text[language]} - <a className='linkClass' href="mailto:contact@aperture.finance">contact@aperture.finance</a></Typography>
					<Icons>
						{
							iconLinks.map((icon, i) => (
								<Icon color={colorSelect('grey')} link={icon.link} icon={icon.icon} key={i} />
							))
						}					
					</Icons>
				</Wrapper>
				<Typography style={{textAlign: 'center'}} variant='body2'>© 2021 Finance Aperture. {rights[language]}</Typography>
			</FooterWrapper>
		</div>
	);
};
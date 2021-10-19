import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/404.png';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
	display: flex;
	position: absolute;
	flex-direction: center;
	align-items: center;
	height:	100vh;
	width: 100%;
	background-color: #222225;
	@media (max-width: 900px) and (max-height: 500px) {
		height: 150vh;
	}
`;

const Content = styled.div`
	text-align: center;
	color: white;
	width: 100%;
`;

const Image = styled.img`
	max-width: 400px;
	text-align: center;
	@media (max-width: 600px) {
		width: 200px;
	}
`;

export default function NotFound() {

	return (
		<Wrapper>
			<Content>
				<Image src={img} alt='Not found' />
				<Typography variant='h6'>Oops! Something went wrong</Typography>
				<Typography variant='body1'>We couldn’t find what you’re looking for</Typography>
			</Content>
		</Wrapper>
	);
};
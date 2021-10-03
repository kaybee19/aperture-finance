import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Material UI
import Typography from '@mui/material/Typography';

const Card = styled.div`
	margin: 2rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 16px 24px;
	background: #FFFFFF;
	box-shadow: 0px 1px 2px rgba(82, 52, 249, 0.02), 0px 4px 8px rgba(82, 52, 249, 0.08);
	border-radius: 8px;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center
`;

const ImageText = styled.div`
	margin-left: 1rem;
	text-align: left;
	& h6 {
		font-weight: 600;
	}
`;

const TextContainer = styled.span`
	text-align: left;
`;

export default function FounderCard(props) {

	const { language } = useApp();
	const { text } = props;

	const coText = {
		english: 'Co-Founder',
		chinese: '创始人'
	}

	return (
		<Card>
			<ImageContainer>
				<img src={text.img} alt="" width='100' />
				<ImageText>
					<Typography variant='h6'>{text.title}</Typography>
					<Typography style={{marginTop: 0}} className='textColor' variant='body2'>{coText[language]}</Typography>
				</ImageText>
			</ImageContainer>
			<TextContainer>
				<Typography variant='body2'>{text.text1}</Typography>
				<Typography variant='body2'>{text.text2}</Typography>
			</TextContainer>
		</Card>
	);
}

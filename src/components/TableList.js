import React from 'react';
import styled from 'styled-components';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
	color: white;
	padding: 16px;
	display: flex;
	align-items: baseline;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Header = styled(Typography)`
	color: #7C65FA;
	min-width: 200px;
	text-transform: capitalize;
	@media (max-width: 900px) {
		margin-bottom: 1rem!important;
		font-weight: bold!important;
	}
`;

const Body = styled(Typography)`
`;

export default function TableList(props) {

	return (
		<Wrapper>
			<Header variant='body2'>{Object.keys(props.text)}</Header>
			<Body variant='body2'>{Object.values(props.text)}</Body>
		</Wrapper>
	);
}

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
		padding: 16px 24px;
		background: #2C2C30;
		box-shadow: 0px 1px 2px rgba(82, 52, 249, 0.02), 0px 4px 8px rgba(82, 52, 249, 0.08);
		border-radius: 8px;
		margin: 20px 0px 40px;
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

import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
	color: white;
	padding: 16px;
	display: flex;
	align-items: baseline;
`;

const Header = styled(Typography)`
	color: #7C65FA;
	min-width: 200px;
	text-transform: capitalize;
`;

const Body = styled(Typography)`
	
`;

export default function TableList(props) {

	const { language } = useApp();

	return (
		<Wrapper>
			<Header variant='body2'>{Object.keys(props.text)}</Header>
			<Body variant='body2'>{Object.values(props.text)}</Body>
		</Wrapper>
	);
}

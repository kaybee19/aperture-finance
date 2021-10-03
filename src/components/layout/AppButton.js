import * as React from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';

const ButtonWrapper = styled(Button)`
	font-size: 16px!important;
	font-weight: 600!important;
	max-width: 194px;
	max-height: 44px;
	color: white;
	padding: 8px 25px!important;
	border-radius: 8px!important;
	text-transform: capitalize!important;
	box-shadow: none!important;
`

export default function AppButton(props) {

	return (
		<React.Fragment>
      <ButtonWrapper style={{ backgroundColor: props.color }} startIcon={props.icon} variant="contained">{props.text}</ButtonWrapper>
		</React.Fragment>
	);
}

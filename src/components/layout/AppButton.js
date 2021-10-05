import * as React from 'react';
import { Link } from "react-router-dom";
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
	& p {
		margin-top: 0rem!important;
		margin-bottom: 0rem!important;
	}
`

export default function AppButton(props) {

	let buttonProps = <ButtonWrapper style={{ backgroundColor: props.color }} startIcon={props.icon} variant="contained"><p>{props.text}</p></ButtonWrapper>

	return (
		<React.Fragment>
			{
				props.link ? <Link className='button-link'  to={{ pathname: props.link }} target={props.external && '_blank'}>{buttonProps}</Link> : buttonProps
			}
		</React.Fragment>
	);
}

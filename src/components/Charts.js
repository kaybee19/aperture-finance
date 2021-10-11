import React from 'react';
import styled from 'styled-components';

// Chart component
import { Chart, LineAdvance } from 'bizcharts';

// Material UI
import Typography from '@mui/material/Typography';

const ChartWrapper = styled.div`
	width: 42.5%!important;
	box-shadow: 0px 1px 2px rgba(20, 28, 31, 0.02), 0px 4px 8px rgba(20, 28, 31, 0.08);
	padding: 2rem 2rem 1rem;
	margin-top: 2rem;
	border-radius: 8px;
	& .textColor {
		margin-bottom: 1rem;
	}
	@media (max-width: 1050px) {
		width: 100%!important;
		max-width: 400px;
		padding: 1rem;
	}
	@media (max-width: 900px) {
		width: auto!important;
		max-width: 100%;
	}
	@media (max-width: 900px) and (max-height: 500px) {
		width: 300px!important;
		margin-top: 1rem;
		padding: 0 1rem;
		& > div {
			height: 200px!important;
		}
	}
	@media (max-width: 900px) and (max-height: 500px) {
		width: 350px!important;
	}
	@media (max-width: 600px) {
		padding: 0 8px;
	}
`;

const ChartBody = styled(Chart)`
	@media (max-width: 900px) {
		max-height: 200px;
		width: auto!important;
	}
`;


export default function Charts(props) {
	return (
		<ChartWrapper>
			{props.text && <Typography variant='body2' className='textColor'>{props.text}</Typography>}
			<ChartBody padding={[10, 20, 40, 60]} autoFit height={300} data={props.data} >
				<LineAdvance
					shape="smooth"
					point
					area
					position="week*Value"
				/>
			
			</ChartBody>
		</ChartWrapper>
	)
}


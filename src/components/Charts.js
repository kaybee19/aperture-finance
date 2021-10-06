import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Chart component
import { Chart, LineAdvance } from 'bizcharts';

// Material UI
import Typography from '@mui/material/Typography';

const ChartWrapper = styled.div`
	width: 45%!important;
	box-shadow: 0px 1px 2px rgba(20, 28, 31, 0.02), 0px 4px 8px rgba(20, 28, 31, 0.08);
	padding: 24px;
	margin-top: 2rem;
	border-radius: 8px;
	& .textColor {
		margin-bottom: 1rem;
	}
`;

const ChartBody = styled(Chart)`
`;

const data = [
	{
		month: "Jan",
		value: "Tokyo",
		val: 50
	},
	{
		month: "Feb",
		value: "Tokyo",
		val: 175
	},
	{
		month: "Mar",
		value: "Tokyo",
		val: 90
	},
	{
		month: "Apr",
		value: "Tokyo",
		val: 425
	},
	{
		month: "May",
		value: "Tokyo",
		val: 150
	},
	{
		month: "Jun",
		value: "Tokyo",
		val: 200
	},
	{
		month: "Jul",
		value: "Tokyo",
		val: 305
	},
];

export default function Charts() {
	return (
		<ChartWrapper>
			<Typography variant='body2' className='textColor'>Assets Under Management</Typography>
			<ChartBody padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
				<LineAdvance
					shape="smooth"
					point
					area
					position="month*val"
				/>
			
			</ChartBody>
		</ChartWrapper>
	)
}


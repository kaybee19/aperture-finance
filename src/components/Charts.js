import React from 'react';
import aum from '../assets/images/aum.png';
import cr from '../assets/images/cr.png';

export default function Charts() {

	return (
		<div style={{marginTop: '3rem', justifyContent: 'space-between'}} className='flexClass'>
			<img src={aum} width='592' alt="assets under management" />
			<img src={cr} width='592' alt="cumulative returns" />
		</div>
	);
}
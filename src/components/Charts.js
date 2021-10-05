import React from 'react';
import styled from 'styled-components';
import aum from '../assets/images/aum.png';
import cr from '../assets/images/cr.png';

const Wrapper = styled.div`
	margin-top: 3rem;
	justify-content: space-between;
  @media (min-width: 1800px) {
  	justify-content: center;
  	align-items: center;
  }
	@media (max-width: 900px) {
		margin-bottom: 1rem;
		& img:nth-of-type(2) {
			display: none;
		}
	@media (max-width: 600px) and (max-height: 700px) {
		margin-top: 1.5rem;
	}
}
`

const Image = styled.img`
	@media (max-width: 900px) {
		width: 100%;
		height: auto;
	}
`;

export default function Charts() {

	return (
		<Wrapper className='flexClass'>
			<Image src={aum} width='592' alt="assets under management" />
			<Image src={cr} width='592' alt="cumulative returns" />
		</Wrapper>
	);
}
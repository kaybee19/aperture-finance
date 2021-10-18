import React from 'react';
import styled from 'styled-components';
import img from '../assets/images/404.png';

const Wrapper = styled.div`
	
`;

const Image = styled.img`
	
`;

export default function NotFound() {

	return (

		<Image src={img} alt='Not found' />
	);
};
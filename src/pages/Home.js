import React from 'react';

// Comps
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import How from '../components/How';
import What from '../components/What';
import LaunchApp from '../components/LaunchApp';
import Risks from '../components/Risks';
import Performance from '../components/Performance';
import Funds from '../components/Funds';
import About from '../components/About';
import Partners from '../components/Partners';


export default function Home() {

	return (
		<React.Fragment>
			<Hero />
			<ContentRow />
			<How />
			<What />
			<LaunchApp />
			<Risks />
			<Performance />
			<Funds />
			<About />
			{/*<Partners />*/}
		</React.Fragment>
	);
};
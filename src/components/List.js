import React from 'react';
import styled from 'styled-components';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

const ListClass = styled(SmoothList)`
	width: 100%;
	& .flexClass {
		margin: 2rem 0;
	}
	& hr {
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}
`;

export default function List(props) {

	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	return (
		<div ref={ref}>
			<ListClass transitionDuration={1000} delay={500} visible={view}>
				<div className='flexClass' style={{alignItems: 'baseline'}}>
					<Typography variant='body1' style={{fontWeight: 600}}>0{Object.keys(props.text)}.</Typography>
					<Typography style={{marginLeft: '1rem'}} variant='body1'>{Object.values(props.text)}</Typography>
				</div>
				<hr />
			</ListClass>
		</div>
	);
}

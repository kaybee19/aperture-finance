import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { useApp } from '../context/Context';
import AppButton from './layout/AppButton';
import Particles from "react-tsparticles";
import SmoothList from 'react-smooth-list';

// Material UI
import Typography from '@mui/material/Typography';

const Wrapper = styled(SmoothList)`
	height: 92.5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: auto;
	flex-direction: column;
	& button {
		position: relative;
		z-index: 5;
	}
	@media (max-width: 900px) {
		& h2 {
			font-size: 2.5rem;
		}
	}
`;

export default function Hero(props) {

	const { language, colorSelect } = useApp();

	const h2Text = {
		english: 'Yield-farming DeFi Portfolio Actively Managed',
		chinese: '去中心化金融(DeFi) 收益聚合主动基金'
	};
	const subText = {
		english: 'Higher returns than traditional yield aggregators with a combination of active strategies empowered by smart contracts.',
		chinese: '基于智能合约，采用主动投资策略，在传统 DeFi 收益聚合器之外获取更高收益。'
	};
	const buttonText = {
		english: 'How it works',
		chinese: '投资策略'
	};



  // const particlesInit = (main) => {
  //   console.log(main);
  // }
  // const particlesLoaded = (container) => {
  //   console.log(container);
  // }

	return (
		<div className="bg-white">
			<Wrapper transitionDuration={1000} className='heroText'>
			{/* Particles component */}
				<Particles
		    id="tsparticles"
		    // init={particlesInit}
		    // loaded={particlesLoaded}
		    options={{
		    	"autoPlay":true,
		    	"background":{"color":{"value":"transparent"},
		    	"image":"",
		    	"position":"50% 50%",
		    	"repeat":"no-repeat",
		    	"size":"cover",
		    	"opacity":1},
		    	"backgroundMask":{"composite":"destination-out",
		    	"cover":{"color":{"value":"#fff"},
		    	"opacity":1},
		    	"enable":false},
		    	"fullScreen":{"enable":true,
		    	"zIndex":1},
		    	"detectRetina":true,
		    	"duration":0,
		    	"fpsLimit":60,
		    	"interactivity":{"detectsOn":"canvas",
		    	"events":{"onClick":{"enable":true,
		    	"mode":"push"},
		    	"onDiv":{"selectors":[],
		    	"enable":false,
		    	"mode":[],
		    	"type":"circle"},
		    	"onHover":{"enable":true,
		    	"mode":"grab",
		    	"parallax":{"enable":false,
		    	"force":60,
		    	"smooth":10}},
		    	"resize":true},
		    	"modes":{"attract":{"distance":200,
		    	"duration":0.4,
		    	"easing":"ease-out-quad",
		    	"factor":1,
		    	"maxSpeed":50,
		    	"speed":1},
		    	"bounce":{"distance":200},
		    	"bubble":{"distance":400,
		    	"duration":2,
		    	"mix":false,
		    	"opacity":0.8,
		    	"size":40},
		    	"connect":{"distance":80,
		    	"links":{"opacity":0.5},
		    	"radius":60},
		    	"grab":{"distance":200,
		    	"links":{"blink":false,
		    	"consent":false,
		    	"opacity":1}},
		    	"light":{"area":{"gradient":{"start":{"value":"#ffffff"},
		    	"stop":{"value":"#000000"}},
		    	"radius":1000},
		    	"shadow":{"color":{"value":"#000000"},
		    	"length":2000}},
		    	"push":{"default":true,
		    	"groups":[],
		    	"quantity":4},
		    	"remove":{"quantity":2},
		    	"repulse":{"distance":200,
		    	"duration":0.4,
		    	"factor":100,
		    	"speed":1,
		    	"maxSpeed":50,
		    	"easing":"ease-out-quad"},
		    	"slow":{"factor":3,
		    	"radius":100},
		    	"trail":{"delay":1,
		    	"pauseOnStop":false,
		    	"quantity":1}}},
		    	"manualParticles":[],
		    	"motion":{"disable":false,
		    	"reduce":{"factor":4,
		    	"value":true}},
		    	"particles":{"bounce":{"horizontal":{"random":{"enable":false,
		    	"minimumValue":0.1},
		    	"value":1},
		    	"vertical":{"random":{"enable":false,
		    	"minimumValue":0.1},
		    	"value":1}},
		    	"collisions":{"bounce":{"horizontal":{"random":{"enable":false,
		    	"minimumValue":0.1},
		    	"value":1},
		    	"vertical":{"random":{"enable":false,
		    	"minimumValue":0.1},
		    	"value":1}},
		    	"enable":false,
		    	"mode":"bounce",
		    	"overlap":{"enable":true,
		    	"retries":0}},
		    	"color":{"value":"#16141F",
		    	"animation":{"h":{"count":0,
		    	"enable":false,
		    	"offset":0,
		    	"speed":1,
		    	"sync":true},
		    	"s":{"count":0,
		    	"enable":false,
		    	"offset":0,
		    	"speed":1,
		    	"sync":true},
		    	"l":{"count":0,
		    	"enable":false,
		    	"offset":0,
		    	"speed":1,
		    	"sync":true}}},
		    	"destroy":{"mode":"none",
		    	"split":{"count":1,
		    	"factor":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":3},
		    	"rate":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":{"min":4,
		    	"max":9}},
		    	"sizeOffset":true}},
		    	"gradient":[],
		    	"groups":{},
		    	"life":{"count":0,
		    	"delay":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0,
		    	"sync":false},
		    	"duration":{"random":{"enable":false,
		    	"minimumValue":0.0001},
		    	"value":0,
		    	"sync":false}},
		    	"links":{"blink":false,
		    	"color":{"value":"#16141F"},
		    	"consent":false,
		    	"distance":150,
		    	"enable":true,
		    	"frequency":1,
		    	"opacity":0.4,
		    	"shadow":{"blur":5,
		    	"color":{"value":"#00ff00"},
		    	"enable":false},
		    	"triangles":{"enable":false,
		    	"frequency":1},
		    	"width":1,
		    	"warp":false},
		    	"move":{"angle":{"offset":0,
		    	"value":90},
		    	"attract":{"distance":200,
		    	"enable":false,
		    	"rotate":{"x":600,
		    	"y":1200}},
		    	"decay":0,
		    	"distance":{},
		    	"direction":"none",
		    	"drift":0,
		    	"enable":true,
		    	"gravity":{"acceleration":9.81,
		    	"enable":false,
		    	"inverse":false,
		    	"maxSpeed":50},
		    	"path":{"clamp":true,
		    	"delay":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0},
		    	"enable":false,
		    	"options":{}},
		    	"outModes":{"default":"out",
		    	"bottom":"out",
		    	"left":"out",
		    	"right":"out",
		    	"top":"out"},
		    	"random":false,
		    	"size":false,
		    	"speed":1.5,
		    	"spin":{"acceleration":0,
		    	"enable":false},
		    	"straight":false,
		    	"trail":{"enable":false,
		    	"length":10,
		    	"fillColor":{"value":"#000000"}},
		    	"vibrate":false,
		    	"warp":false},
		    	"number":{"density":{"enable":true,
		    	"area":800,
		    	"factor":1000},
		    	"limit":0,
		    	"value":80},
		    	"opacity":{"random":{"enable":false,
		    	"minimumValue":0.1},
		    	"value":0.5,
		    	"animation":{"count":0,
		    	"enable":false,
		    	"speed":1,
		    	"sync":false,
		    	"destroy":"none",
		    	"startValue":"random",
		    	"minimumValue":0.1}},
		    	"orbit":{"animation":{"count":0,
		    	"enable":false,
		    	"speed":1,
		    	"sync":false},
		    	"enable":false,
		    	"opacity":1,
		    	"rotation":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":45},
		    	"width":1},
		    	"reduceDuplicates":false,
		    	"repulse":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0,
		    	"enabled":false,
		    	"distance":1,
		    	"duration":1,
		    	"factor":1,
		    	"speed":1},
		    	"roll":{"darken":{"enable":false,
		    	"value":0},
		    	"enable":false,
		    	"enlighten":{"enable":false,
		    	"value":0},
		    	"mode":"vertical",
		    	"speed":25},
		    	"rotate":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0,
		    	"animation":{"enable":false,
		    	"speed":0,
		    	"sync":false},
		    	"direction":"clockwise",
		    	"path":false},
		    	"shadow":{"blur":0,
		    	"color":{"value":"#000000"},
		    	"enable":false,
		    	"offset":{"x":0,
		    	"y":0}},
		    	"shape":{"options":{},
		    	"type":"circle"},
		    	"size":{"random":{"enable":true,
		    	"minimumValue":1},
		    	"value":{"min":1,
		    	"max":5},
		    	"animation":{"count":0,
		    	"enable":false,
		    	"speed":40,
		    	"sync":false,
		    	"destroy":"none",
		    	"startValue":"random",
		    	"minimumValue":0.1}},
		    	"stroke":{"width":0},
		    	"tilt":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0,
		    	"animation":{"enable":false,
		    	"speed":0,
		    	"sync":false},
		    	"direction":"clockwise",
		    	"enable":false},
		    	"twinkle":{"lines":{"enable":false,
		    	"frequency":0.05,
		    	"opacity":1},
		    	"particles":{"enable":false,
		    	"frequency":0.05,
		    	"opacity":1}},
		    	"wobble":{"distance":5,
		    	"enable":false,
		    	"speed":50},
		    	"zIndex":{"random":{"enable":false,
		    	"minimumValue":0},
		    	"value":0,
		    	"opacityRate":1,
		    	"sizeRate":1,
		    	"velocityRate":1}},
		    	"pauseOnBlur":true,
		    	"pauseOnOutsideViewport":true,
		    	"responsive":[],
		    	"themes":[],
		    	"zLayers":100
		    }}
		  />
				<Typography variant='h2' className='fontBold'>{h2Text[language]}</Typography>
				<Typography className='textColor' variant='body1'>{subText[language]}</Typography>
				<HashLink className='button-link' to='/#how'>
					<AppButton text={buttonText[language]} color={colorSelect('primary')} />
				</HashLink>
			</Wrapper>
		</div>
	);
}

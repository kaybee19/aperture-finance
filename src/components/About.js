import React from 'react';
import { useApp } from '../context/Context';
import styled from 'styled-components';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

// Images
import investor1 from '../assets/images/investor1.png';
import investor2 from '../assets/images/investor2.png';
import investor3 from '../assets/images/investor3.png';

// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Comps
import FounderCard from './FounderCard';

const Wrapper = styled.div`
	padding: 96px;
	background-color: #FAFAFA;
	text-align: center;
	& h4 {
		text-transform: capitalize;
		font-weight: 600;
	}
	& p {
		max-width: 965px;
		margin: auto;
		margin-top: 1rem;
	}
	@media (max-width: 900px) {
		padding: 48px 24px;
	}
`;

const CardWrapper = styled(Grid)`
	justify-content: center;
	align-items: flex-start;
	padding: 0px;
`;

export default function About() {

	const { language } = useApp();
	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])
 
	const text = {
		english: {
			about: 'Founded in 2020, Aperture Finance is a startup based in the Silicon Valley with a focus on DeFi investment and protocol development. Aperture Finance adopts active strategies to provide the higher yields than conventional yield aggregators and develops smart contracts to scale and manage risks.'
		},
		chinese: {
			关于我们: 'Aperture Finance于2021年设立于美国加州硅谷，走在区块链技术和去中心化金融（DeFi）的最前沿，利用智能合约为投资者赋能。有别于普通收益聚合器（Yield Aggregator), Aperture Finance利用组合投资策略和对冲手段，为投资者提供高价值回报。'
		},
	}

	const founderText = {
		english: [
			{
				img: investor1,
				title: 'Lian Zhu',
				text1: 'Lian Zhu is a Senior Product Manager at AWS. He has over 10 years’ product management, having worked for Amazon Kindle and Netflix, owning the localization strategy as the voice of the product in the Greater China Region.',
				text2: 'He is the Founder and CEO of Internest Inc. Lian is also an EMBA graduate candidate at UC Berkeley Haas. He has extensive experience in investing in the crypto and DeFi space.',
			},
			{
				img: investor2,
				title: 'Peiqian Li',
				text1: 'Peiqian Li is a Senior Software Engineer at Google, with 6 years’ experience in recommender systems and Deep Learning. He obtained his MSc. and BSc. in Computer Science from Stanford University and Columbia University.',
				text2: 'He is a medalist in both the National Olympiad in Informatics (NOI) and ACM ICPC. Peiqian has a profound understanding of blockchain design and application. His current focus is Smart Contract development.',
			},
			{
				img: investor3,
				title: 'Gao Han',
				text1: 'Gao Han is a Senior Software Engineer at Google with a focus on machine learning and Big Data. Having worked as Software Engineer at AWS, he is well versed with system and infrastructure design. ',
				text2: 'He earned his BSc in Computer Science at Cornell University and was part of a Harvard University research team on the Connectome Project for human brain neuron mapping. He has been focusing on the DeFi space and is exploring arbitrage opportunities.',
			}
		],
		chinese: [
			{
				img: investor1,
				title: '朱力安',
				text1: '朱力安在硅谷科技公司有12年的产品经理和创业经验，前后在亚马逊云服务（AWS)。Netflix及Amazon Kindle负责国际产品及本地化战略。',
				text2: 'Internest Inc.创始人兼CEO，加州大学伯克利分校EMBA在读，多年区块链投资和创业经验。',
			},
			{
				img: investor2,
				title: '李佩谦',
				text1: '李佩谦，谷歌资深软件工程师，具有6年的系统推荐算法、计算机深度学习经验，先后在哥伦比亚大学和斯坦福大学获得计算机学士和硕士学位',
				text2: '获得过算法编程比赛多个奖项。深度了解区块链底层逻辑，专注智能合约开发。',
			},
			{
				img: investor3,
				title: '韩郜',
				text1: '韩郜，谷歌资深软件工程师，具有多年机器学习和大数据分析经验。曾于亚马逊云服务 (AWS）担任软件工程师',
				text2: '擅长系统设计和基础设施架构。康奈尔大学计算机学士，本科期间参与参与哈佛大学Connectome大脑神经元成像研究项目。长期专注DeFi项目并寻找套利机会。',
			}
		],
	}

	return (
		<Wrapper className='container'>
			<Typography variant='h4'>{Object.keys(text[language])}</Typography>
			<Typography className='textColor' variant='body1'>{Object.values(text[language])}</Typography>
			<div ref={ref}>
				<SmoothList transitionDuration={1000} delay={200} visible={view}>
					<CardWrapper container justifyContent='center'>
						{
							founderText[language].map((text, i) => (
								<Grid item xs={12} md={6} spacing={4}>
									<FounderCard text={text} key={i} />
								</Grid>
							))
						}
					</CardWrapper>
				</SmoothList>
			</div>
		</Wrapper>
	);
}

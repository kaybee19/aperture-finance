import React from 'react';
import { useApp } from '../context/Context';
import diversify from '../assets/gif/diversify.gif';
import defi from '../assets/gif/defi.gif';
import tech from '../assets/gif/tech.gif';

// Comps
import Content from './Content';

export default function ContentRow() {

	const { language } = useApp();

	const contentText = [
		{
			english: {
				heading: 'Diversify Your Portfolio',
				subText: 'Yield farming has taken hold in the DeFi world since 2020. It puts crypto assets to work and generates rewards for you. Aperture Finance helps you extend your investment into the DeFi space.',
				buttonText: 'Funds Available'
			},
			chinese: {
				heading: '为投资者赋能',
				subText: '区块链投资和去中心化金融对投资者存在天然技术门槛。交易和转账的非可逆性，也让许多投资者望而却步。Aperture Finance使用硬件钱包、多方签名等多重手段，保障资产安全。帮您拓宽投资领域，让您放心参与并享受去中心化金融的先行者红利。',
				buttonText: '基金种类'
			},
			image: diversify
		},
		{
			english: {
				heading: 'Focus on DeFi',
				subText: 'Aperture Finance has focused on DeFi and actively participated in community projects since 2020. Ultra high returns only happen at the early adopter stage, we help you enjoy the first mover advantage.',
				buttonText: 'Performance'
			},
			chinese: {
				heading: '专注去中心化金融',
				subText: 'Aperture Finance专注算法稳定币，聚焦去中心化金融（DeFi）领域的低风险高回报投资组合。随着应用场景的增多和智能合约的逐步普及，算法稳定币、镜像股票和流动性池概念相继推出。团队自2017年起专注区块链生态，积极调整策略，把握先行者优势为投资者赢取更大回报。',
				buttonText: '了解详情'
			},
			image: defi,
			reverse: true
		},
		{
			english: {
				heading: 'Cutting-edge Technology',
				subText: 'All star team based in Silicon Valley with product and engineering expertise from Google, Amazon Web Services (AWS) and Netflix. Founding members are graduates from Stanford University, Columbia University, Cornell University and UC Berkeley.',
				buttonText: ''
			},
			chinese: {
				heading: '走在科技最前沿',
				subText: '全明星硅谷创业团队，创始人具备多年谷歌、亚马逊、Netflix的软件工程和产品开发经验。斯坦福大学、哥伦比亚大学和康奈尔大学的强大计算机技术背景。独有算法，配合智能合约提高交易效率和安全性，后期拓展方向包括高频交易等。',
				buttonText: ''
			},
			image: tech,
		}
	];

	return (
		<div className='container bg-white'>
		{
			contentText.map((con, i) => (
				<Content key={i} image={con.image} reverse={con.reverse} text={con[language]} />
			))
		}
		</div>
	);
}

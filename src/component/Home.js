import React from 'react';
import './Home.css';
import './Home.scss';
import Icon from '../module/Icon.js';

function Home() {
	const textList = {
		'main-title': [["๐ Hi, I'm ruka."]],
		'sub-title': [
			['์ ๋ ๊ฒ์, ์น ๊ฐ๋ฐ์ ์ฃผ๋ก ํ๊ณ  ์์ด์.'],
			[
				'๊ฒ์์ ์ฃผ๋ก ์๋ฎฌ๋ ์ด์ ๊ฒ์,',
				'์น์ ๋ฆฌ์กํธ๋ฅผ ์ด์ฉํ ์น์ฑ ๊ฐ๋ฐ์ ํ๊ณ  ์์ด์.'
			],
			['์ฐธ๊ณ ๋ก ์ด ๋ธ๋ก๊ทธ๋ ๋ฆฌ์กํธ์ Node.js ๋ก ์ ์ํ์ด์.']
		]
	};

	const cardShelfList = {
		'์น ๊ฐ๋ฐ': ['react', 'vuejs', 'bootstrap'],
		'๊ฒ์ ๊ฐ๋ฐ': ['unity', 'unreal'],
		'์ฃผ ์ธ์ด': ['cpp', 'javascript', 'typescript']
	};

	return (
		<div className="container">
			<div className="inner-container gradient-border appear-anim">
				{Object.keys(textList).map((key) => {
					return textList[key].map((text) => {
						return <Text key={key} textCls={key} textList={text} />;
					});
				})}
			</div>
			<div className="inner-container appear-anim">
				<div className="inner-container-header">
					์ฃผ๋ก ์ฌ์ฉํ๋ Framework & Library
				</div>
				<div className="card-container">
					{Object.keys(cardShelfList).map((key) => {
						return (
							<CardShelf
								key={key}
								title={key}
								iconNameList={cardShelfList[key]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function Text({ textCls, textList }) {
	return (
		<div className={textCls}>
			{textList.map((text) => {
				return (
					<div key={textList.findIndex((v) => v === text)} className="row-text">
						{text}
					</div>
				);
			})}
		</div>
	);
}

function CardShelf({ title, iconNameList }) {
	return (
		<div className="card">
			<div className="icon-title">
				<div className="row-text">{title}</div>
			</div>
			<div className="icon-container">
				{iconNameList.map((iconName) => {
					return <Icon key={iconName} iconName={iconName} />;
				})}
			</div>
		</div>
	);
}

export default Home;

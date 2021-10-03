import React from 'react';
import './Home.css';
import './Home.scss';
import Icon from '../module/Icon.js';

function Home() {
	const textList = {
		'main-title': [["👋 Hi, I'm ruka,", 'Game & Web Developer']],
		'sub-title': [['This website is built with,', '`React + Node.js`']]
	};

	const cardShelfList = {
		'WEB DEV': ['react', 'vuejs', 'bootstrap'],
		'GAME DEV': ['unity', 'unreal'],
		'MAIN LANGUAGES': ['cpp', 'javascript', 'typescript']
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

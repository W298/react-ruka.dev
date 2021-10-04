import React from 'react';
import './Home.css';
import './Home.scss';
import Icon from '../module/Icon.js';

function Home() {
	const textList = {
		'main-title': [["👋 Hi, I'm ruka."]],
		'sub-title': [
			['저는 게임, 웹 개발을 주로 하고 있어요.'],
			[
				'게임은 주로 시뮬레이션 게임,',
				'웹은 리액트를 이용한 웹앱 개발을 하고 있어요.'
			],
			['참고로 이 블로그는 리액트와 Node.js 로 제작했어요.']
		]
	};

	const cardShelfList = {
		'웹 개발': ['react', 'vuejs', 'bootstrap'],
		'게임 개발': ['unity', 'unreal'],
		'주 언어': ['cpp', 'javascript', 'typescript']
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
					주로 사용하는 Framework & Library
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

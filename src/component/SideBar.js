import './SideBar.css';

const sideBarMenuList = [
	{
		id: 1,
		iconCls: 'bi-house',
		text: 'HOME',
		viewHidden: {
			home: false,
			projects: true
		}
	},
	{
		id: 2,
		iconCls: 'bi-kanban',
		text: 'PROJECTS',
		viewHidden: {
			home: true,
			projects: false
		}
	},
	{
		id: 3,
		iconCls: 'bi-person-badge',
		text: 'ABOUT ME',
		viewHidden: {
			home: true,
			projects: true
		}
	}
];

function SideBarMenu({ iconCls, text, onClick }) {
	return (
		<div className="sidebar-menu" onClick={onClick}>
			<i className={'bi ' + iconCls}></i>
			<div className="sidebar-menu-text">{text}</div>
		</div>
	);
}

function SideBarFooterIcons({ iconCls, url }) {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<i className={'bi ' + iconCls}></i>
		</a>
	);
}

function SideBar({ setViewHidden }) {
	return (
		<div className="sidebar">
			<div>
				<div className="sidebar-title">ruka.dev</div>
				<hr />
				<div className="sidebar-menu-container">
					{sideBarMenuList.map((menu) => {
						return (
							<SideBarMenu
								key={menu.id}
								iconCls={menu.iconCls}
								text={menu.text}
								onClick={() => {
									setViewHidden(menu.viewHidden);
								}}
							/>
						);
					})}
				</div>
				<hr />
			</div>
			<div className="sidebar-footer">
				<div className="sidebar-footer-icons-container">
					<SideBarFooterIcons
						iconCls="bi-github"
						url="https://github.com/lutca1320"
					/>
					<SideBarFooterIcons iconCls="bi-youtube" />
					<SideBarFooterIcons iconCls="bi-discord" />
				</div>
				<div>
					dev by ruka. <br /> built with react.
				</div>
			</div>
		</div>
	);
}

export default SideBar;

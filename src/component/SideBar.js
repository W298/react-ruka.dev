import "./SideBar.css";

function SideBarMenu({ iconCls, text }) {
  return (
    <div className="sidebar-menu">
      <i className={"bi " + iconCls}></i>
      <div className="sidebar-menu-text">{text}</div>
    </div>
  );
}

function SideBarFooterIcons({ iconCls, url }) {
  return (
    <a href={url} target="_blank">
      <i className={"bi " + iconCls}></i>
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
          <SideBarMenu iconCls="bi-house" text="HOME" />
          <SideBarMenu iconCls="bi-kanban" text="PROJECTS" />
          <SideBarMenu iconCls="bi-person-badge" text="ABOUT ME" />
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

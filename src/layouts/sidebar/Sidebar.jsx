import { personsImgs } from "../../utils/images.js";
import { navigationLinks } from "../../data/data.js";
import { useState, useContext, useEffect } from "react";
import { Sidebarcontext } from "../../context/sidebarContext.jsx";
import "./sidebar.css";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(Sidebarcontext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_one} alt="profile image" />
        </div>
        <span className="info-name">Alice-doe</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((e) => (
            <li key={e.id} className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  e.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img src={e.image} className="nav-link-img" alt={e.title} />
                <span className="nav-link-text">{e.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import CloseButton from "react-bootstrap/CloseButton";
import PropTypes from "prop-types";
import "../../assets/scss/sidebar.scss";
import SideBarLink from "../../components/sidebarLink";
import logo from "../../assets/img/hatakonLogo.png";
import { Link } from "react-router-dom";
import { logout } from "../../services/entry";
import Logout from "../../assets/img/logout.png"

const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div className={`sidebar-container ${isClicked ? "sidebar-open" : ""}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton className="sidebar-close-btn" onClick={onClick} />
            <ul className="LOGO">
                <li>
                    <SideBarLink title="PHINMA PULSE" icon={logo} />
                </li>
            </ul>
            <ul className="iconS">
                <Link
                    to={"Logout"}
                    className={`sidebar-link`}
                    icon={Logout}
                    onClick={() => {
                        logout();
                        window.location.reload();
                    }}
                >
                    <div className="image-container">{/* <img className="sidebar-img" src={icon} alt={title} /> */}</div>
                    <span className={`${isClicked ? "show-block" : ""}`}>Logout</span>
                </Link>
            </ul>
        </div>
    );
};

SideBar.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    onUnhover: PropTypes.func.isRequired,
};

export default SideBar;

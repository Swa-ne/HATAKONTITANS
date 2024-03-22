import CloseButton from "react-bootstrap/CloseButton";
import PropTypes from "prop-types";
import "../../assets/scss/sidebar.scss";
import SideBarLink from "../../components/sidebarLink";
import Students from "../../assets/img/students.png";
import History from "../../assets/img/history.png";
import Current from "../../assets/img/current.png";
import logo from "../../assets/img/hatakonLogo.png";
import Logout from"../../assets/img/logout.png";


const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div
            className={`sidebar-container ${isClicked ? "sidebar-open" : ""}`}
            onMouseOver={onHover}
            onMouseOut={onUnhover}
        >
            {/* TODO: Crop niyo img dapat same ang width and height neto .. sige  */}
            <CloseButton className="sidebar-close-btn" onClick={onClick} />
            <ul className="LOGO">
                <li>
                    <SideBarLink
                        title="PHINMA PULSE"
                        icon={logo}
                    />
                </li>
            </ul>
            <ul className="iconS">
                <li>
                    <SideBarLink
                        direct="/"
                        title="Current Requests"
                        icon={Current}
                        isClicked={isClicked}
                    />
                </li>
                <li>
                    <SideBarLink
                        direct="/request-history"
                        title="Request History"
                        icon={History}
                        isClicked={isClicked}
                    />
                </li>
                <li>
                    <SideBarLink
                        direct="/student-list"
                        title="Student List"
                        icon={Students}
                        isClicked={isClicked}
                    />
                </li>
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
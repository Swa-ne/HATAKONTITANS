import CloseButton from "react-bootstrap/CloseButton";
import PropTypes from "prop-types";
import "../../assets/scss/sidebar.scss";

const SideBar = ({ isClicked, onClick, onHover, onUnhover, currentPage }) => {
    return <>SIdebar</>;
};

SideBar.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    onUnhover: PropTypes.func.isRequired,
    currentPage: PropTypes.string,
};

export default SideBar;

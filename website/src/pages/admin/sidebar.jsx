import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import CloseButton from 'react-bootstrap/CloseButton';

// Icons can be imported from a library like 'react-icons' or you can use images/svg files
import { MdAdd, MdCalendarToday, MdInbox } from 'react-icons/md';

const SideBar = ({ isClicked, onClick, onHover, onUnhover, currentPage }) => {
    // Define sidebar items here, for example, you can have a state for these or derive from props
    const calendarItems = [
        { name: 'Work', color: '#6E5BAA' },
        { name: 'Personal', color: '#F9BE7C' },
        { name: 'Events', color: '#31E981' },
    ];

    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton onClick={onClick} className="sidebar-close-btn" />
            
            <div className="sidebar-profile">
                <div className="profile-image"></div>
                <div className="profile-name">Yoan Almeida</div>
            </div>

            <button className="sidebar-action">
                <MdAdd /> New event
            </button>

            <div className="sidebar-menu">
                <button className={`menu-item ${currentPage === '/calendar' ? 'active' : ''}`}>
                    <MdCalendarToday /> Calendar
                </button>
                <button className={`menu-item ${currentPage === '/inbox' ? 'active' : ''}`}>
                    <MdInbox /> Inbox
                </button>
            </div>

            <div className="sidebar-calendars">
                <h2>My calendars</h2>
                {calendarItems.map((item) => (
                    <div key={item.name} className="calendar-item">
                        <span className="calendar-dot" style={{ backgroundColor: item.color }}></span>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

SideBar.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    onUnhover: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired, // The currentPage prop should be marked as required
};

export default SideBar;

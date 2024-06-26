import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../services/entry';

const SideBarLink = ({ direct, icon, title, isClicked }) => {
    const navigate = useNavigate();
    return (
        <Link
            to={direct}
            onClick={() => {
                if (direct === '/login') {
                    navigate('/');
                    logout();
                    window.location.reload();
                }
            }}
        >
            <div className='image-container'>
                <img className='sidebar-img' src={icon}></img>
            </div>
            <span className={`${isClicked ? 'show-block' : ''}`}>{title}</span>
        </Link>
    );
};

SideBarLink.propTypes = {
    direct: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isClicked: PropTypes.bool,
};

export default SideBarLink;
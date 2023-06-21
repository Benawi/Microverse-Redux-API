import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import NavStyles from '../styles/NavBar.module.css';

const NavBar = () => (
  <div className={NavStyles.barContainer}>
    <div className={NavStyles.navBarContainer}>
      <nav className={NavStyles.navLinksContainer}>
        <h1>
          <NavLink className="fontStyle6 fontColor3 mr2" to="/">User List</NavLink>
        </h1>
      </nav>
      <div>
        <FaRegUserCircle style={{ color: '#0290ff', fontSize: '2.5em' }} />
      </div>
    </div>
  </div>
);

export default NavBar;

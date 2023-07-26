import { NavLink } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <nav className="navbarr">
      <div className="navbarlink">
        <div className="navbarnav">
          <NavLink className="navlink " aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Header;

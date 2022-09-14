import './nav.css';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todo App</NavLink>
            <NavLink to="/blog">Blog App</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/search">Videos</NavLink>
        </div>
    );
}

export default Nav;
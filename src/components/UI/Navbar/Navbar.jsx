import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <Button onClick={logout}>Выйти</Button>
            <div className="navbar_links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
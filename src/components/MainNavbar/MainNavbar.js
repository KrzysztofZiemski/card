import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import burgerIcon from '../../assets/burger.svg';
import Button from '../Button/Button';

const MainNavbar = () => {

    return (
        <nav>
            <ul className="mainNavbar">
                <li className='mainNavbar-listElement mainNavbar-listElement-burger'><Button><img src={burgerIcon} alt="" /></Button></li>
                {/* <li className='mainNavbar-listElement'><Link to='/'>Home</Link></li> */}
                {/* <li className='mainNavbar-listElement'><Link to='/about'>O mnie</Link></li> */}
                <li className='mainNavbar-listElement'><Link to='/stack'>Technologie</Link></li>
                <li className='mainNavbar-listElement'><Link to='/projects'>Projekty</Link></li>

            </ul>
        </nav>
    )
};

export default MainNavbar;
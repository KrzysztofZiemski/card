import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import burgerIcon from '../../assets/burger-icon.svg';
import Button from '../Button/Button';

const MainNavbar = ({ scrollToRef, pagesRef }) => {
    const { homePageRef, aboutPageRef, stackPageRef, projectPageRef } = pagesRef;

    let [hideMenu, setHideMenu] = useState(true);

    return (
        <nav>
            <ul className="mainNavbar">
                <li className='mainNavbar-listElement mainNavbar-listElement-burger'>
                    <Button onClick={() => setHideMenu(!hideMenu)}><img src={burgerIcon} alt="menu-icon" /></Button>
                </li>
                <li className='mainNavbar-listElement hide'><button onClick={() => scrollToRef(homePageRef)}>Home</button></li>
                <li className='mainNavbar-listElement hide'><button onClick={() => scrollToRef(aboutPageRef)}>O mnie</button></li>
                <li className='mainNavbar-listElement'><button onClick={() => scrollToRef(stackPageRef)}>Technologie</button></li>
                <li className='mainNavbar-listElement'><button onClick={() => scrollToRef(projectPageRef)}>Projekty</button></li>
            </ul>
            <ul className={hideMenu ? 'slideNavbar hide' : 'slideNavbar'}>
                <li className='slideNavbar-listElement'><Link to='/'>Home</Link></li>
                <li className='slideNavbar-listElement'><Link to='/about'>O mnie</Link></li>
                <li className='slideNavbar-listElement'><Link to='/stack'>Technologie</Link></li>
                <li className='slideNavbar-listElement'><Link to='/projects'>Projekty</Link></li>
            </ul>
        </nav >
    )
};

export default MainNavbar;
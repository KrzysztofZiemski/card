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
                <li className='mainNavbar-listElement hide'><Link to='/' onClick={() => scrollToRef(homePageRef)}>Home</Link></li>
                <li className='mainNavbar-listElement hide'><Link to='/about' onClick={() => scrollToRef(aboutPageRef)}>O mnie</Link></li>
                <li className='mainNavbar-listElement'><Link to='/stack' onClick={() => scrollToRef(stackPageRef)}>Technologie</Link></li>
                <li className='mainNavbar-listElement'><Link to='/projects' onClick={() => scrollToRef(projectPageRef)}>Projekty</Link></li>
            </ul>
            <ul className={hideMenu ? 'slideNavbar hide' : 'slideNavbar'}>
                <li className='slideNavbar-listElement'><Link to='/' onClick={() => { scrollToRef(homePageRef); setHideMenu(!hideMenu) }}>Home</Link></li>
                <li className='slideNavbar-listElement'><Link to='/about' onClick={() => { scrollToRef(aboutPageRef); setHideMenu(!hideMenu) }}>O mnie</Link></li>
                <li className='slideNavbar-listElement'><Link to='/stack' onClick={() => { scrollToRef(stackPageRef); setHideMenu(!hideMenu) }}>Technologie</Link></li>
                <li className='slideNavbar-listElement'><Link to='/projects' onClick={() => { scrollToRef(projectPageRef); setHideMenu(!hideMenu) }}>Projekty</Link></li>
            </ul>
        </nav >
    )
};

export default MainNavbar;
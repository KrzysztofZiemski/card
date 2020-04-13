import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import burgerIcon from '../../assets/burger-icon.svg';
import BurgerButton from '../BurgerButton/BurgerButton';

const MainNavbar = ({ scrollToRef, pagesRef }) => {
    const { homePageRef, aboutPageRef, projectPageRef, experiencePageRef, coursesPage } = pagesRef;

    let [hideMenu, setHideMenu] = useState(true);

    return (
        <nav>
            <ul className="mainNavbar">
                <li className='mainNavbar-listElement mainNavbar-listElement-burger'>
                    <BurgerButton onClick={() => setHideMenu(!hideMenu)}><img src={burgerIcon} alt="menu-icon" /></BurgerButton>
                </li>
                <li className='mainNavbar-listElement hide'><Link to='/' onClick={() => scrollToRef(homePageRef)}>Home</Link></li>
                <li className='mainNavbar-listElement hide'><Link to='/about' onClick={() => scrollToRef(aboutPageRef)}>O mnie</Link></li>
                <li className='mainNavbar-listElement hide'><Link to='/courses' onClick={() => scrollToRef(coursesPage)}>Kursy</Link></li>
                <li className='mainNavbar-listElement hide'><Link to='/jobs' onClick={() => scrollToRef(experiencePageRef)}>Historia zatrudnienia</Link></li>
                <li className='mainNavbar-listElement'><Link to='/projects' onClick={() => scrollToRef(projectPageRef)}>Projekty</Link></li>
            </ul>
            <ul className={hideMenu ? 'slideNavbar hide' : 'slideNavbar'}>
                <li className='slideNavbar-listElement'><Link to='/' onClick={() => { scrollToRef(homePageRef); setHideMenu(!hideMenu) }}>Home</Link></li>
                <li className='slideNavbar-listElement'><Link to='/about' onClick={() => { scrollToRef(aboutPageRef); setHideMenu(!hideMenu) }}>O mnie</Link></li>
                <li className='slideNavbar-listElement'><Link to='/projects' onClick={() => { scrollToRef(projectPageRef); setHideMenu(!hideMenu) }}>Projekty</Link></li>
            </ul>
        </nav >
    )
};

export default MainNavbar;
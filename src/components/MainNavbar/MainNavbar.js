import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import burgerIcon from '../../assets/burger-icon.svg';
import BurgerButton from '../BurgerButton/BurgerButton';
import { mainNavbar } from '../../content.json';
import { langAvaible } from '../../content.json';
const MainNavbar = ({ scrollToRef, pagesRef, lang, setLang }) => {
    const content = mainNavbar[lang];
    const { homePageRef, aboutPageRef, projectPageRef, experiencePageRef, coursesPage } = pagesRef;

    let [hideMenu, setHideMenu] = useState(true);

    const changLanguage = (e) => {
        setLang(e.target.value)
    }
    return (
        <nav className='mainNavContainer'>
            <ul className="mainNavbar">
                <li className='mainNavbar__listElement mainNavbar__listElement--burger'>
                    <BurgerButton onClick={() => setHideMenu(!hideMenu)}><img src={burgerIcon} alt="menu-icon" /></BurgerButton>
                </li>
                <li className='mainNavbar__listElement hide'><Link to='/' onClick={() => scrollToRef(homePageRef)}>{content.homeLink}</Link></li>
                <li className='mainNavbar__listElement hide'><Link to='/about' onClick={() => scrollToRef(aboutPageRef)}>{content.aboutLink}</Link></li>
                <li className='mainNavbar__listElement hide'><Link to='/courses' onClick={() => scrollToRef(coursesPage)}>{content.coursesLink}</Link></li>
                <li className='mainNavbar__listElement hide'><Link to='/jobs' onClick={() => scrollToRef(experiencePageRef)}>{content.jobsLink}</Link></li>
                <li className='mainNavbar__listElement'><Link to='/projects' onClick={() => scrollToRef(projectPageRef)}>{content.projectsLink}</Link></li>
            </ul>
            <ul className={hideMenu ? 'slideNavbar hide' : 'slideNavbar'}>
                <li className='slideNavbar__listElement'><Link to='/' onClick={() => { scrollToRef(homePageRef); setHideMenu(!hideMenu) }}>{content.homeLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/about' onClick={() => { scrollToRef(aboutPageRef); setHideMenu(!hideMenu) }}>{content.aboutLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/projects' onClick={() => { scrollToRef(projectPageRef); setHideMenu(!hideMenu) }}>{content.projectsLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/courses' onClick={() => { scrollToRef(coursesPage); setHideMenu(!hideMenu) }}>{content.coursesLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/jobs' onClick={() => { scrollToRef(experiencePageRef); setHideMenu(!hideMenu) }}>{content.jobsLink}</Link></li>
            </ul>
            <div className="lang">
                {/* <span className='arrowSelect'> <img src={selectArrowIcon} alt="arrow" /></span> */}
                <select onChange={changLanguage} value={lang}>
                    <option value={langAvaible.pl}>{langAvaible.pl}</option>
                    <option value={langAvaible.en}>{langAvaible.en}</option>
                </select>
            </div>
        </nav >
    )
};

export default MainNavbar;
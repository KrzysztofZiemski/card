import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import burgerIcon from '../../assets/burger-icon.svg';
import BurgerButton from '../BurgerButton/BurgerButton';
import { mainNavbar } from '../../content.json';

const MainNavbar = ({ pagesRef, lang }) => {
    const content = mainNavbar[lang];
    const { homePageRef, aboutPageRef, projectPageRef, experiencePageRef, coursesPage } = pagesRef;

    let [menuActive, setMenuActive] = useState(false);
    let [pageY, setPageY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleBgcNavBar);
        return (window.addEventListener('scroll', handleBgcNavBar))
    })
    const handleBgcNavBar = () => {
        setPageY(window.pageYOffset);
    }

    const scrollToRef = (ref) => {
        window.scrollTo(0, ref.current.offsetTop)

        //TODO    slow scrolling too slow for mobile
        //let distance = ref.current.offsetTop - window.pageYOffset;
        // if (distance >= 0) {
        //     for (let i = window.pageYOffset; i <= ref.current.offsetTop; i++) {
        //         setTimeout(() => {
        //             window.scrollTo(0, i)
        //         }, (i + 5) * .2);
        //     }
        // } else {
        //     for (let i = window.pageYOffset; i >= ref.current.offsetTop; i--) {
        //         console.log(i)
        //         setTimeout(() => {
        //             window.scrollTo(0, i)
        //         }, i * -1);
        //     }
        // }
    };

    const getClassesMenu = () => {
        let classes = 'mainNavContainer';
        if (menuActive) classes = classes + ' show';
        if (pageY >= 500) classes = classes + ' bgc';
        return classes;

    }
    const showMenu = () => {
        setMenuActive(true);
    }
    const hideMenu = () => {
        setMenuActive(false);
    }
    return (
        <nav className={getClassesMenu()}>
            <BurgerButton className={pageY < 500 ? 'burgerBtn' : 'burgerBtn bgc'} onClick={menuActive ? hideMenu : showMenu}><img src={burgerIcon} alt="menu-icon" /></BurgerButton>
            <ul className={menuActive ? 'slideNavbar' : 'slideNavbar hide'}>
                <li className='slideNavbar__listElement'><Link to='/' onClick={() => { scrollToRef(homePageRef); hideMenu() }}>{content.homeLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/about' onClick={() => { scrollToRef(aboutPageRef); hideMenu() }}>{content.aboutLink}</Link></li>
                <li className={pageY < 500 ? 'slideNavbar__listElement slideNavbar__listElement--alwaysShow' : 'slideNavbar__listElement slideNavbar__listElement--alwaysShow bgc'}><Link to='/projects' onClick={() => { scrollToRef(projectPageRef); hideMenu() }}>{content.projectsLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/courses' onClick={() => { scrollToRef(coursesPage); hideMenu() }}>{content.coursesLink}</Link></li>
                <li className='slideNavbar__listElement'><Link to='/jobs' onClick={() => { scrollToRef(experiencePageRef); hideMenu() }}>{content.jobsLink}</Link></li>
            </ul>
        </nav >
    )
};

export default MainNavbar;
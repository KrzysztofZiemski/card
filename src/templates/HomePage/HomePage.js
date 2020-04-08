import React from 'react';
import { Link } from 'react-router-dom';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import profile from '../../assets/profile.JPG';
import CV from '../../assets/CV.pdf';
import './HomePage.scss';

const HomePage = (props, ref) => {

    return (
        <div className='homePage'>
            <div className='homePage-main'>
                <nav className='asideNav'>
                    <ul className='asideNav-list'>
                        <li className='asideNav-list-element'> <a href="https://www.linkedin.com/in/krzysztof-ziemski"><img src={linkedinIcon} alt='Linkedin icon' /></a></li>
                        <li className='asideNav-list-element'> <a href="http://github.com/KrzysztofZiemski"><img src={githubIcon} alt='Github icon' /></a></li>
                        <li className='asideNav-list-element asideNav-list-element-text'><Link to={CV} target="_blank" download>Pobierz CV</Link></li>
                    </ul>
                </nav>
                <main className='homePage-main'>
                    <div className='headers'>
                        <h1 className='headers-header-h1'>Krzysztof Ziemski</h1>
                        <h2 className='headers-header-h2'>Junior Front-end Developer</h2>
                    </div>
                    <a href="http://github.com/KrzysztofZiemski" className='homePage-main-icon'><img src={githubIcon} alt='Github icon' /></a>
                    <div className='homePage-main__photoContainer'><img src={profile} alt="photos Krzysztof Ziemski" className='homePage-main-profileImage' /></div>
                </main>
            </div>
            <div className='homePage-aside'><div></div><div></div></div>
        </div>
    )
}

export default HomePage;
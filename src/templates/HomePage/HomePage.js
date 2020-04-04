import React from 'react';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import profile from '../../assets/profile.JPG';
import './HomePage.scss';

const HomePage = (props, ref) => {

    return (
        <div className='homePage'>
            <nav className='asideNav'>
                <ul className='asideNav-list'>
                    <li className='asideNav-list-element'> <a href="https://www.linkedin.com/in/krzysztof-ziemski"><img src={linkedinIcon} alt='Linkedin icon' /></a></li>
                    <li className='asideNav-list-element'> <a href="http://github.com/KrzysztofZiemski"><img src={githubIcon} alt='Github icon' /></a></li>
                    <li className='asideNav-list-element asideNav-list-element-text'> <a href="https://www.linkedin.com/in/krzysztof-ziemski">View Profile</a></li>
                </ul>
            </nav>
            <main className='homePage-main'>
                <div className='headers'>
                    <h1 className='headers-header-h1'>Krzysztof Ziemski</h1>
                    <h2 className='headers-header-h2'>Junior Front-end Developer</h2>
                </div>
                <a href="http://github.com/KrzysztofZiemski" className='homePage-main-icon'><img src={githubIcon} alt='Github icon' /></a>
                <img src={profile} alt="photos Krzysztof Ziemski" className='homePage-main-profileImage' />
            </main>
        </div>
    )
}

export default HomePage;
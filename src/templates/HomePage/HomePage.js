import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import profile from '../../assets/profile.JPG';
import Button from '../../components/Button/Button';
import MachineWriting from '../../components/MachineWriting/MachineWriting';
import CV from '../../assets/CV.pdf';
import { homePage } from '../../content.json';
import './HomePage.scss';

const HomePage = ({ lang }) => {
    const content = homePage[lang];
    const downloadCV = () => {
        window.open(CV);
    }
    return (
        <ScrollAnimation animateIn='fadeIn'>
            <div className='homePage'>
                <div className='homePage-main'>
                    <nav className='asideNav'>
                        <ul className='asideNav-list'>
                            <li className='asideNav-list-element'> <a href="https://www.linkedin.com/in/krzysztof-ziemski"><img src={linkedinIcon} alt='Linkedin icon' /></a></li>
                            <li className='asideNav-list-element'> <a href="http://github.com/KrzysztofZiemski"><img src={githubIcon} alt='Github icon' /></a></li>
                            <li className='asideNav-list-element asideNav-list-element-text'><Button onClick={downloadCV}>{content.downloadButton}</Button></li>
                        </ul>
                    </nav>
                    <main className='homePage-main'>
                        <div className='headers'>
                            <ScrollAnimation animateIn='slideInLeft'><h1 className='headers-header-h1'> {content.name}</h1></ScrollAnimation>
                            <h2 className='headers-header-h2'><MachineWriting content={content.wonnaBe} /></h2>
                        </div>
                        <a href="http://github.com/KrzysztofZiemski" className='homePage-main-icon'><img src={githubIcon} alt='Github icon' /></a>
                        <div className='homePage-main__photoContainer'><img src={profile} alt="photos Krzysztof Ziemski" className='homePage-main-profileImage' /></div>
                    </main>
                </div>
                <div className='homePage-aside'></div>
            </div>
        </ScrollAnimation>
    )
}

export default HomePage;
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import StackElement from '../../components/StackElement/StackElement';
import { aboutPage } from '../../content.json';

import './AboutPage.scss';

const AboutPage = ({ lang }) => {
            const content = aboutPage[lang];

            const descriptionParagraph = content.descriptionParagraph.map(paragraph => (
                        <ScrollAnimation animateOnce={true} key={paragraph} animateIn='slideInLeft'><p className='description__paragraph'>{paragraph}</p></ScrollAnimation>
            ));
            const skills = content.skills.map((skill, index) => (
                        <div className='skillsContainer' key={skill + index}>
                                    <ScrollAnimation animateOnce={true} animateIn='slideInRight'>
                                                <StackElement className='skillsContainer__element'>
                                                            {skill}
                                                </StackElement>
                                    </ScrollAnimation></div>)
            )
            return (
                        <div className="aboutPage">
                                    <h1 className='aboutPage__header'>{content.title}</h1>
                                    <div className='aboutPage__content'>
                                                <article className='description'>
                                                            {descriptionParagraph}
                                                </article>
                                                <article className='skillsSection'>
                                                            {skills}
                                                </article>
                                    </div>
                        </div >
            )
}

export default AboutPage;
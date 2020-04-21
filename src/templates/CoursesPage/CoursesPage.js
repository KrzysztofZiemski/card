import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './CoursesPage.scss';
import arrow from '../../assets/arrowCours.png';
import { coursesPage } from '../../content.json';

const Courses = ({ lang }) => {
            const content = coursesPage[lang];

            const coursesList = (list) => {
                        return list.map((element, index) => {
                                    return (
                                                <li className='course' key={element + index}>
                                                            <span className='course__imgConteiner'><img src={arrow} alt="arrow" /></span>
                                                            <span className='course__content'>{element}</span>
                                                </li >
                                    )
                        })
            }
            return (
                        <div className='coursesPage'>
                                    <h1 className='coursesPage__header'>{content.title}</h1>
                                    <ul className='coursesContainer'>

                                                <li className='listByType'>
                                                            <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                                                                        <h2 className='listByType__header'>{content.stationaryNameList}</h2>
                                                            </ScrollAnimation>
                                                            <ScrollAnimation animateOnce={true} animateIn='slideInLeft'>
                                                                        <ul className='listByType__list'>
                                                                                    {coursesList(content.stationaryCourses)}
                                                                        </ul>
                                                            </ScrollAnimation>

                                                </li>

                                                <li className='listByType'>
                                                            <ScrollAnimation animateOnce={true} animateIn='slideInRight'>
                                                                        <h2 className='listByType__header'>{content.webNameList}</h2>
                                                            </ScrollAnimation>
                                                            <ScrollAnimation animateOnce={true} animateIn='slideInRight'>
                                                                        <ul className='listByType__list'>
                                                                                    {coursesList(content.webCourses)}
                                                                        </ul>
                                                            </ScrollAnimation>
                                                </li>

                                    </ul>
                        </div >
            )
}

export default Courses;
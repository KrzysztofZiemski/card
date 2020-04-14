import React from 'react';
import './CoursesPage.scss';
import arrow from '../../assets/arrowCours.png';
import { coursesPage } from '../../content.json';

const Courses = ({ lang }) => {
            const content = coursesPage[lang];

            const coursesList = (list) => {
                        return list.map((element, index) => {
                                    return (<li className='course' key={element + index}>
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
                                                            <h2 className='listByType__header'>{content.stationaryNameList}</h2>
                                                            <ul className='listByType__list'>
                                                                        {coursesList(content.stationaryCourses)}
                                                            </ul>

                                                </li>
                                                <li className='listByType'>
                                                            <h2 className='listByType__header'>{content.webNameList}</h2>
                                                            <ul className='listByType__list'>
                                                                        {coursesList(content.webCourses)}
                                                            </ul>

                                                </li>
                                    </ul>
                        </div>
            )
}

export default Courses;
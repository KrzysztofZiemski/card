import React from 'react';
import './CoursesPage.scss';
import arrow from '../../assets/arrowCours.png';

const Courses = () => {
            const stationaryCourses = [' Bootcamp organizowany przez c_school Full stack - React developer 10/2019 - 03/2020'];
            const webCourses = ['Udemy kurs "Web Deweloper od podstaw"', 'Udemy kurs "Front-end zaawansowany"', 'Udemy kurs "Programowanie w javascript"', 'Udemy kurs "React od podstaw"', 'Udemy kurs "Node.js Express i MongoDB"'];

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
                                    <h1 className='coursesPage__header'>Kursy</h1>
                                    <ul className='coursesContainer'>
                                                <li className='listByType'>
                                                            <h2 className='listByType__header'>Kurs stacjonarny</h2>
                                                            <ul className='listByType__list'>
                                                                        {coursesList(stationaryCourses)}
                                                            </ul>

                                                </li>
                                                <li className='listByType'>
                                                            <h2 className='listByType__header'>Kursy udemy</h2>
                                                            <ul className='listByType__list'>
                                                                        {coursesList(webCourses)}
                                                            </ul>

                                                </li>
                                    </ul>
                        </div>
            )
}

export default Courses;
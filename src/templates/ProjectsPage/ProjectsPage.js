import React from 'react';
import Project from '../../components/Project/Project';
import './ProjectsPage.scss';
import shopProjectIMG from '../../assets/shopView.png';
import bookProjectIMG from '../../assets/bookView.png';
import cardProjectIMG from '../../assets/cardView.png';

const ProjectsPage = () => {

            return (
                        <div className="projectsPage">
                                    <h1 className='projectsPage__header'>Projekty</h1>
                                    <Project img={shopProjectIMG} name='Sklep' stack={['dddd', 'html', 'css', 'javascript', 'node + express', 'rwd']}></Project>
                                    <Project img={bookProjectIMG} name='BookMates'></Project>
                                    <Project img={cardProjectIMG} name='Wizytówska'></Project>
                        </div>
            )
}

export default ProjectsPage;
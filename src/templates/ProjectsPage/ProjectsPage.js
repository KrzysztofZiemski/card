import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Project from '../../components/Project/Project';
import './ProjectsPage.scss';
import { projectsPage } from '../../content.json';
import shopProjectIMG from '../../assets/shopView.png';
import bookProjectIMG from '../../assets/bookView.png';
import cardProjectIMG from '../../assets/cardView.png';
import zliczkaProjectIMG from '../../assets/zliczkaView.png';
import blankProjectIMG from '../../assets/blankMonitor.png';
// , linkGitHub
const ProjectsPage = ({ lang }) => {
    const content = projectsPage[lang];

    return (
        <div className="projectsPage">
            <h1 className='projectsPage__header'>{content.title}</h1>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={zliczkaProjectIMG}
                    name={content.projects.zliczka.name}
                    stack={[content.stacks.html, content.stacks.material, content.stacks.js, content.stacks.react]}
                    description={content.projects.zliczka.description}
                    linkLive={content.projects.zliczka.linkLive}
                    linkGitHub={content.projects.zliczka.linkGitHub}
                ></Project>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={blankProjectIMG}
                    name={content.projects.hextl.name}
                    stack={[content.stacks.html, content.stacks.material, content.stacks.js, content.stacks.ts, content.stacks.webpack]}
                    description={content.projects.hextl.description}
                    linkLive={content.projects.hextl.linkLive}
                    linkGitHub={content.projects.hextl.linkGitHub}
                ></Project>
            </ScrollAnimation>

            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={cardProjectIMG}
                    name={content.projects.card.name}
                    stack={[content.stacks.html, content.stacks.css, content.stacks.sass, content.stacks.js, content.stacks.rwd, content.stacks.react]}
                    description={content.projects.card.description}
                    linkLive={content.projects.card.linkLive}
                    linkGitHub={content.projects.card.linkGitHub}
                ></Project>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={shopProjectIMG}
                    name={content.projects.shopFront.name}
                    stack={[content.stacks.html, content.stacks.sass, content.stacks.css, content.stacks.js, content.stacks.rwd, content.stacks.fetch, content.stacks.jwtToken]}
                    description={content.projects.shopFront.description}
                    linkLive={content.projects.shopFront.linkLive}
                    linkGitHub={content.projects.shopFront.linkGitHub}
                ></Project>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={shopProjectIMG}
                    name={content.projects.shopBack.name}
                    stack={[content.stacks.nodeExpress, content.stacks.pouchDB, content.stacks.jwtToken]}
                    description={content.projects.shopBack.description}
                    linkLive={content.projects.shopBack.linkLive}
                    linkGitHub={content.projects.shopBack.linkGitHub}
                ></Project>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
                <Project
                    img={bookProjectIMG}
                    name={content.projects.bookMates.name}
                    stack={[content.stacks.html, content.stacks.css, content.stacks.sass, content.stacks.sass, content.stacks.js, content.stacks.rwd, content.stacks.fetch, content.stacks.nodeExpress, content.stacks.react, content.stacks.postgresql]}
                    description={content.projects.bookMates.description}
                    linkLive={content.projects.bookMates.linkLive}
                    linkGitHub={content.projects.bookMates.linkGitHub}
                ></Project>
            </ScrollAnimation>

        </div >
    )
}

export default ProjectsPage;
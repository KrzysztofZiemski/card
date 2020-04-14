import React from 'react';

import './Project.scss';

const Project = ({ img, name, stack, description, linkLive, linkGitHub }) => {

            let sctacksRender = [];

            if (Array.isArray(stack)) {
                        stack.forEach((el, index) => {
                                    const separation = <span key={'separation' + index}>|</span>;
                                    if (index !== 0) sctacksRender.push(separation);
                                    sctacksRender.push(<span key={'sctacksRender' + index}>{el}</span>);
                        });
            };

            return (
                        <article className='projectPortfolio'>
                                    <div className='viewProjectContainer'>
                                                <img className='viewProjectContainer__image' src={img} alt="projekt" />
                                                <span className='viewProjectContainer__links'>
                                                            <span className='projectLinks__link'><a href={linkGitHub} target="_blank" rel="noopener noreferrer">github</a></span>
                                                            <span className='projectLinks__link'><a href={linkLive} target="_blank" rel="noopener noreferrer">Live</a></span>
                                                </span>
                                    </div>
                                    <div className='descriptionProjectContainer'>
                                                <h2 className='descriptionProjectContainer__header'>{name}</h2>
                                                <p className='descriptionProjectContainer__stack'>{sctacksRender}</p>
                                                <p className="descriptionProjectContainer__description">
                                                            {description}
                                                </p>
                                    </div>
                        </article>
            )
}

export default Project
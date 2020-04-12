import React from 'react';
import { Link } from 'react-router-dom';

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
                                                            <span className='projectLinks__link'><Link to=''>github</Link></span>
                                                            <span className='projectLinks__link'><Link to=''>Live</Link></span>
                                                </span>
                                    </div>
                                    <div className='descriptionProjectContainer'>
                                                <h2 className='descriptionProjectContainer__header'>{name}</h2>
                                                <p className='descriptionProjectContainer__stack'>{sctacksRender}</p>
                                                <p className="descriptionProjectContainer__description">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui consequatur ratione facere, eligendi nobis eos! Nihil, ad quasi, tenetur fuga eaque fugit, temporibus reprehenderit molestiae atque pariatur dolor incidunt unde! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dicta obcaecati, quibusdam voluptates aperiam deserunt vel in voluptas quidem odio veniam libero autem, placeat laborum vitae! Magni quae in quaerat.
                                                </p>
                                    </div>
                        </article>
            )
}

export default Project
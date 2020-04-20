import React, { useState } from 'react';
import './ShowMore.scss';
import { experiencePage } from '../../content.json';
const ShowMore = ({ limit, children, className = 'text', lang }) => {
            let [showAll, setShowAll] = useState(false)
            const content = experiencePage[lang];
            if (children.length <= limit) return (<div className={className}>{children}</div>);

            const wordArr = children.split(' ');
            let count = 0;
            const arrayToShow = [];
            const arrayToHide = [];

            wordArr.forEach(word => {
                        if (count + word.length <= limit) {
                                    arrayToShow.push(word);
                                    count += word.length;
                        } else {
                                    arrayToHide.push(word);
                        }
            });
            return (
                        <p className={`${className} show-more-less`} onClick={showAll ? () => setShowAll(false) : null}>
                                    <span className='show-more-less__span'>{arrayToShow.join(' ')}
                                                {!showAll ? <button className='show-more-less__btn' onClick={() => setShowAll(true)}>... {content.showMore}</button> : null}
                                    </span>
                                    <span className={showAll ? 'show-more-less__span' : 'show-more-less__span show-more-less__span--hide'}>{arrayToHide.join(' ')}
                                                <button className='show-more-less__btn' onClick={() => setShowAll(false)}>{content.showLess}</button>
                                    </span>
                        </p>
            )
}

export default ShowMore;
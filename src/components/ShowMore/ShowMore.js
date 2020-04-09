import React, { useState } from 'react';
import './ShowMore.scss';

const ShowMore = ({ limit, readMoreText = 'read more', readLessText = 'read less', children, className = 'text' }) => {
            let [showAll, setShowAll] = useState(false)

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
                                                {!showAll ? <button className='show-more-less__btn' onClick={() => setShowAll(true)}>... {readMoreText}</button> : null}
                                    </span>
                                    <span className={showAll ? 'show-more-less__span' : 'show-more-less__span show-more-less__span--hide'}>{arrayToHide.join(' ')}
                                                <button className='show-more-less__btn' onClick={() => setShowAll(false)}>{readLessText}</button>
                                    </span>
                        </p>
            )
}

export default ShowMore;
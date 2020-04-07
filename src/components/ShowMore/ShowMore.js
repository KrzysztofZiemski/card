import React, { useState } from 'react';
import './ShowMore.scss';

const ShowMore = ({ limit, readMoreText = 'read more', readLessText = 'read less', children }) => {
            let [limitText, setLimitText] = useState(limit);
            let sumWord = 0;
            const getLongChildren = () => {
                        let count = 0;
                        children.forEach(child => {
                                    count += child.props.children.length;
                        })
                        return count;
            }

            const newChildren = [];
            for (let i = 0; i < children.length; i++) {
                        if (sumWord + children[i].props.children.length < limitText) {
                                    sumWord += children[i].props.children.length;
                                    newChildren.push(children[i])
                        } else if (sumWord + children[i].props.children.length > limitText) {
                                    const copy = Object.assign({}, children[i]);
                                    const wordToShow = limitText - sumWord;
                                    copy.children = copy.props.children.substr(0, wordToShow);
                                    newChildren.push(copy)
                                    break;
                        }
            }
            if (limitText < getLongChildren()) {
                        return (
                                    <span>
                                                <span>{newChildren} ...</span>
                                                <span><button onClick={() => setLimitText(getLongChildren())}>{readMoreText}</button></span>
                                    </span>
                        )
            } else if (limitText > getLongChildren()) {
                        return (
                                    <span>
                                                <span>{children} ...</span>
                                    </span>
                        )
            }
            return (
                        <span>
                                    <span>{children} </span>
                                    <span><button onClick={() => setLimitText(limit)}>{readLessText}</button></span>
                        </span>
            )
            // children.forEach(child => {
            //             if (sumWord + child.props.children.length < limitText) {
            //                         sumWord += child.props.children.length;
            //                         newChildren.push(child)
            //             } else if (sumWord + child.props.children.length > limitText) {
            //                         const copy = Object.assign({}, child);
            //                         const wordToShow = limitText - sumWord;
            //                         copy.children = copy.props.children.substr(0, wordToShow);
            //                         newChildren.push(copy)
            //             }
            // })
            console.log('newChildren', newChildren)

            //for text children
            // if (limitText > children.length) {
            //             return (<span className='short-text'>
            //                         {children}
            //             </span>)
            // }
            //else if (limitText < children.length) {
            //             return (
            //                         <span className='short-text'>
            //                                     {children.substr(0, limitText)}...
            //                                     <span><button onClick={() => setLimitText(children.length)}>czytaj więcej</button></span>
            //                         </span>
            //             )
            // }
            // return (
            //             <span className='short-text'>
            //                         {children}
            //                         <span><button onClick={() => setLimitText(limit)}>mniej</button></span>
            //             </span>
            // )

}

export default ShowMore;
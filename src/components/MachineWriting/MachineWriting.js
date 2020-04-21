import React, { useState, useEffect } from 'react';
import './MachineWriting.scss';

const MachineWriting = ({ content }) => {
            let [sentence, setSentence] = useState(' ');
            let [end, setEnd] = useState(false);

            useEffect(() => {
                        start()
            }, [])
            const start = () => {
                        setTimeout(() => {
                                    write(content[0], 0, content[1])
                        }, 1500)
            }

            const write = (word, index = 0, nextWord) => {
                        setSentence(word.slice(0, index))
                        if (word.length > index) {
                                    return setTimeout(() => {
                                                write(word, ++index, nextWord);
                                    }, 200)

                        } else if (word.length === index && nextWord) {
                                    return setTimeout(() => {
                                                back(word, index, nextWord);
                                    }, 3000)
                        }
                        setEnd(true);
            }

            const back = (word, index, nextWord) => {
                        setSentence(word.slice(0, index))
                        if (index > 0) {
                                    return setTimeout(() => {
                                                back(word, --index, nextWord);
                                    }, 200)
                        } else if (index === 0) {
                                    return setTimeout(() => {
                                                write(nextWord)
                                    }, 200)
                        }
                        setEnd(true);
            }

            return (
                        <span className={end ? 'machineWritting hide' : 'machineWritting'}>{sentence}</span>
            )

}

export default MachineWriting;
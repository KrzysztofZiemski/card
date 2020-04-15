import React from 'react';
import './SelectLang.scss';
import { langAvaible } from '../../content.json';

const SelectLang = ({ setLang, lang }) => {

            const changeLanguage = (e) => {
                        setLang(e.target.value)
            }
            return (
                        <div className="lang">
                                    {/* <span className='arrowSelect'> <img src={selectArrowIcon} alt="arrow" /></span> */}
                                    <select onChange={changeLanguage} value={lang}>
                                                <option value={langAvaible.pl}>{langAvaible.pl}</option>
                                                <option value={langAvaible.en}>{langAvaible.en}</option>
                                    </select>
                        </div>
            )
}
export default SelectLang;
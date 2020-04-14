import React from 'react';
import ShowMore from '../../components/ShowMore/ShowMore';
import CV from '../../assets/CV.pdf';
import Button from '../../components/Button/Button';
import './ExperiencePage.scss';
import ca_logo from '../../assets/ca_logo.png';
import stefczyk_logo from '../../assets/skok_logo.png';
import ing_logo from '../../assets/ing_logo.png';
import open_logo from '../../assets/open_logo.png';
import { experiencePage } from '../../content.json';

const ExperiencePage = ({ lang }) => {
            const content = experiencePage[lang];


            const downloadCV = () => {
                        window.open(CV);
            }

            return (
                        <div className='experience'>

                                    <h1 className='experience__header'>{content.title}</h1>
                                    <article className='job'>
                                                <img className='job__logo' src={ca_logo} alt="Credit Agricole logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>{content.companies.creditAgricole.name}</h2>
                                                            <p className='company__position'>{content.companies.creditAgricole.position}</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        {content.companies.creditAgricole.description}
                                                            </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={stefczyk_logo} alt="Stefczyk Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>{content.companies.stefczykFinance.name}</h2>
                                                            <p className='company__position'>{content.companies.stefczykFinance.position}</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        {content.companies.stefczykFinance.description}

                                                            </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={ing_logo} alt="ING Bank Śląski logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>{content.companies.ingBankSlaski.name}</h2>
                                                            <p className='company__position'>{content.companies.ingBankSlaski.position}</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        {content.companies.ingBankSlaski.description}

                                                            </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={open_logo} alt="Open Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>{content.companies.openFinance.name}</h2>
                                                            <p className='company__position'>{content.companies.openFinance.position}</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        {content.companies.openFinance.description}

                                                            </ShowMore>
                                                </div>
                                    </article>


                                    <Button className='aboutPage__cvBtn' onClick={downloadCV}>Pobierz CV</Button>
                        </div>

            )
}

export default ExperiencePage;
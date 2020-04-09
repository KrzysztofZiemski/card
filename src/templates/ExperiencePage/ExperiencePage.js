import React from 'react';
import ShowMore from '../../components/ShowMore/ShowMore';
import CV from '../../assets/CV.pdf';
import Button from '../../components/Button/Button';
import './ExperiencePage.scss';
import ca_logo from '../../assets/ca_logo.png';
import stefczyk_logo from '../../assets/skok_logo.png';
import ing_logo from '../../assets/ing_logo.png';
import open_logo from '../../assets/open_logo.png';

const ExperiencePage = () => {
            const downloadCV = () => {
                        window.open(CV);
            }
            return (
                        <section className='experience'>

                                    <h1 className='experience__header'>Doświadczenie</h1>
                                    <article className='job'>
                                                <img className='job__logo' src={ca_logo} alt="Open Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>Credit Agricole</h2>
                                                            <p className='company__position'>Doradca klienta</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        Byłem odpowiedzialny głównie za obługę bieżącą klientów banku. Zajmowałem się kredytami gotówkowymi, kartami oraz rachunkami. W razie konieczności pomagałem w sprawach technicznych związanych z bankowością internetową.
                                                                        </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={stefczyk_logo} alt="Open Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>Stefczyk Finanse</h2>
                                                            <p className='company__position'>Doradca klienta</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        Sprzedaż produktów kredytowych.

                                                                        </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={ing_logo} alt="Open Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>ING Bank Śląski</h2>
                                                            <p className='company__position'>Doradca klient</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        Obsługa klienta oraz sprzedaż kredytów.
                                                                        Sprzedaż funduszy inwestycyjnych.
                                                                        Przyjmowanie wniosków hipotecznych.

                                                                        </ShowMore>
                                                </div>
                                    </article>
                                    <article className='job'>
                                                <img className='job__logo' src={open_logo} alt="Open Finance logo" />
                                                <div className='company'>
                                                            <h2 className='company__name'>Open Finance</h2>
                                                            <p className='company__position'>Internetowy doradca finansowy</p>
                                                </div>
                                                <div className='job__description'>
                                                            <ShowMore limit={0} readMoreText={'czytaj więcej'} readLessText={'mniej'}>
                                                                        Telefoniczna sprzedaż lokat,rachunków,IKE, funduszy
                                                                        inwestycyjnych.

                                                                        </ShowMore>
                                                </div>
                                    </article>


                                    <Button className='aboutPage__cv' onClick={downloadCV}>Pobierz CV</Button>
                        </section>

            )
}

export default ExperiencePage;
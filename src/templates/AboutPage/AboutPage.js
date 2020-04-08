import React from 'react';
import ShowMore from '../../components/ShowMore/ShowMore';
import { Link } from 'react-router-dom';
import CV from '../../assets/CV.pdf';

import './AboutPage.scss';

const AboutPage = () => {
            return (
                        <div className="aboutPage">
                                    <section className="aboutMe">
                                                <h1 className='aboutMe__header'>Witaj</h1>
                                                <p className='aboutMe__paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos neque eius labore officiis autem quam, quisquam dolorum numquam eum soluta incidunt veritatis explicabo repellendus consequuntur beatae saepe, ut, omnis cum.</p>
                                                <p className='aboutMe__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti nisi, soluta ex officiis quis illum corrupti cupiditate mollitia? Adipisci quas dignissimos eum tenetur minima accusantium vel pariatur, esse reiciendis!</p>
                                                <p className='aboutMe__paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nesciunt totam fugiat ad dolorum eos fuga iste in libero! Animi vitae optio aspernatur ratione dolorum molestiae labore odio nam architecto.</p>

                                    </section>
                                    <section className='experience'>

                                                <h1 className='experience__header'>Doświadczenie</h1>
                                                <article className='job'>
                                                            <h2 className='job__header'>Credit Agricole</h2>
                                                            <p className='job__data'>08-2019 - aktualnie</p>
                                                            <p className='job__position'>Doradca Klienta</p>
                                                            <div className='job__description'>
                                                                        <ShowMore limit={20}>
                                                                                    Byłem odpowiedzialny głównie za obługę bieżącą klientów banku. Zajmowałem się kredytami gotówkowymi, kartami oraz rachunkami. W razie konieczności pomagałem w sprawach technicznych związanych z bankowością internetową.
                                                                        </ShowMore>
                                                            </div>
                                                </article>
                                                <article className='job'>
                                                            <h2 className='job__header'>Credit Agricole</h2>
                                                            <p className='job__data'>08-2019 - aktualnie</p>
                                                            <p className='job__position'>Doradca Klienta</p>
                                                            <div className='job__description'>
                                                                        <ShowMore limit={90}>
                                                                                    Byłem odpowiedzialny głównie za obługę bieżącą klientów banku. Zajmowałem się kredytami gotówkowymi, kartami oraz rachunkami. W razie konieczności pomagałem w sprawach technicznych związanych z bankowością internetową.
                                                                        </ShowMore>
                                                            </div>
                                                </article>
                                                <article className='job'>
                                                            <h2 className='job__header'>Credit Agricole</h2>
                                                            <p className='job__data'>08-2019 - aktualnie</p>
                                                            <p className='job__position'>Doradca Klienta</p>
                                                            <div className='job__description'>
                                                                        <ShowMore limit={90}>
                                                                                    Byłem odpowiedzialny głównie za obługę bieżącą klientów banku. Zajmowałem się kredytami gotówkowymi, kartami oraz rachunkami. W razie konieczności pomagałem w sprawach technicznych związanych z bankowością internetową.
                                                                        </ShowMore>
                                                            </div>
                                                </article>
                                                <article className='job'>
                                                            <h2 className='job__header'>Credit Agricole</h2>
                                                            <p className='job__data'>08-2019 - aktualnie</p>
                                                            <p className='job__position'>Doradca Klienta</p>
                                                            <div className='job__description'>
                                                                        <ShowMore limit={90}>
                                                                                    Byłem odpowiedzialny głównie za obługę bieżącą klientów banku. Zajmowałem się kredytami gotówkowymi, kartami oraz rachunkami. W razie konieczności pomagałem w sprawach technicznych związanych z bankowością internetową.
                                                                        </ShowMore>
                                                            </div>
                                                </article>

                                    </section>
                                    <Link className='aboutPage__cv' to={CV} target="_blank" download>Pobierz CV</Link>
                        </div >
            )
}

export default AboutPage;
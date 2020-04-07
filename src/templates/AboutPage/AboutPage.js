import React from 'react';
import ShowMore from '../../components/ShowMore/ShowMore';
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
                                                            <ShowMore limit={15}>
                                                                        <p>jeden jeden jeden</p>
                                                                        <p>dwa dwa dwa</p>
                                                                        <p>trzy trzy trzy</p>
                                                                        <p>cztery cztery cztery cztery</p>
                                                            </ShowMore>
                                                </article>

                                    </section>
                                    <div><button>Pobierz CV</button></div>
                        </div >
            )
}

export default AboutPage;
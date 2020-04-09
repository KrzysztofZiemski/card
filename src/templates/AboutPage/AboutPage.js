import React from 'react';
import StackElement from '../../components/StackElement/StackElement';

import './AboutPage.scss';

const AboutPage = () => {
            return (
                        <section className="aboutPage">
                                    <h1 className='aboutPage__header'>O mnie </h1>
                                    <article className='description'>
                                                <p className='description__paragraph' >Nazywam się Krzysztof Ziemski.</p>
                                                <p className='description__paragraph' >Jestem po trzydziestce (jeżeli chodzi o wiek).</p>
                                                <p className='description__paragraph'>Ze względu na własne wartości, postanowiłem opuścić aktualną branżę - bankowość.
                                    Dzięki temu zająłem się tym co od dawna mnie ciekawi</p>
                                                <p className='description__paragraph'>Uczę się zagadnień związanych web developmentem od jesieni 2018 roku.
                                   Nauka jest dla mnie przyjemnością, poszukuje jednak możliwości zatrudnienia, aby przyspieszyć ten proces. </p>
                                                <p className='description__paragraph'>Jestem ambitną osobą, która nie narzeka na nudę. Zawsze umiałem zagospodarować swój czas - czy to ucząc się gry na gitarze, czy przebywając dziesiątki kilometrów biegając po parkach.</p>
                                                <p className='description__paragraph'>Cechuję mnie wysoka determinacja, która pomagała mi zawsze w życiu osobistym i zawodowym.</p>
                                    </article>
                                    <article className='skills'>
                                                <StackElement className='skills__element'>css</StackElement>
                                                <StackElement className='skills__element'>html</StackElement>
                                                <StackElement className='skills__element'>javascript</StackElement>
                                                <StackElement className='skills__element'>react</StackElement>
                                                <StackElement className='skills__element'>rwd</StackElement>
                                                <StackElement className='skills__element'>git</StackElement>
                                                <StackElement className='skills__element'>sass</StackElement>
                                                <StackElement className='skills__element'>npm</StackElement>
                                                <StackElement className='skills__element'>node</StackElement>
                                    </article>
                        </section >
            )
}

export default AboutPage;
import './styles/homepageStyle.css'
import { ReactComponent as WaveSVG } from '../Pages/assets/wave-haikei-trans.svg';
import { ReactComponent as PeaksSVG } from '../Pages/assets/layered-peaks-haikei-trans.svg';
import { ReactComponent as StepsSVG } from '../Pages/assets/layered-steps-haikei-trans.svg';


import { useEffect, useState } from "react";


export function Homepage() {

    useEffect(() => {

    }, [])

    document.title = "Andy Danger Portfolio";

    return (
        <div>
            <div className="container waves">
                <section className="background">
                    <div className="content-wrapper">
                        <p className="content-title">Hello!</p>
                        <p className="content-subtitle">I'm Andrew "Andy Danger" Marshall, a UX designer, analytics specialist, and web developer based in St. Louis</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <WaveSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">UX</p>
                        <p className="content-subtitle">I've designed, developed and designed hundreds of A/B test for a whole slew of clients and industries.</p>
                        <p>
                        <iframe width="100%" height="400px" src="https://docs.google.com/presentation/d/e/2PACX-1vQrzu8ryhSHnwhhJ8lGPTe7h8mBQRdiGyS8vNiH7x_FSNi7VxZoqq_ivGT-sIdkYpjXQwAAWEKWPf-g/embed?start=true&loop=true&delayms=3000" frameBorder="0" allowFullScreen={true}></iframe>
                        </p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <WaveSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Analytics</p>
                        <p className="content-subtitle">My insights are catered to fit your needs and based on real-market data.</p>
                        <p>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/uOoyhCdPSwM" title="Guess The Test: Including Savings Callout in Mini-Cart" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <WaveSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Web Development</p>
                        <p className="content-subtitle">Everything you see here I coded myself. Swipe left to learn more</p>
                    </div>
                </section>
            </div>
            <div className="container peaks">
                <section className="background">
                    <div className="content-wrapper">
                        <p className="content-title">Work</p>
                        <p className="content-subtitle">Scroll down!</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Clients</p>
                        <p className="content-subtitle">TODO</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">A/B Testing</p>
                        <p className="content-subtitle">TODO</p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <PeaksSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Personal</p>
                        <p className="content-subtitle">TODO</p>
                    </div>
                </section>
            </div>
            <div className="container steps">
                <section className="background">
                    <div className="content-wrapper">
                        <p className="content-title">About</p>
                        <img src={require('../Pages/assets/hawaii.jpg')} />
                        <p className="content-subtitle"></p>
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Education</p>
                        <p className="content-subtitle">I graduated from Iowa State University with a Bacherlors degree in Computer Engineering in 2017.</p>
                        <img src={require('../Pages/assets/graduation.jpg')} />
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Hobbies</p>
                        <p className="content-subtitle">Cats. Rock climbing. Collecting vinyl records.</p>
                        <img src={require('../Pages/assets/adele.jpg')} />
                    </div>
                </section>
                <section className="background">
                    <div className='wrapper'>
                        <StepsSVG />
                        <div></div>
                    </div>
                    <div className="content-wrapper">
                        <p className="content-title">Inspirations</p>
                        <p className="content-subtitle">Logo inspired by End of Evangelion. Waves, mountains, and buildings made using <a href="https://app.haikei.app/">Haikei.app</a></p>
                        <img src={require('../Pages/assets/evangelion.jpg')} />
                    </div>
                </section>
            </div>
        </div>
    );
}
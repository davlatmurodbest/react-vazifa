import './hero.scss'
import play from '../img/Play.png'
import happygirl from '../img/Happygirl.png'
import icons from '../img/Icon.png'
import kkkk from '../img/50k.png'
import client from '../img/Client.png'
import React from 'react'

export default function Hero() {
    let xref = React.useRef()
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">Best  <span className='hero__dizayn'><span className='hero__cir'><span className="hero__cir cir"></span></span>Marketing <span className='hero__cir top'> <span className='hero__cir topleft'></span></span></span> Digital Agency</h1>
                        <p className="hero__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                        <div className="hero__watch">
                            <a title='Bosing va tomosha qiling' href="#link" className="hero__link" onClick={() => {
                                xref.current.classList.add('men')
                            }}>Get started</a>
                            <span className='hero__circle'>
                                <img src={play} alt="play" className='hero__play' />
                            </span>
                            <a href="#link" className="hero__vid">Watch video</a>
                        </div>
                    </div>
                    <div className="modal__bg" ref={xref}>
                        <div className="hero__watchc">
                            <button className='exit' onClick={() => {
                                xref.current.classList.remove('men')
                            }}>X</button>
                            <iframe width="800" height="505" src="https://www.youtube.com/embed/oQvEDmotf8o?si=zgS12N9EEWVsI-5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="hero__pics">
                        <img src={happygirl} alt="happygirl" className="hero__happy" width={599} height={592} />
                        <img src={icons} alt="icon" className="hero__icon" width={408} height={212} />
                        <img src={kkkk} alt="kk" className="hero__50k" width={250} height={119} />
                        <img src={client} alt="client" className="hero__client" width={200} height={70} />
                    </div>
                </div>
            </section>
        </>
    )
}
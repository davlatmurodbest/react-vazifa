import './header.scss'
import logo from '../img/Logo.png'
import React from 'react'

export default function Header() {
    let xref = React.useRef()
    return (
        <>
            <header className="header">
                <div className="container" >
                    <a href="#link" className="header__logo">
                        <img src={logo} alt="logo" width={189} height={40} />
                    </a>
                    <div className="header__list">
                        <a href="#link" className="header__link">Features</a>
                        <a href="#link" className="header__link">Pricing & Plans</a>
                        <a href="#link" className="header__link">Support</a>
                        <a href="#link" className="header__link">About Us</a>
                    </div>
                    <button className="header__con" onClick={() => {
                        xref.current.classList.add('men')
                    }}>Contact us</button>
                    <div className="modal__bg " ref={xref}>

                        <form className="modal" >
                            <button className='exit' type='button' onClick={(evt) => {
                                if (evt.code = 'Enter') {
                                    xref.current.classList.remove('men')
                                }
                            }}>X</button>
                            <h2 className="modal__heading">Fill form. we will connect with you soon</h2>
                            <input type="text" className="modal__tel" placeholder='Tel nomer' />
                            <input type="text" className="modal__tel" placeholder='Telegram Username' />
                            <button className='modal__btn' >Submit</button>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}

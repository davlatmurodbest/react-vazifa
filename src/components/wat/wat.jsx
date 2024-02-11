import React from 'react'
import './wat.scss'
import icon1 from '../img/Icon-2.png'
import icon2 from '../img/Icon-3.png'
import icon3 from '../img/Icon-4.png'
import icon4 from '../img/Icon-5.png'
import roket from '../img/rocket.png'

export default function What () {
    let [value] = React.useState([
        {
            id: 0,
            picture: icon1,
            heading: 'Digital Marketing',
            text: 'That is the simply dummy text the printing and typesetting industry. ',
            read: 'Read more'
        },
        {
            id: 1,
            picture: icon2,
            heading: 'SEO',
            text: 'That is the simply dummy text the printing and typesetting industry. ',
            read: 'Read more'
        },
        {
            id: 2,
            picture: icon3,
            heading: 'UI UX Design',
            text: 'That is the simply dummy text the printing and typesetting industry. ',
            read: 'Read more'
        },
        {
            id: 3,
            picture: icon4,
            heading: 'Web Development',
            text: 'That is the simply dummy text the printing and typesetting industry. ',
            read: 'Read more'
        },
    ])
    return (
        <>
        <section className="wat">
            <div className="container">
                <div className="wat__info">
                    <span className="wat__top">What we do</span>
                    <h3 className="wat__heading">We Are Here To Help You Build Your Business <img src={roket} alt="roket" width={38} height={38} /></h3>
                    <p className="wat__text">Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                    <a href="#link" className="wat__all">Explore all service</a>
                </div>
                <ul className="wat__list">
                    {value.map((row) => (
                        <li className='wat__item'>
                            <img src={row.picture} alt="alt" className="wat__pic" width={71} height={71} />
                            <h4 className="wat__head">{row.heading}</h4>
                            <p className="wat__tex">{row.text}</p>
                            <a href="#link" className="wat__read">{row.read}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}
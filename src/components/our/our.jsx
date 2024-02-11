import React from 'react'
import './our.scss'
import slack from '../img/Slack.png'
import descrip from '../img/Descript.png'
import etsy from '../img/Etsy.png'
import spot from '../img/Spotify.png'
import log from '../img/Logitech.png'

export default function Our() {

    let [value] = React.useState([
        {
            id: 0,
            pic: slack,
            alt: 'slac',
        },
        {
            id: 1,
            pic: descrip,
            alt: 'descrip',
        },
        {
            id: 2,
            pic: etsy,
            alt: 'etsy',
        },
        {
            id: 3,
            pic: spot,
            alt: 'spot',
        },
        {
            id: 4,
            pic: log,
            alt: 'logitech',
        },
    ])
    return (
        <>
        <section className="our">
            <div className="container">
                <h2 className="our__heading">OUR TRUSTED CLIENTS</h2>
                <div className="our__pics">
                    {value.map((row) => (
                        <img src={row.pic} alt={row.alt}  ></img>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
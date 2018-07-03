import React, { Component } from 'react';

class Xbox extends Component {
    render() {
        return (
            <div className="container__xbox">
                <div className="xbox__img"></div>
                <div className="xbox__title">Xbox</div>
                <ul className="xbox__adv">
                    Advantages
                    <li className="xbox__adv--item">Console has a faster processor</li>
                    <li className="xbox__adv--item">Console can play Ultra HD Blu-ray discs</li>
                    <li className="xbox__adv--item">Supports cross platform gaming</li>
                    <li className="xbox__adv--item">Halo and Gears of War I guess?</li>
                </ul>
            </div>
        );
    }   
}

export default Xbox;

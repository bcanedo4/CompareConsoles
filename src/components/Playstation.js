import React, { Component } from 'react';

class Playstation extends Component {
    render() {
        return (
            <div className="container__playstation">
                <div className="play__img"></div>
                <div className="play__title">PlayStation</div>
                <ul className="play__adv">
                    Advantages
                    <li className="play__adv--item">Console costs less</li>
                    <li className="play__adv--item">Myriad of PS4 exclusive games</li>
                    <li className="play__adv--item">More PS4 units sold</li>
                    <li className="play__adv--item">Controller is more comfortable</li>
                </ul>
            </div>
        );
    }   
}

export default Playstation;

import React, { Component } from 'react';

class Playstation extends Component {
    render() {
        return (
            <div class="container__playstation">
                <div class="play__img"></div>
                <div class="play__title">PlayStation</div>
                <ul class="play__adv">
                    Advantages
                    <li class="play__adv--item">PS4 Pro costs less</li>
                    <li class="play__adv--item">Myriad of PS4 exclusive games</li>
                    <li class="play__adv--item">More PS4 units sold</li>
                    <li class="play__adv--item">Controller is more comfortable</li>
                </ul>
            </div>
        );
    }   
}

export default Playstation;

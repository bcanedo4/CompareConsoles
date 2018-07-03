import React, { Component } from 'react';

class Xbox extends Component {
    render() {
        return (
            <div class="container__xbox">
                <div class="xbox__img"></div>
                <div class="xbox__title">Xbox</div>
                <ul class="xbox__adv">
                    Advantages
                    <li class="xbox__adv--item">Xbox One X has a faster processor</li>
                    <li class="xbox__adv--item">Xbox One X can play Ultra HD Blu-ray discs</li>
                    <li class="xbox__adv--item">Supports cross platform gaming</li>
                    <li class="xbox__adv--item">Halo and Gears of War I guess?</li>
                </ul>
            </div>
        );
    }   
}

export default Xbox;

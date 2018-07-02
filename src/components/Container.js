import React, { Component } from 'react';
import Playstation from './Playstation';
import Xbox from './Xbox';


class Container extends Component {
    render() {
        return (
            <div class="container">
                The Container
                <Playstation />
                <Xbox />
            </div>
        );
    }
}

export default Container;

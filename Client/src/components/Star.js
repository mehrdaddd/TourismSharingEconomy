import React, { Component } from 'react';
import ReactStars from 'react-stars'

// main component-

class Star extends Component {


    render() {

        return(

            <div>

                <ReactStars className="star"
                            count={5}
                            size={30}
                            value={this.props.value}
                            color2={'#ffd700'}
                            color1={'black'}
                            half={false}
                            onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Star;
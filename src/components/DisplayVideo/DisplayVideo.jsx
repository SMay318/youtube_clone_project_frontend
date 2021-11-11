import React, {Component} from 'react';


class DisplayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: ''
        };
    }

    render() {
        return (
            <div>
                <iframe width="800px" height="600px" src="https://www.youtube.com/embed/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default DisplayVideo;
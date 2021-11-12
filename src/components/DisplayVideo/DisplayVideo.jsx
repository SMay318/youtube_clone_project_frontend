import React, {Component} from 'react';

class DisplayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: ''

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe> 
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}

export default DisplayVideo;
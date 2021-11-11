import React, {Component} from 'react';

class DisplayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: ''}
    }

    render() {
        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
            </div>
        );
    }
}

export default DisplayVideo;
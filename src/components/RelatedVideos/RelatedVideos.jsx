import React, {Component} from 'react';

class RelatedVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: ''
        }
    }

    render() {
        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="100" height="60"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
                 <iframe id="ytplayer" type="text/html" width="100" height="60"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
                <iframe id="ytplayer" type="text/html" width="100" height="60"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
                <iframe id="ytplayer" type="text/html" width="100" height="60"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
            </div>
        );
    }
}

export default RelatedVideo;
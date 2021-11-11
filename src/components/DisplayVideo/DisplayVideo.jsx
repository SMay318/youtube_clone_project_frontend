import React, {Component} from 'react';

<<<<<<< HEAD

class DisplayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: ''
        };
=======
class DisplayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videoId: ''}
>>>>>>> 5ad73a55ce065e72720b80186c7d9594c42a0ddd
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <iframe width="800px" height="600px" src="https://www.youtube.com/embed/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
=======
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}>
                    </iframe>
>>>>>>> 5ad73a55ce065e72720b80186c7d9594c42a0ddd
            </div>
        );
    }
}

export default DisplayVideo;
import React, {Component} from 'react';
import Iframe from './components/iframe.js';

class DisplayViedo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "https://www.youtube.com/embed/"+ videoId + "/"
        };
    }

    render() {
        return (
            <div className="App">
                <h1>Video</h1>
                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default App;
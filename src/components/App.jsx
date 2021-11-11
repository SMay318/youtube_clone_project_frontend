import { googleAPIKey } from '../keys';
import React, { Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos:[],
            videoId: [{}]
         }
    }

    componentDidMount(){
        this.getVideo();

    }

    getVideo = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=${googleAPIKey}`)
        this.setState({
            videos: response.data,
            videoId: response.data.items[0].id.vidoeId
        })
    }
        
    render() { 
        return ( 
            <div>
                <SearchBar getVideo={this.getVideo} />
                <DisplayVideo />
            </div>
         );
    }
}
 
export default App;

// `https://www.googleapis.com/youtube/v3/search?q=${searchVideo}&type=video&key=${googleAPIKey}`
import { googleAPIKey } from '../keys';
import React, { Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import DisplayVideo from './DisplayVideo/DisplayVideo';
import <RelatedVideos></RelatedVideos> from './RelatedVideos/RelatedVideos';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            relatedVideos: [],
            videos:[],
            videoId: ''
         }
    }

    componentDidMount(){
        this.getVideo();

    }

    getVideo = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=${googleAPIKey}`)
        this.setState({
            videos: response.data.items,
            videoId: response.data.items[0].id.videoId
        })
        this.getRelatedVideos(response.data.items[0].id.videoId)
    }

    getRelatedVideos = async (videoId) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedVideo=${videoId}&type=video&key=${googleAPIKey}`)
    }
        
    render() { 
        return ( 
            <div>
                <SearchBar getVideo={this.getVideo} />
                <DisplayVideo videoId = {this.state.videoId}/>
                <RelatedVideos videos={this.state.relatedVideos} />
            </div>
         );
    }
}
 
export default App;


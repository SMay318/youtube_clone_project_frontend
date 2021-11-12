import { googleAPIKey } from '../keys';
import React, { Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import DisplayVideo from './DisplayVideo/DisplayVideo';
import RelatedVideos from './RelatedVideos/RelatedVideos';

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
    changeVideo=(newVideoId)=>{
        this.setState({
            videoId: newVideoId
        })
    }

    getVideo = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&key=${googleAPIKey}`)
        this.setState({
            videos: response.data.items,
            videoId: response.data.items[0].id.videoId
        })
        this.getRelatedVideos(response.data.items[1].id.videoId)
    }

    getRelatedVideos = async (VideoId) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedVideo=${VideoId}&part=snippet&ype=video&key=${googleAPIKey}`)
        console.log(response.data)
        this.setState({
            relatedVideos: response.data.items
            
        })
    }
        
    render() { 
        return ( 
            <div>
                <SearchBar getVideo={this.getVideo} />
                <DisplayVideo videoId = {this.state.videoId}/>
                <RelatedVideos relatedVideos={this.state.relatedVideos} changeVideo={this.changeVideo} />
            </div>
         );
    }
}
 
export default App;


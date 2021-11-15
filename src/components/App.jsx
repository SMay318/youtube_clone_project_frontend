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
            videoId: '',
            title:'',
            description: '',
            comments: []
         }
    }

    componentDidMount(){
        this.getVideo('dogs');
        this.getComments();
        

    }

    setMount(){
        this.addComment();
    }


    changeVideo=(newVideoId)=>{
        this.setState({
            videoId: newVideoId
        }, () => this.getRelatedVideos())
    }

    getVideo = async (searchTerm) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&type=video&key=${googleAPIKey}`)
        this.setState({
            videos: response.data.items,
            videoId: response.data.items[0].id.videoId
        },() => this.getRelatedVideos())
        
    }

    getRelatedVideos = async (VideoId) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedVideo=${VideoId}&part=snippet&type=video&key=${googleAPIKey}`)
        console.log(response.data)
        this.setState({
            relatedVideos: response.data.items,
            title: response.data.items[0].snippet.title,
            description: response.data.items[0].snippet.description

            
        })
    }

    getComments = async () =>{
        let response = await axios.get('http://127.0.0.1:8000/youtube/');
        this.setState({
            comments: response.data
        });

    }

    addComment = async (text) => {
        let response = await axios.post('http://127.0.0.1:8000/youtube/', text)
        this.getComments()
    }
        
    render() { 
        return ( 
            <div>
                <SearchBar getVideo={this.getVideo} />
                <DisplayVideo videoId = {this.state.videoId} title={this.state.title} description={this.state.description} />
                <RelatedVideos videoId={this.state.videoId} relatedVideos={this.state.relatedVideos} changeVideo={this.changeVideo} />
            </div>
         );
    }
}
 
export default App;


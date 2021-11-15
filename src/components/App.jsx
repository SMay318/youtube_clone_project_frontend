import { googleAPIKey } from '../keys';
import React, { Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import DisplayVideo from './DisplayVideo/DisplayVideo';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import Comments from './Comments/Comments';
import CommentTable from './CommentTable/CommentTable';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            relatedVideos: [],
            videos:[],
            videoId: '',
            title:'',
            description: '',
            comments: [],
            reply: [],
         }
    }

    componentDidMount(){
        this.getVideo('dogs');
        this.getComments();
        this.getReplies();
       
       
        
        

    }

    setMount(){
        this.likes();
        this.dislikes();
        this.addComment();
        this.addReply();
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
            videoId: response.data.items[0].id.videoId,
            title: response.data.items[0].snippet.title,
            description: response.data.items[0].snippet.description
        },() => this.getRelatedVideos())
        
    }

    getRelatedVideos = async () => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.videoId}&part=snippet&type=video&key=${googleAPIKey}`)
        console.log(response.data)
        this.setState({
            relatedVideos: response.data.items,
            videoId: response.data.items[0].id.videoId,
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
    addComment = async (newComment) => {
        console.log(newComment)
        let response = await axios.post('http://127.0.0.1:8000/youtube/', newComment)
        this.getComments()
        this.setState({
            newComment: response.data
        });
        this.getComments()
    }
    
    getReplies = async () => {
        let response = await axios.get('http://127.0.0.1:8000/reply/');
        this.setState({
            reply: response.data
        })
    }

    addReply = async (newReply) => {
        let response = await axios.post('http://127.0.0.1:8000/reply/', newReply);
        this.getReplies()
        this.setState({
            newReply: response.data
        });
        this.getReplies()
    }

    likes = async (comment) => {
        let updatedComment = comment;
        updatedComment.likes++;
        let response = await axios.put('http://127.0.0.1:8000/youtube/'+comment.id+'/', updatedComment);
        this.getComments()

    }

    dislikes = async (comment) => {
        let updatedComment = comment;
        updatedComment.dislikes++;
        let response = await axios.put('http://127.0.0.1:8000/youtube/'+comment.id+'/', updatedComment);
        this.getComments()
    }

    render() { 
        return ( 
            <div>
                <SearchBar getVideo={this.getVideo} />
                <DisplayVideo videoId = {this.state.videoId} title={this.state.title} description={this.state.description} />
                <Comments newComment={this.addComment} videoId={this.state.videoId}/>
                <CommentTable comments={this.state.comments} like={this.likes} dislike={this.dislikes} reply={this.state.reply} newReply={this.addReply}/>
                <RelatedVideos videoId={this.state.videoId} relatedVideos={this.state.relatedVideos} changeVideo={this.changeVideo} />
                
                
            </div>
         );
    }
}
 
export default App;


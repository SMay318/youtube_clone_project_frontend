import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            videoId: this.props.videoId,
            likes: 0,
            dislikes: 0

            
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.props)
        event.preventDefault();
        console.log(this.state)
        this.props.newComment(this.state)
    }



    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input name='comment' onChange={this.handleChange} value={this.state.comment}/>
                <button type='submit'>Add Comment</button>
            </form>
         );
    }
}
 
export default Comments;
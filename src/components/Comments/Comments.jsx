import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            videoId: '',
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
        event.preventDefault();
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
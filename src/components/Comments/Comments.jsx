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

    handlesChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewComment(this.state)
    }



    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='comment' onChange={this.handlesChnages} />
                <button type='submit'>Add Comment</button>
            </form>
         );
    }
}
 
export default Comments;
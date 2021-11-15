import React, { Component } from 'react';

class Reply extends Component{
    constructor(props){
        super(props)
        this.state = {
<<<<<<< HEAD

            text:"",
            video_id: props.video_id,
=======
           
           reply: '',
           comment_id: this.props.comment_pk
>>>>>>> 6a14e289f567f32b1eae23164fbe2d76a5f96c7b

        }
    }

    componentDidUpdate = (prevState) => {
        if(
            this.state.video_id != this.props.video_id
        ){
            this.setState({
                videp_id: this.props.video_id
            })
        }
    }

    handleChange = (event) => {
        console.log('hello')
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.createReply(this.state)
    }

    render() {
        return(
            <div>
                <h4>Reply</h4>
                <form onSubmit= {this.handleSubmit} method= 'post'>
                    <div>
                        <input text= "text" name= "text" onChange={this.handleChange} value= {this.state.text} />
                        <button type="submit" className="searchButton">Reply Here</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reply;
import React, { Component } from 'react';

class Reply extends Component{
    constructor(props){
        super(props)
        this.state = {

            text:"",
            video_id: props.video_id,

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
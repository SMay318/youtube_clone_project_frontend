import React, { Component } from 'react';

class Reply extends Component{
    constructor(props){
        super(props)
        this.state = {

           reply: '',
           comment_id: this.props.comment_pk

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
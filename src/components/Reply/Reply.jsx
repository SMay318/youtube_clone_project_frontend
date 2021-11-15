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
        this.props.newReply(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <div>
                        <input text= "text" name= "reply" onChange={this.handleChange} />
                        <button type="submit" className="searchButton">Add Reply</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reply;
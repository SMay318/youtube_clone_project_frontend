import React from "react";
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.getVideo(this.state.searchTerm);
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="videoSearch">Enter YouTube Video Search</label>
            <Input action='Search' onChange={this.handleChange} name='videoSearch' type="text" value={this.state.searchTerm}/>
        </form>
        )
    }
}
 export default SearchBar;

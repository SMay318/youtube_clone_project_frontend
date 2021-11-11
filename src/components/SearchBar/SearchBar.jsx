import React, {Component} from "react";


class SearchBar extends Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.getVideo(this.state.searchTerm);
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchTerm">Enter YouTube Video Search:</label>
            <input action='Search' onChange={this.handleChange} name='searchTerm' type="text" value={this.state.searchTerm}/>
            <button type='submit'>Search</button>
        </form>
        )
    }
}
 export default SearchBar;

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDrinks } from '../actions/index';

class Search extends Component {
	
	componentDidMount(){
	    this.searchInput.focus();
	  }
	
	constructor(props) {
		super(props);
		
		this.state = { term: ''};
		
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value})
		this.props.fetchDrinks(this.state.term);
		
	}
	
	onFormSubmit(event) {
		event.preventDefault();
		
		// We need to go and fetch weather data
		this.props.fetchDrinks(this.state.term);
		//this.setState({ term: '' });
		
	}
	
	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
			    <input placeholder="search" value={this.state.term} onChange={this.onInputChange} ref={(input) => { this.searchInput = input; }}/>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchDrinks }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
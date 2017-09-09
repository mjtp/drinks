import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDrink } from '../actions';
import DrinkIngredients from '../components/drink-ingredients'


class DrinkDetail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchDrink(id);
	
	}
	
	render() {
		const { drink } = this.props;
		
		console.log(this.props)
		
		if (!drink) {
			return <div>Loading...</div>;
		}
		
		return (
			
	<div>	
	<nav className="detail">
		 <Link className="btn" to="/"><div className="back"></div></Link>
		<h4>{drink.strDrink}</h4>
		<div className="logo"></div>
	</nav>
	
	<div className="container">
		   
			<div>
				<h6>Ingredients</h6>
			   <DrinkIngredients drink = {drink} />
		   </div>
			
			<div>
				<h6>Instructions</h6>
				<p>{drink.strInstructions}</p>
		   </div>
	</div>
			
	</div>
		);
	}
}

function mapStateToProps({ drinks }, ownProps) {
	return { drink: drinks[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchDrink})(DrinkDetail);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DrinkIngredients from '../components/drink-ingredients'
import { CSSTransitionGroup } from 'react-transition-group'

class DrinkList extends Component {	
	
	renderDrinks() {
		return _.map(this.props.drinks, drink => {
			return(
				<Link to={`/drinks/${drink.idDrink}`} key={drink.idDrink}>
				
		<div className="list-item">
			<h4>{drink.strDrink}</h4>		
				<DrinkIngredients drink = {drink} />
		   </div>
				</Link>
			);
		});
	}
	
	render() {
		return (
		
          <CSSTransitionGroup component="div" className="list"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
			 //disable
			 transitionEnter={false}
			 transitionLeave={false}
			 >
			{this.renderDrinks()}
			</CSSTransitionGroup>

		);
	}
}

function mapStateToProps({drinks}) {
	return { drinks };
}

export default connect(mapStateToProps)(DrinkList);
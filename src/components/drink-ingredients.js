import React, { Component } from 'react';

class DrinkIngredients extends Component {
	componentDidMount() {
	
	}
	
	
	
	renderList() {
		
		var drink = this.props.drink;
		var array = []
		for (var i = 1; i < 15; i++) {
 			var ingredient = drink["strIngredient" + i.toString()]
			var measurement = drink["strMeasure" + i.toString()]
 			if (ingredient){
 				array.push({ ingredient: ingredient, measurement: measurement })
 			}
 		}
		
		
		console.log(array)
		
		
		return _.map(array, (value, index) => {
			return(				
				<li key = {index}>
					<div>{value.ingredient}</div>
					<div>{value.measurement}</div>
				</li>			
			);
		});
		
		
		
	}
	
	
	render() {
		return <ul>{this.renderList()}</ul>
	}
}

export default DrinkIngredients;
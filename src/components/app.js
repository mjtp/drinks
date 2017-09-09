import React, { Component } from 'react';
import Search from '../containers/search'
import DrinkList from '../containers/drink-list'

export default class App extends Component {
  render() {
    return (
		 <div>
		 <nav>
		  <div className="logo"></div>
	    </nav>
       	<Search />
		   <DrinkList />
		 </div>
    );
  }
}

import React, { Component } from 'react';
import Card from './Card';
import'./Cards.css';



class Cards extends Component {
render(){
	const mapCards = this.props.filteredlist.map((user,i) =>{
		return <Card key={i} name={user.name} price={user.price} photo={user.photo}  add={this.props.funtionadd.bind(this, i)} 
		remove={this.props.funtionremove.bind(this, i)}/>
	})
return(
<div className='cardcontainer'>
{mapCards}
</div>
);
}
}

export default Cards;
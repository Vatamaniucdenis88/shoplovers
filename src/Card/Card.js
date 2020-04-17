import React, { Component } from 'react';
import './Card.css'



class Card extends Component {
render(){
return(
<div className='card-medium' >
<img  className='card-small' src={this.props.photo} alt='photo'/>
<p>{this.props.name}</p>
<p>{this.props.price} euro</p>
<button className='button-add' onClick={this.props.add} > Add </button>
<button className='button-remove' onClick={this.props.remove}>Remove</button>
</div>
);
}
}

export default Card;

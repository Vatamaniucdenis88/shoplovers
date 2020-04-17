import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
render(){
return(
<div className='Searchbarcontainer'>
<input onChange={this.props.dofunction} className='input' type='text' placeholder='Type your item...' />
<div >
<p className='button'> Total:{this.props.passPrice.toFixed(2)} euro </p>
</div>
</div>
);
}
}

export default Searchbar;
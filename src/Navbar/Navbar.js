import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
render(){
return(
<div className='navbarcontainer'>
<button className='button-order' onClick={this.props.passShowModal} > ORDER NOW </button>
</div>
);
}
}

export default Navbar;
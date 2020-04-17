import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import Searchbar from './Searchbar/Searchbar';
import Navbardown from './Navbardown/Navbardown';
import Carousel from "./Carousel";
import Cards from "./Card/Cards";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {listitems} from './Card/listitems';
import Modal from "./Modal/Modal";
import Carouselparent from "./Carouselparent";



class App extends Component {
  state ={
    listitems:listitems,
    totalprice: 0,
    searchlistitems: '',
   idlist :[],
   numberitems:0,
   showmodal:false
    }
handleInput = (e) =>{
  this.setState({searchlistitems:e.target.value});
  this.setState({targetvalue:1})

 };
 ShowModal = () =>{  
  this.setState({showmodal:true})
  } 
  CloseModal = () =>{  
  this.setState({showmodal:false})
  } 

addbutton = (i) =>{  
  if (this.state.idlist.length >= 9){
    alert('Maximum 10 items!');
    return;
  }                               // va limita la 10 numarul de items per transaction
  
  const priceadd = listitems[i].price;
  const oldprice = this.state.totalprice;
  const newprice = priceadd + oldprice;
  this.setState({totalprice: newprice })    //va aduna la totalprice care initial e 0 pretul item
  
  let idnumber = parseInt(listitems[i].id)  // transform id to an number
  let id = this.state.idlist.concat(idnumber) // add number in the array from state
  this.setState({idlist: id })         // update state idlist array with new item reprezenting the id num
  
  const countnumber = this.state.numberitems;
  const newcountitems= countnumber+1;
  this.setState({numberitems: newcountitems })
}

removebutton  = (i) =>{  
if (this.state.idlist.includes(listitems[i].id) === true) {   // setam un if statement sa vedem daca idul 
                                                              //btt cardului se include in array cu idlist
  let splicearray = this.state.idlist.indexOf(listitems[i].id); // aflam numarul de ordine in array 
  const newidlist = this.state.idlist 
  const updated = newidlist.splice(splicearray,1) // splice (first parameter is the listnumber in the array, 
                                                   // second how many to remove) 
  this.setState({idlist: newidlist})              // update state with new idlist array
  
  const priceremove = listitems[i].price;     // setam price pentru cardul ales
  const oldprice = this.state.totalprice;       
  const newprice = oldprice - priceremove; 
  this.setState({totalprice: newprice });    // update state with new tottalprice

  const countnumber = this.state.numberitems;
  const newcountitems= countnumber-1;
  this.setState({numberitems: newcountitems })
}else{
  alert('No more items!')
}
}




render() {
    const filteredlist = this.state.listitems.filter((user) =>{
    return user.name.toLowerCase().includes(this.state.searchlistitems.toLowerCase())
  })
return (
<div className="App">
     <div className='Top'>
         <Navbar passShowModal={this.ShowModal}/>
                <div className='modal-container'>
                <Modal passswow={this.state.showmodal} passclose={this.CloseModal} 
                passmodal={this.state.totalprice} passNumberItems={this.state.numberitems}/>
                </div>
            <div className="topbar" >
              <Logo/>
              <Searchbar passPrice={this.state.totalprice}  dofunction={this.handleInput} />
            </div>
          
      </div>
 <div className='carouselcontainer1'>
                <div className='carouselcontainer'>
                <Carouselparent/> 

                

              </div>
          </div>
  
  <Cards filteredlist={filteredlist} funtionadd={this.addbutton} funtionremove={this.removebutton} />


    </div>
        
  );
}
}


export default App;

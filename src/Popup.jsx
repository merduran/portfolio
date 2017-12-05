import React, { Component } from 'react';
import Popup from 'react-popup';
import './App.css';

/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class MyPopup extends Component {
   render() {
       return (
          <div className='popup'>
            <div className='popup_inner'>
              <div className="top">
                <button onClick={this.props.closePopup} className ="exitButton"></button>
              </div>
              <div className="popup_div" style={{height: "40%"}}>
                <img/>
                <div className="text" style={{margin: "0px", width: "40%", padding: "0px", height: "100%"}}>
                    <li style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "100%"}}>
                        <div>
                            <li className="name"> Name</li>
                            <div className="author">Author</div>
                            <div className="genre">Genre</div>
                            <div className="author">Pages</div>
                            <div className="author" style ={{}}>Description <br/>
                            ajdfbdkasjbfjkadsbfkjlasdbfjbasdjfbasdjfbaskdjbfmasdbfmasdbfm,asdbf,MyPopupsdf
                            asdfasdfasdf
                            </div>
                        </div>
                    </li>
                  </div>
              </div>
              <div className="popup_div" style={{background: "blue"}}>
              </div>
              <div className="popup_div" style={{background: "green"}}>
              <div className="text" style={{margin: "auto", width: "40%", padding: "0px", height: "100%", display: "flex", flexDirection: "column", justifyContent: 'space-between', height: "70%"}}>
                            <div className="price" style={{textAlign: "center"}}>Price</div>
                            <button>Purchase Now</button>
                            <button style={{marginBottom: "10px"}}>Add to Cart</button>
                  </div>
              </div>
            </div>
            </div>
        );
   }
}
export default MyPopup;

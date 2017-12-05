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
                <div className="text" style={{margin: "0px", width: "60%", height: "100%", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px"}}>
                    <li style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "100vh"}}>
                         <div style={{width: "100%", height: "100%", rightPadding: "20px"}}>
                            <li className="name" style={{marginBottom:"5px", padding: "0"}}>{this.props.name}</li>
                            <div className="author" style={{marginBottom:"5px", padding: "0"}}>Author</div>
                            <div className="genre" style={{marginBottom:"5px", padding: "0"}}>Genre</div>
                            <div className="author" style={{marginBottom:"5px", padding: "0"}}>Pages</div>
                        </div>
                    </li>
                  </div>
              </div>
              <div className="popup_div" style={{background: "blue"}}>
                <div className="description">Description <br/>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div className="description">Description <br/>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
              <div className="popup_div" style={{background: "green", height: "20%"}}>
              <div className="text" style={{margin: "auto", width: "40%", padding: "0px", height: "100%", display: "flex", flexDirection: "column", justifyContent: 'space-between', height: "70%"}}>
                            <div className="price" style={{margin: "auto", textAlign: "center", fontSize: "6vm", height: "3vw"}}>Price</div>
                              <button style={{margin: "auto", fontSize: "2vw", width: "15vw", paddingTop: "0", paddingBottom: "0"}}>Purchase Now</button>
                              <button style={{margin: "auto", marginBottom: "10px", fontSize: "2vw", width: "15vw", paddingTop: "0", paddingBottom: "0"}}>Add to Cart</button>
                            </div>
              </div>
            </div>
            </div>
        );
   }
}
export default MyPopup;

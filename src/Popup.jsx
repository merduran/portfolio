import React, { Component } from 'react';
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
              <div className="popup_div" style={{height: "40%", marginBottom:"10px"}}>
                <img src={this.props.image} style = {{boxShadow: "5px 5px 5px #888888", borderRadius:"10px"}}/>
                <div className="text" style={{margin: "0px", width: "60%", height: "100%", paddingLeft: "20px", paddingRight: "20px", paddingTop: "0px"}}>
                    <li style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "100vh"}}>
                         <div style={{width: "100%", height: "100%", rightPadding: "20px"}}>
                            <div className="name" style={{marginBottom:"5px", padding: "0"}}>{this.props.name}</div>
                            <div className="author" style={{marginBottom:"5px", padding: "0"}}>By: {this.props.author}</div>
                            <div className="genre" style={{marginBottom:"5px", padding: "0"}}>Genre: {this.props.genre}</div>
                            <div className="author" style={{marginBottom:"5px", padding: "0"}}>Pages: {this.props.pages}</div>
                        </div>
                    </li>
                  </div>
              </div>
              <div className="popup_div" style={{display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
                <div className="description" style={{margin:"auto", paddingBottom: "20px"}}><p style={{fontSize:"1.5vmax", fontWeight:"bold", marginBottom:"0px"}}>Description</p> 
                  <p className="p2"style={{fontSize: "0.9vmax"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="description" style={{margin:"auto", margin:"auto", paddingTop: "1px", paddingBottom: "10px"}}><p style={{fontSize:"1.5vmax", fontWeight:"bold", marginBottom: "2px"}}>Comments</p>
                  <div className="comments">
                    <p style={{fontSize:"0.9vmax", fontWeight:"bold", marginBottom: "0"}}>New York Times</p>
                    <p className="ptext" style={{fontSize:"0.9vmax", fontStyle:"italic", marginBottom: "0", marginRight: "50%"}}>"Absolutely amazing..."</p>
                  </div>
                  <div className="comments">
                    <p style={{fontSize:"0.9vmax", fontWeight:"bold", marginBottom: "0"}}>The Washington Post</p>
                    <p className="ptext" style={{fontSize:"0.9vmax", fontStyle:"italic", marginBottom: "0", marginRight: "50%"}}>"Enlightening read..."</p>
                  </div>
                  <div className="comments">
                    <p style={{fontSize:"0.9vmax", fontWeight:"bold", marginBottom: "0"}}>Time</p>
                    <p className="ptext" style={{fontSize:"0.9vmax", fontStyle:"italic", marginBottom: "0", marginRight: "50%"}}>"Incredible, changes your outlook on life..."</p>
                  </div>
                </div>
              </div>
              <div className="popup_div" style={{height: "20%"}}>
              <div className="text" style={{margin: "auto", width: "40%", padding: "0px", height: "100%", display: "flex", flexDirection: "column", alignContent: "center", height: "100%"}}>
                            <div className="price" style={{margin: "auto", padding:"0", textAlign: "center"}}>${this.props.price}</div>
                              <button style={{margin: "auto", paddingTop: "0", paddingBottom: "0"}}>Purchase Now</button>
                              <button style={{margin: "auto", marginBottom: "20px", paddingTop: "0", paddingBottom: "0"}}>Add to Cart</button>
                            </div>
              </div>
            </div>
            </div>
        );
   }
}
export default MyPopup;

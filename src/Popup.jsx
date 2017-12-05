import React, { Component } from 'react';
import Popup from 'react-popup';
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
              <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
          </div>
        );
   }
}
export default MyPopup;

import React, { Component } from 'react';
import MyPopup from './Popup';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
    constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

   renderList() {
        const items = this.props.items.map(item => {
          return (
                <div className="Card">
                    <div className="Border">
                    <li className="BookTitle" key={item.name}>{item.name}</li>
                    <div className="BookAuthor" key={item.author}>By {item.author}</div>
                    <img className="Book" onClick={this.togglePopup.bind(this)} src={item.src} />
                    <div className="BookPrice" key={item.price}>${item.price}</div>
                    </div>
                </div>)
          });

       return items;
   }

   render() {
       return (
           <div>
               <ul>
                   {this.renderList()}
               </ul>
               {this.state.showPopup ? <MyPopup closePopup={this.togglePopup.bind(this)}/> : null }
            </div>
       );
   }
}

export default List;

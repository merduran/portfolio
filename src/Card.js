import React, { Component } from 'react';
import MyPopup from './Popup';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class Card extends Component {
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
          return (
                <div className="Card">
                    <div className="Border">
                    <li className="BookTitle" key={this.props.name}>{this.props.name}</li>
                    <div className="BookAuthor" key={this.props.author}>By {this.props.author}</div>
                    <img className="Book" onClick={this.togglePopup.bind(this)} src={this.props.image} />
                    <div className="BookPrice" key={this.props.price}>${this.props.price}</div>
                    </div>
                </div>)
   }

   render() {
       return (
           <div>
               <ul>
                   {this.renderList()}
               </ul>
               {this.state.showPopup ? <MyPopup closePopup={this.togglePopup.bind(this)} image={this.props.image} name={this.props.name} author={this.props.author} price={this.props.price} pages={this.props.pages} genre={this.props.genre}/> : null }
            </div>
       );
   }
}

export default Card;

import React, { Component } from 'react';
import MyPopup from './Popup';
import Card from './Card';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
    constructor() {
    super();

  }


   renderList() {
        const items = this.props.items.map(item => {
          return (
              <Card className="Card" name={item.name} pages={item.page} author={item.author} image ={item.src} price={item.price} genre={item.genre} />
                )
          });
       return items;
   }

   render() {
       return (
           <div>
                   {this.renderList()}
        </div>
       );
   }
}

export default List;

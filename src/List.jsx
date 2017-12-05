import React, { Component } from 'react';
import Popup from 'react-popup';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
   renderList() {
        const items = this.props.items.map(item => {
          return (
              <div className="container">
                <img className="profilepic" src={item.src} />
                  <div className="text">
                    <li className="name" key={item.name}>{item.name}</li>
                    <li style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                        <div>
                            <div className="author" key={item.author}>By {item.author}</div>
                            <div className="genre" key={item.genre}>{item.genre}</div>
                            <div className="author" key={item.page}>{item.page} pages</div>
                        </div>
                        <div>
                            <li className="price" key={item.price}>${item.price}</li>
                            <button>Purchase Now</button>
                        </div>
                    </li>
                  </div>
              </div>)
          });

       return items;
   }

   render() {
       return (
           <ul>
               {this.renderList()}
           </ul>
       );
   }
}

export default List;

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
              <div className="container">
                <img onClick={this.togglePopup.bind(this)} className="profilepic" src={item.src} />
                  <div className="text">
                    <li className="name" key={item.name}>{item.name}</li>
                    <li style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                        <div>
                            <div className="author" key={item.author}>By {item.author}</div>
                            <div className="genre" key={item.genre}>{item.genre}</div>
                            <div className="author" key={item.page}>{item.page} pages</div>
                        </div>
                        <div>
                            <div className="price" key={item.price}>${item.price}</div>
                            <button onClick={this.togglePopup.bind(this)} >Purchase Now</button>
                        </div>
                    </li>
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

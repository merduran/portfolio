import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const produce = [
 {name: "Diary of a Wimpy Kid: Double Down", author: "Jeff Kinney", genre: "Children", price: 8.78, page: 224, src:"diary of a whimpy kid.jpeg", site:"https://www.amazon.com/Diary-Wimpy-Kid-11-Double/dp/1419723448"},
 {name: "Dork Diaries 12: Tales from a Not-So-Secret Crush Catastrophe", author: "Rachel Renée Russell", genre: "Children", price: 10.49, page: 311, src:"Dork Diaries 12- Tales from a Not-So-Secret Crush Catastrophe.jpg", site: "https://www.amazon.com/Dork-Diaries-12-Not-So-Secret-Catastrophe/dp/1534405607/ref=sr_1_1?s=books&ie=UTF8&qid=1512493207&sr=1-1&keywords=Dork+Diaries+12%3A+Tales+from+a+Not-So-Secret+Crush+Catastrophe"},
 {name: "First Comes Love", author: "Emily Giffin", genre: "Love", price: 7.49, page: 224, src:"First Comes Love.jpeg", site: "https://www.amazon.com/First-Comes-Love-Emily-Giffin/dp/0345546946/ref=sr_1_1?s=books&ie=UTF8&qid=1512493297&sr=1-1&keywords=First+Comes+Love"},
 {name: "Lizzy the Lioness", author: "Lisa Bevere", genre: "Children", price: 12.49, page: 32, src:"Lizzy-the-Lioness.jpeg", site: "https://www.amazon.com/Lizzy-Lioness-Lisa-Bevere/dp/0718096584/ref=sr_1_1?s=books&ie=UTF8&qid=1512493314&sr=1-1&keywords=Lizzy+the+Lioness"},
 {name: "Love Me Sweet", author: "Tracy Brogan", genre: "Love", price: 14.99, page: 413, src:"Love Me Sweet.jpeg", site: "https://www.amazon.com/Love-Sweet-Bell-Harbor-Novel/dp/1477819630/ref=sr_1_1?s=books&ie=UTF8&qid=1512493330&sr=1-1&keywords=Love+Me+Sweet"},
 {name: "Origin", author: "Dan Brown", genre: "Mystery", price: 14.99, page: 300, src:"Origin.jpeg", site: "https://www.amazon.com/Origin-Novel-Dan-Brown/dp/0385514239/ref=sr_1_1?s=books&ie=UTF8&qid=1512493353&sr=1-1&keywords=Origin"},
 {name: "Redemption Road", author: "John Hart", genre: "Mystery", price: 10.99, page: 464, src:"Redemption Road.jpeg", site: "https://www.amazon.com/Redemption-Road-Novel-John-Hart/dp/1250132118/ref=sr_1_1?s=books&ie=UTF8&qid=1512493370&sr=1-1&keywords=Redemption+Road"},
 {name: "The 48 Laws of Power", author: "Robert Greene", genre: "Philosophy", price: 10.99, page: 273, src: "The 48 Laws of Power.jpeg", site: "https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197/ref=sr_1_1?s=books&ie=UTF8&qid=1512493399&sr=1-1&keywords=The+48+Laws+of+Power"},
 {name: "The Art of War", author: "Sun Tzu", genre: "Philosophy", price: 2.99, page: 228, src:"The Art of War.jpeg", site: "https://www.amazon.com/Art-War-Sun-Tzu/dp/1599869772/ref=sr_1_1?s=books&ie=UTF8&qid=1512493419&sr=1-1&keywords=The+Art+of+War"},
 {name: "The Book of Five Rings", author: "Miyamoto Musashi", genre: "Philosophy", price: 7.99, page: 189, src:"The Books of Five Rings.jpeg", site: "https://www.amazon.com/Book-Five-Rings-Graphic-Novel/dp/1611800129/ref=sr_1_8?s=books&ie=UTF8&qid=1512493458&sr=1-8&keywords=The+Book+of+Five+Rings"},
 {name: "The Course of Love", author: "Alain de Botton", genre: "Love", price: 11.99, page: 330, src:"The Course of Love.jpeg", site: "https://www.amazon.com/Course-Love-Novel-Alain-Botton/dp/1501134515/ref=sr_1_1?s=books&ie=UTF8&qid=1512493487&sr=1-1&keywords=The+Course+of+Love"},
 {name: "The Pecan Man", author: "Cassie Dandridge Selleck", genre: "Mystery", price: 9.99, page: 144, src:"The Pecan Man.jpeg", site: "https://www.amazon.com/Pecan-Man-Cassie-Dandridge-Selleck/dp/0615590586/ref=sr_1_1?s=books&ie=UTF8&qid=1512493521&sr=1-1&keywords=The+Pecan+Man"},
];

class App extends Component {
   render() {
       return (
           <div className="App">
                {/*
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */}
               <FilteredList items={produce} />
           </div>
       );
   }
}

export default App;

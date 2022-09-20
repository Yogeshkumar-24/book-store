import Books from "./components/Books";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import {useState} from 'react'

  const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const url = 'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAx1erj1OjXeJyRSB7-lRlRg1uMwpbrQC4'+ '&maxResults=40';
  const [selectedBook, setSelectedBook] = useState('');
  const getBooks = () => {
    axios.get(url)
      .then((res) => {
        setBooks(res.data.items);
      })
  }
 

  const enterSearch = (evt) => {
    if(evt.key === 'Enter'){
      getBooks();
    }
  }
  return (
    <div className="book-app container-fluid">
      <div className="container-fluid mt-3 align-items-center row"  >
        <div className=" col heading ">
          <h2>Book Store</h2>
        </div>
        <div className="col search-box ">
          <input className="form-control "
           type="text" 
           onChange={(e) => setSearch(e.target.value)}
           onKeyPress={enterSearch}
           placeholder="Search for a book" />
          </div>
         <div className="col">
         <button  className="btn btn-primary" 
         onClick={getBooks}
         >Search</button>
         </div>
      </div>

      <div className=" row book-slide ">
        {books.map((book) => {
         if(book.volumeInfo.imageLinks){
          return(
            <div className='book-container'>
              <img 
              src={book.volumeInfo.imageLinks.thumbnail}
              onClick={() => setSelectedBook(book)}
              ></img>
            </div>
          )
         }
        })}
      </div>
      <> 
      {selectedBook ? <Books selectedBook={selectedBook}/> : null}
      </>
    </div>
  )
}
  
export default App
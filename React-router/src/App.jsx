import React from 'react';
import Home from './pages/home';
import Book from './pages/book';
import Booklist from './pages/booklist';
import NewBook from './pages/newBook';
import NotFound from './pages/newFound';
import BookLayout from './pages/BookLayout';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* Move BrowserRouter to wrap the whole app */}
      <>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/books" element={<Book />} />
          <Route path="/books/:id" element={<Booklist />} />
          <Route path="/books/new" element={<NewBook />} /> */}
          <Route path="*" element={<NotFound />} />
            
            
            {/* Nested Routes */}

          <Route path='/books' element={<BookLayout/>}>
            <Route index element={<Book/>}/>
            <Route path="/books/:id" element={<Booklist />} />
            <Route path="/books/new" element={<NewBook />} />
          </Route>

        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

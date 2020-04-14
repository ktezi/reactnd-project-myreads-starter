import React from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  showAll = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({
        books: books
      })
      console.log('state', this.state.books)
    })
  }
  componentDidMount() {
    console.log('inside did mount')
    this.showAll()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({ History }) => <BookList books={this.state.books} showAll={() => this.showAll()} />} history={History} />
        <Route path='/search' render={() => <Search />} />

      </div>
    )
  }
}

export default App

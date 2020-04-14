import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

export class Search extends Component {
    state = {
        query: '',
        books: [],
        shelvedBooks: []
    }
    showAll = () => {
        BooksAPI.getAll().then((shelvedBooks) => {
            this.setState({ shelvedBooks })
        })
    }
    updatedQuery = (query) => {
        if (query) {
            this.setState({ query: query })
            console.log(query)
            BooksAPI.search(query).then(result => {
                if (!result || result.error) {

                }
                else {
                    result.map((book) => {
                        book.shelf = 'none'
                        this.state.shelvedBooks.map((shelvedBook) => {
                            if (shelvedBook.id === book.id) {
                                book.shelf = shelvedBook.shelf
                            }
                        })
                    })
                    this.setState({ books: result })
                }
                console.log(this.state.books)
            })
        }
        else {
            this.setState({
                query: '',
                books: []
            })
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" >Close</button>
                    <div className="search-books-input-wrapper" >
                        <input type="text" value={this.state.query} onChange={(e) => (this.updatedQuery(e.target.value))} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(aa => (
                            <Book key={aa.id} showAll={this.props.showAll} thisBook={aa} bookShelf={aa.shelf} />

                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

export class BookList extends Component {

    render() {

        console.log('original', this.props.books)
        const { books } = this.props;
        console.log(books)
        const valueArr = [
            {
                name: 'Currently Reading',
                value: (books.length && books.filter(book => book.shelf === 'currentlyReading')) || []
            },
            {
                name: 'Want to Read',
                value: (books.length && books.filter(book => book.shelf === 'wantToRead')) || []
            },
            {
                name: 'Read',
                value: (books.length && books.filter(book => book.shelf === 'read')) || []
            },
        ]
        console.log(valueArr)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {valueArr.length && valueArr.map((a) =>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{a.name}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {a.value.map(aa => (
                                            <Book key={aa.id} showAll={this.props.showAll} thisBook={aa} bookShelf={aa.shelf} />

                                        ))
                                        }
                                    </ol>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="open-search">
                        <Link to='/search'><button>Add a book</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default BookList

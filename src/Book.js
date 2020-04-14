import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

export class Book extends Component {

    changeShelf = (thisBook, e) => {
        BooksAPI.update(thisBook, e).then(this.props.showAll)
    }

    render() {
        const { thisBook, bookShelf } = this.props;
        console.log('ads', this.props)
        if (thisBook.imageLinks) {
            return (
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${thisBook.imageLinks.thumbnail})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >

                            </div>
                            <div className="book-shelf-changer">
                                <select onChange={(e) => { this.changeShelf(thisBook, e.target.value) }}
                                    value={bookShelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{thisBook.title}</div>
                        <div className="book-authors">{thisBook.authors ? thisBook.authors.toString() : 'Nothing!'}</div>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(https://ibf.org/site_assets/img/placeholder-book-cover-default.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >

                            </div>
                            <div className="book-shelf-changer">
                                <select onChange={(e) => { this.changeShelf(thisBook, e.target.value) }}
                                    value={thisBook.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{thisBook.title}</div>
                        <div className="book-authors">{thisBook.authors ? thisBook.authors.toString() : 'Nothing!'}</div>
                    </div>
                </li>
            )
        }
    }
}

export default Book

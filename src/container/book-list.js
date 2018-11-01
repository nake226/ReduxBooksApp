import React, { Component } from 'react';

export default class BookList extends Component {
  // 受け取った書籍リストをレンダリング
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  // <ul>の中にレンダリングする
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}
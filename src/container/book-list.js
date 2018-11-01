import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * コンテナ：reduxが管理するstateに直接アクセスできるcomponentのこと
 * コンテナの基準：data（state）をcareするcomponentかどうか
 * → booklistは書籍リストという状態に関与するのでコンテナ。
 */
class BookList extends Component {
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

/**
 * @param {*} state 
 * stateの受け渡し
 * keyの'books': BookListのprops.booksと同じ
 * valueの'books': reducers/index.jsのrootReducerで定義されているbooks
 */
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// view(BookListクラス)とdata（state受け渡し）のコネクト
export default connect(mapStateToProps)(BookList);
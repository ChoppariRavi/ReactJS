import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  constructor(props) {
    super(props);
  }

  selectedBookItem(){
    if(!this.props.selectedBook){
      return (
        <div>Select a book to view details...</div>
      );
    }
    return (
      <div>
        <p><strong>Book Name: </strong>{ this.props.selectedBook.title }</p>
        <p><strong>Pages:</strong>{ this.props.selectedBook.pages }</p>
      </div>
    );
  }

  render(){
    return(
      <div className = "col-md-8">
        { this.selectedBookItem() }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    selectedBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetails);

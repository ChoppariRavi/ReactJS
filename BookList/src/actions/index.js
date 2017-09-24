export function selectBook(book){
  //console.log("Selected Book Title:", book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

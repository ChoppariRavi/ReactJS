import { combineReducers } from 'redux';
import BookReducers from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootResducers = combineReducers({
  books: BookReducers,
  activeBook: ActiveBook
});

export default rootResducers;

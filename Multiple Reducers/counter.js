//var state = { count: 0 };
var store = Redux.createStore(Redux.combineReducers({counterReducer: counterReducer, todosReducer: todosReducer}));
var counterElement = document.getElementById('counter');
var addElement = document.getElementById('add');
var minusElement = document.getElementById('minus');
var resetElement = document.getElementById('reset');
var addTodoElement = document.getElementById('new');
var deleteTodoElement = document.getElementById('delete');
var deleteAllTodoElement = document.getElementById('delete_all');
var todosInput = document.getElementById('todos');
var todosList = document.getElementById('todosList');

render();
store.subscribe(render);
// Counter REDUCER
function counterReducer(state, action){
  if(typeof state === 'undefined'){
    return {count: 0};
  }
  var newState = {
    count: state.count
  }
  switch (action.type) {
    case 'ADD':
      newState.count = state.count + 1;
      return newState;
      break;
    case 'MINUS':
      newState.count = state.count - 1;
      return newState;
      break;
    case 'RESET':
      newState.count = 0;
      return newState;
      break;
    default:
      return state;
  }
}

function todosReducer(state, action){
  if(typeof state === 'undefined'){
    return { todos:[] };
  }
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "ADD_TODO":
      newState.todos.push(action.payload)
      return newState;
      break;
    case "DELETE_TODO":
      newState.todos.pop();
      return newState;
      break;
    case "DELETE_ALL_TODO":
    	newState.todos = []
      return newState;
      break;
    default:
      return newState;
  }

}

console.log(store);
function render(){
  var state = store.getState();
  counterElement.innerHTML = state.counterReducer.count.toString();
  renderTodoList(state);
}

function renderTodoList(state) {
  var todoItemList = state.todosReducer.todos;
  todosList.innerHTML = '';
	for (var i = 0; i < todoItemList.length; i++) {
  		var li = document.createElement('li');
  		var todo = todoItemList[i];
  		li.innerHTML = todo.toString()
  		todosList.appendChild(li);
  }
}

//Action
addElement.addEventListener('click', function(){
  store.dispatch({type: 'ADD'});
});
minusElement.addEventListener('click', function(){
  store.dispatch({type: 'MINUS'});
});
resetElement.addEventListener('click', function(){
  store.dispatch({type: 'RESET'});
});
addTodoElement.addEventListener('click', function(){
  store.dispatch({type: 'ADD_TODO', payload: todosInput.value });
});
deleteTodoElement.addEventListener('click', function(){
  store.dispatch({type: 'DELETE_TODO'});
});
deleteAllTodoElement.addEventListener('click', function(){
  store.dispatch({type: 'DELETE_ALL_TODO'});
});

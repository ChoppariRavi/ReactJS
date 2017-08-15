var state = { count: 0 };
var store = Redux.createStore(counter, state);
var counterElement = document.getElementById('counter');
var addElement = document.getElementById('add');
var minusElement = document.getElementById('minus');
var resetElement = document.getElementById('reset');

store.subscribe(render);
// REDUCER
function counter(currentState, action){
  var newState = {
    count: currentState.count
  }
  switch (action.type) {
    case 'ADD':
      newState.count = currentState.count + 1;
      return newState;
      break;
    case 'MINUS':
      newState.count = currentState.count - 1;
      return newState;
      break;
    case 'RESET':
      newState.count = 0;
      return newState;
      break;
    default:
      return currentState;
  }
}

console.log(store);
function render(){
  var state = store.getState();
  counterElement.innerHTML = state.count.toString();
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

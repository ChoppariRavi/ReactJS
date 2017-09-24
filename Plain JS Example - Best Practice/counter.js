//var state = { count: 0 };
var store = Redux.createStore(counter);
var counterElement = document.getElementById('counter');
var addElement = document.getElementById('add');
var minusElement = document.getElementById('minus');
var resetElement = document.getElementById('reset');

render();
store.subscribe(render);
// REDUCER
function counter(state, action){
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

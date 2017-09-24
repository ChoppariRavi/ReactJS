import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term : ''
    };
  }
  onVideoHandler(e){
    e.preventDefault();
    //console.log(this.state.term);
    this.props.onVideoSearch(this.state.term);
    //debugger;
  }
  render(){
    return (
      <form className = "searchInput">
         <div className="input-group">
           <input type="text" className="form-control" placeholder="Search" onChange = {e => this.setState({term: e.target.value})}/>
           <div className="input-group-btn">
             <button className="btn btn-default" onClick = {e => this.onVideoHandler(e)}>
               <i className="glyphicon glyphicon-search"></i>
             </button>
           </div>
         </div>
        </form>
    );
  }
}

export default SearchBar;

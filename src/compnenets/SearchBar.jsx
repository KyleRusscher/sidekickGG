import React from "react";



export default class Searchbar extends React.Component {
  
  value(e){
    this.props.handleSearch(e.target.value)
  }
  render() {
    
    return (
      
      <span>
      <div>
        <input autofocus="autoFocus" onClick={() => this.props.active()}className="searchBar" type="text" value={this.props.searchString} onChange={this.value.bind(this)}  placeholder="Champion Name" />
      </div>

     
      </span>
    );
  }
}

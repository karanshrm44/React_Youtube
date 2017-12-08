import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            term: ''
        }
        //this.onInputChanges=this.onInputChanges.bind(this);
        
    }
    render(){
        return(
        <div className="search-bar">
            <button className="ybutton">FAST YOUTUBE</button>
             <input value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
                placeholder="Search"
              />
        </div>
        );
    }
        onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
        }

       
      
      //  onInputChanges(){
       //   console.log(this.state.term);
          //this.props.onSearchTermChange(this.state.term);
     // }
   
}
export default SearchBar;
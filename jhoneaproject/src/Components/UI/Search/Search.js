import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "../../../store/actions/globalSearch";
import "./Search.css";
class search extends Component {
  state = {
    searched:"",
    input:null,
    dropdown: false,
    cursor: 0,
  };

  componentDidMount() {
    this.props.onGetglobalSearch();
  }
 
  searching = (e) => {
    let keyword = e.target.value;
    keyword
      ? this.setState({
          searched: keyword,
          dropdown: true,
        })
      : this.setState({
          searched: null,
          dropdown: false,
        });
  };
  searchbarNull=()=>
  {
  this.setState({
    searched:"",
    dropdown:false
  })
  }
  render() {
    let searcheditem = <div>LOADING.....</div>;
    if (!this.props.searchloading) {
      searcheditem = this.props.globalSearch
        .filter((data) => {
          if (this.state.searched === null) return null;
          else if (
            data.Name.toLowerCase().includes(this.state.searched.toLowerCase())
          )
            return data;
        })
        .map((data, i) => {
          return (
            <React.Fragment key={data.Name}>
              {this.state.dropdown && (
                <div key={data.Name} tabIndex="-1">
                  <NavLink
                    to={{
                      pathname: `/product-detail/${data.ID}`,
                      
                    }} 
                    onClick={this.searchbarNull}
                  >
                    {data.Name}
                  </NavLink>
                </div>
              )}
            </React.Fragment>
          );
        });
    }

    return (
      <React.Fragment>
        <div className="Search">
          <input
            type="text"
            value={this.state.searched}
            placeholder="Search product..."
            onChange={(e) => this.searching(e)}
            onClick={this.searchbarNull}
          />

          <div className="icon">
            <a href="/search">
              <i className="fas fa-search"></i>
            </a>
          </div>
          {this.state.dropdown ? (
            <div className="search-box co">{searcheditem}</div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    globalSearch: state.search.searched,
    searchloading: state.search.searchloading,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetglobalSearch: () => dispatch(actionCreator.getsearchdetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(search);

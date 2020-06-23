import React from "react";
import * as action from "../actions/allPlaces";
import * as oneAction from "../actions/onePlace"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AllPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount = () => {
    this.props.places.allPlaces();
  }

  onClick=(e)=>{
   var id = e.id
   this.props.onePlace.onePlace(id) 
    this.props.history.push({
      pathname: '/place/'+id
    });
    
  }

  render() {
   
    var data = this.props.all ? this.props.all.places : ""

    return (
      <div className="container">
      <h2> All Places</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Location</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          
              {data ? data.map((item,index) => {
                return (
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.location}</td>
                      <td>{item.name}</td>
                      <td>
                        <button className="btn btn-primary"
                          onClick={()=>this.onClick(item)}
                        >view place</button>
                      </td>
                  </tr>
                  )
              }) : ""}
            

          </tbody>
        </table>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  all: state.allPlacesReducers
});

const mapDispathToProps = dispatch => ({
  places: bindActionCreators(action, dispatch),
  onePlace: bindActionCreators(oneAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(AllPlaces);

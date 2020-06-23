import React from 'react';
import * as action from '../actions/onePlace'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class Displayplace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    }

    onClick =()=>{
        this.props.history.push("/")
    }
    render() {
        var data = this.props.place.place[0];


        return (
            <div>
                <br/>
                <div>
                     <button  className=" ml-3 btn btn-primary" onClick={this.onClick}>All Places</button>
                </div>
            <div className="container">
                <img src={data ? data.cover:""} alt="" />
                <hr/>
                <div>
                    <span>Name:</span>
                    <h3>{data ? data.name:""}</h3>
                </div>
                <hr/>
                <div>
                    <span>Location:</span>
                    <h3>{data ? data.location:""}</h3>
                </div>
                <hr/>
                <div>
                    <span>Description:</span>
                    <p>{data ? data.official_description:""}</p>
                </div>

            </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    place: state.onePlaceReducers
  });
  
  export default connect(
    mapStateToProps
  )(Displayplace);

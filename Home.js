import React, { Component } from "react";
import "../styles/home.css";
import Quicksearch from "./Quicksearch";
import Wallpaper from "./Wallpaper";
import axios from "axios";
const API_URL= require('./Constants').API_URL;
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      mealtypes: [],
    };
  }
  componentDidMount() {
    // to get all location http://localhost:5454/getalllocations
    // axios
    //   .get(`${API_URL}/getalllocations`)
    axios({
      method: 'GET',
      url: 'http://localhost:5454/getalllocations',
    })
      .then((res) => {
        this.setState({

          locations: res.data.locations,
        });
        console.log(res)
      })
      .catch((err) => {
        console.log("error");
      });
  
    

  //  to get all the meal type  http://localhost:5454/getallmealtypes
    
    axios({
      method: 'GET',
      url: 'http://localhost:5454/getallmealtypes',
    })
      .then((res) => {
        console.log(res.data.mealtype)
        this.setState({

          mealtypes: res.data.mealtype,
          
        });
      })
      .catch((err) => {
        console.log("error");
      });
   }

  render() {
    const{locations , mealtypes}= this.state;
    return (

      <React.Fragment>
        <Wallpaper loc={locations}/>
        <Quicksearch mealtypes={mealtypes}/>
      </React.Fragment>
    );
  }
}

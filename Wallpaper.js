import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
const API_URL = require('./Constants').API_URL;


 class Wallpaper extends Component {
     constructor(){
         super();
         this.state={
             restaurants:[],
             text:'',
             suggestions:[],
             locations:[]

         }
     }
    getRestaurantForLocation=(event)=>{
         const locationId= event.target.value;

         const temp = this.props.loc;

        let selectedlocation =temp && temp.find(item => item.location_id == parseInt(locationId));

         const city_id= selectedlocation && selectedlocation.city_id;
         const city_name= selectedlocation && selectedlocation.city;

         localStorage.setItem('city_id',city_id);
// fetch the restaurants for this location 
Axios({
    method: 'GET',
    url: `http://localhost:5454/getallrestaurantsbylocation/${city_name}`,
  })
    .then((res) => {
      this.setState({

        restaurants: res.data.restaurants,
      });
      console.log(res.data.restaurants, city_name)
    })
    .catch((err) => {
      console.log(err);
    });
}

onSearchTextchange=(event )=>{

    const searchText= event.target.value;
    const {restaurants}= this.state;
    let suggestions=[];
    if(searchText.length>0){
        suggestions= restaurants.filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase()))
    }
    this.setState({
        text: searchText,
        suggestions: suggestions || []
    });
}
onSearchTextChange = (event) => {
    const searchText = event.target.value;
    const { restaurants } = this.state;
    let suggestions = [];
    if (searchText.length > 0) {
        suggestions = restaurants.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    this.setState({
        text: searchText,
        suggestions: suggestions || []
    });
}

renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length == 0) {
        return null;
    }
    return (
        <ul className="suggestionsBox"> 
            {
                suggestions.map((item, index) => {
                    return (
                        <li key={index} className="suggestionItem" onClick={() => this.navigateToRestaurant(item)}>
                            <div className="suggestionImage">
                                {/* <img src={require('../' + item.image).default} alt="not found" /> */}
                                <img className="qs-image" src={require('../'+item.image).default} alt="breakfast" />
                            </div>
                            <div className="suggestionText">
                                <div className="suggestionTextName">
                                    { item.name }
                                </div>
                                <div className="suggestionTextLocality">
                                    { item.locality }
                                </div>
                            </div>
                            <div className="orderButton text-danger">
                                Order Now 
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
navigateToRestaurant = (rest) => {
    this.props.history.push(`/details?id=${rest._id}`);
}


    render() {
        const { loc } = this.props;
        console.log(loc)
        return (
            <React.Fragment>
                <div className="topSection">
                    <img src={require("../assets/wall.png").default} alt="Image not found" className="heroImage" />
                    <div className="branding">
                        <div className="logo">e<span className="logo-internal">!</span></div>
                        <div className="tagline">Find the best restaurants, cafe's and bars</div>
                    </div>
                    <div className="search-options">
                        <select className="location-selection" onChange={this.getRestaurantForLocation} >
                            <option valu="">-- Select City --</option>
                            {
                                loc.map((item, index) => {
                                    return <option key={index} value={item.location_id}>{item.name}, {item.city}</option>
                                })
                            }
                        </select>
                        <div className="searchSection">
                            <input className="search-box" type="text" placeholder="Search for restaurants..." onChange={this.onSearchTextchange}  />
                            {this.renderSuggestions()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Wallpaper);

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/details.css";
import Axios from "axios";
import queryString from "query-string";
// import restaurant from "../../../apicreation/model/restaurant";

const API_URL = require("./Constants").API_URL;


export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            restaurant: null,
        };
    }
    componentDidMount() {
        // capture the restauramt id from the query params from the url
        const qs = queryString.parse(this.parse.location.search);
        const { id } = qs;

        // make api calls to get the restaurants details from the api
        Axios({
                method: "GET",
                url: `http://localhost:5454/getallrestaurantsbyid/${id}`,
            })
            .then((res) => {
                this.setState({
                    restaurant: res.data.restaurant,
                });
                console.log(res.data.restaurant, id)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { restaurant } = this.state;
        return ( <
            div className = "container details" >
            restaurant ?
            <
            >
            <
            div className = "images" >
            <
            Carousel showThumbs = { false } > {
                restaurant && restaurant.thumb.map((item, index) => {
                    return ( <
                        div >
                        <
                        img src = { require("../" + item).default }
                        alt = "not found" / >
                        <
                        /div>
                    );
                })
            } <
            /Carousel> <
            /div>

            <
            div className = "myTabs mb-5" >
            <
            Tabs >
            <
            TabList >
            <
            Tab > Overview < /Tab> <
            Tab > Contact < /Tab> <
            /TabList> <
            TabPanel >
            <
            div className = "about my-5" > About this place < /div> <
            div className = "cuisine" > Cuisine < /div> <
            div className = "cuisines" > {
                restaurant && restaurant.cuisine.map((item, index) => {
                    return <span key = { index } > { item.name }, < /span>;
                })
            } <
            /div> <
            div className = "cuisine mt-3" > Average Cost < /div> <
            div className = "cuisines" > { " " } &
            #8377; {restaurant.min_price} for two people (approx.)

                </div>

              </TabPanel>

              <TabPanel>

                <div className= "cuisine my-5" >
            Phone Number <
            div className = "text-danger" > { restaurant.contact_number } < /div> <
            /div> <
            div className = "cuisine mt-4" > { restaurant.name } < /div> <
            div className = "text-muted mt-2" > { restaurant.locality }, <
            br / > { restaurant.city } <
            /div> <
            /TabPanel> <
            /Tabs> <
            /div> <
            /> :
            < div > Loading.... < /div> <
            /div>
        );
    }
}
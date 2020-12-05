import React, { Component } from 'react'
import axios from 'axios'

export default class API extends Component {
    constructor(props) {
        super(props)
        // const { a, b, c, d } = this.props.data
        console.log(this.props.data.answer)


        // if (this.props.data.length > 0) {
        //   console.log(this.props.data.tip)
        // }


        this.state = {

            error: null,
            isLoaded: false,
            businesses: []
        }

        this.clientId = 'TBusLwrf5LPjdzZH9jwBCg'
        this.APIKey = 'ky93XHov2nc8zH-BZxvnQVl1HIg0y7IygGD8occhahUuawUka_an028nlFfk35xpeMyzUVWIOiP86VjUWD7mm3Sr8Dma9utdmO1g4FWyk57RQdJPawO6MUV524PIX3Yx'
    }


    componentDidMount() {
        const params = new URLSearchParams({
            // error: null,
            // term: "coffee",
            location: "chicago",
          });

        console.log(params.toString());

        // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"+params.toString(), {

          fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?"+params.toString(), {

            // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events/london-yelps-burst-birthday-event-full", {

        // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw", {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'application/json',         
                'Authorization': ' Bearer ky93XHov2nc8zH-BZxvnQVl1HIg0y7IygGD8occhahUuawUka_an028nlFfk35xpeMyzUVWIOiP86VjUWD7mm3Sr8Dma9utdmO1g4FWyk57RQdJPawO6MUV524PIX3Yx'
            })
        }
        ).then(res=>res.json()).then(
            (result) => {
                
                console.log(result)
                this.setState({
                    isLoaded: true,
                    businesses: result.events
                })
            }
        )
    }

    api(term, location) {
      const params = new URLSearchParams({
        error: null,
        term: term,
        location: location,
      });

    // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"+params.toString(), {

      fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events/featured", {

    // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw", {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json',         
            'Authorization': ' Bearer ky93XHov2nc8zH-BZxvnQVl1HIg0y7IygGD8occhahUuawUka_an028nlFfk35xpeMyzUVWIOiP86VjUWD7mm3Sr8Dma9utdmO1g4FWyk57RQdJPawO6MUV524PIX3Yx'
        })
    }
    ).then(res=>res.json()).then(
        (result) => {
            
            console.log(result.businesses)
            this.setState({
                isLoaded: true,
                businesses: result.businesses
            })
        }
    )
    }

    render() {
        const { error, isLoaded, businesses } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div>
                  <h1>Yelp Data {this.props.data.tip}</h1>
            <ul>
              {businesses.map(item => (
                <li key={item.id}>
                  {item.name} {item.price} 
                  <img src={item.image_url} width="10%" alt="space_pic" />
                </li>
              ))}
            </ul>
            </div>
          );
        }
      }
}
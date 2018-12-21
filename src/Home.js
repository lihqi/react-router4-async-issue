import React, { Component } from "react";

export default class Home extends Component {
    componentDidMount(){
        console.log('Home componentDidMount')
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

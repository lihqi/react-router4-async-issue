import React, { Component } from "react";

export default class About extends Component {
    componentDidMount(){
        console.log('About synchronous component : componentDidMount')
    }
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

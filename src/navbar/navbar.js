import React from "react";
 export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state={

            name:"sohila",
            title:"FullStack "
        }
    }
    // componentDidMount(){

    // }
    // componentDidUpdate(){

    // }
    // componentWillUnmount(){

    // }
    render(){
        return(
            <>
        <h1>
            My Name is {this.state.name}
        </h1>
        <h3>I am a {this.state.title}</h3>
            </>
        );
    }
}

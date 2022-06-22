import React from "react";
import nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


 export default class Contact extends React.Component{
    constructor(){
        super();
        
    }
    
    render(){
        return(
            <>
        <div classNameName="container-fluid header" >
        <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
            <div className="container">
              <button className="navbar-toggler"style="color:white;background-color:white;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="homeIndxt.html" style="color: white;">Sohila</a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link  active"aria-current="page" href="homeIndxt.html">MyResme</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  active"  aria-current="page" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  active"  aria-current="page" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  active"  aria-current="page" href="#">About me</a>
                  </li>
                 
                </ul>
               
              </div>
            </div>
          </nav>
          <div className="row">
            <div className="col">
              <div className="discrpt"  >
                <h1>More Than Just A Haircut</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in</p>
                <p>tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                <button className="bt">LEAR MORE</button>
              </div>
              
            </div>
          </div>
        </div>
            </>
        );
    }
}

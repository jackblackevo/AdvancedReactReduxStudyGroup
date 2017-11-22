import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router";
import {authenticate} from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);


    this.authButton = this.authButton.bind(this);
    this.changeAuth = this.changeAuth.bind(this);

  }


 changeAuth(){

  const isLoggedIn = this.props.isLoggedIn ? false : true;

  this.props.authenticate(isLoggedIn);
 }

  authButton(){
    if(this.props.isLoggedIn){

     return <button onClick={this.changeAuth}> sign out </button>;

  }

      return <button onClick={this.changeAuth}> sign in </button>;

  }


   render(){

        return (

<nav className="navbar navbar-light">

     <ul className="nav navbar-nav">

         <li className="nav-item">
             <Link to="/">HOME</Link>
         </li>

         <li className="nav-item">
             <Link to="/resource">RESOURCE</Link>
         </li>

         <li className="nav-item">
            {this.authButton()}
         </li>

     </ul>
</nav>

        )

   }

}


function mapStateToProps(state){

    return  {isLoggedIn: state.isSignIn}

}


function mapDispatchToProps(dispatch){

   return bindActionCreators({authenticate:authenticate},dispatch);

}

export default  connect(mapStateToProps,mapDispatchToProps)(Header);

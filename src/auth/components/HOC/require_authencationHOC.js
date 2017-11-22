import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){

    class Authencation extends Component{


     componentWillMount(){

      console.log(this.props);
        if(!this.props.isLoggedIn){

           this.props.history.push('/');

        }

     }


     componentWillReceiveProps(nexrProps){


              if(!nexrProps.isLoggedIn){

                 this.props.history.push('/');

              }

           }

      render(){


          return <ComposedComponent {...this.props} />;



      }


    }

function mapStateToProps(state){

   return {isLoggedIn:state.isSignIn}

}

return  connect(mapStateToProps, null)(Authencation);

}

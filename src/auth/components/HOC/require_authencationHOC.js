import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){

    class Authencation extends Component{


    static contextTypes ={
      router:React.PropTypes.object
    }

     componentWillMount(){

      console.log('props', this.props);
      console.log('context', this.context);
        if(!this.props.isLoggedIn){

          this.context.router.push('/');

        }

     }


     componentWillReceiveProps(nexrProps){


              if(!nexrProps.isLoggedIn){

                this.context.router.push('/');

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

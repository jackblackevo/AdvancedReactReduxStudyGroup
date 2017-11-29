import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){

    class Authencation extends Component{

      static contextTypes ={
        router:React.PropTypes.object
      }


      render(){
          //console.log(this.props.isLoggedIn);
          console.log(this.context);
          return <ComposedComponent {...this.props} />;
      }
    }

function mapStateToProps(state){

   return {isLoggedIn:state.isSignIn}

}

return  connect(mapStateToProps, null)(Authencation);

}

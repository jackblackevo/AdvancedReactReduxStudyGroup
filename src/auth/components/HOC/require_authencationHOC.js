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
        
             //componentWillUpdate(nextProps){
             componentWillReceiveProps(nexrProps){
                      if(!nexrProps.isLoggedIn){
                        this.context.router.push('/');
                      }
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

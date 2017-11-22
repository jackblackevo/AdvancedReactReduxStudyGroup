import React, {Component} from 'react';


export default function(ComposedComponent){

    class Authencation extends Component{

      render(){

          return <ComposedComponent {...this.props} />;

      }


    }

return Authencation;

}

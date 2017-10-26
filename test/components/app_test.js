import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';


describe('APP test',()=>{

   it('has the words',()=>{
       const component = renderComponent(App);
    expect(component).to.contain('React simple starter');
   });


});


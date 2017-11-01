import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the correct test', () => {
    //expect(component).to.exist;
    expect(component).to.contain('React simple starter');
  });
});

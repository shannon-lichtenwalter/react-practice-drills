import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';
import tabsProp from './tabsProp';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Tabs component', () => {
  it('renders without errors' , () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it ('renders the first tab by default', () => {
    const wrapper = shallow(<Tab tabs={tabsProp}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tab />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked' , () => {
    const wrapper= shallow(<Tab tabs={tabsProp}/>)
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot()
  }
 )

})



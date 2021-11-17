import { shallow, render, mount } from 'enzyme';
import App from './App';

const tagHelper = (tag) => {
  return `[data-test='${tag}']`;
}

const setup = (props = {}, state = null) => {
  return shallow(<App {...props}/>);
}

const findComponentByAttr = () => {}

const wrapper = shallow(<App />)

describe('App component', () => {
  test('shoud render app component truthy', () => {
    expect(wrapper).toBeTruthy();
  });
  
  test('shoud render app component', () => {
    const appComponent = wrapper.find(tagHelper('app')).length;
    expect(appComponent).toBe(1);
  });
  
  test('should render increment button', () => {
    const incBtn = wrapper.find(tagHelper('increment')).length;
    expect(incBtn).toBe(1);
  });
  
  test('should render decrement button', () => {
    const decBtn = wrapper.find(tagHelper('decrement')).length;
    expect(decBtn).toBe(1);
  });
  
  
})
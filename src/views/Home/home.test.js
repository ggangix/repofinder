import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDom from "react-router-dom";
import Home from '../Home/index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


describe('Home', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
  
  it('Should be able to introuce username and click submit', () => {
    jest.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(jest.fn(() => jest.fn));
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    const username = div.querySelector('input');
    username.value = 'ggangix';
    const button = div.querySelector('button');
    button.click();
  });

});



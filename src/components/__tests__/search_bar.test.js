import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from "../search_bar";

test('Render SearchBar with input', () => {  
  const mockVideoSearch = jest.fn()
  const searchBar = shallow(<SearchBar onSearchTermChange={mockVideoSearch}/>);
  expect(searchBar.find('input').props().value).toEqual('surfboards');
});

test('Should update SearchBar state term', () => {
  const mockVideoSearch = jest.fn()
  const searchBar = shallow(<SearchBar onSearchTermChange={mockVideoSearch}/>);
  searchBar.find('input').simulate('change', {target: {value: 'My new value'}});
  expect(searchBar.find('input').props().value).toEqual('My new value');
});

test('Should call videoSearch with term', () => {
  const mockVideoSearch = jest.fn()
  const searchBar = shallow(<SearchBar onSearchTermChange={mockVideoSearch}/>);  
  searchBar.find('input').simulate('change', {target: {value: 'My new value'}});
  expect(mockVideoSearch.mock.calls[1][0]).toBe('My new value');
});
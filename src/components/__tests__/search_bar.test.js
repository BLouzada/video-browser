import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from "../search_bar";

test('Searchbar with input', () => {
  
  const searchBar = shallow(<SearchBar />);

  expect(searchBar.text()).toEqual('');
});
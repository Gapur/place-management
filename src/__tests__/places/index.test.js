import React from 'react';
import PlacesScreen from '../../places';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<PlacesScreen />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

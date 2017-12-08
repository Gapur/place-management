import React from 'react';
import { shallow } from "enzyme";
import CustomTags from '../../stories/components/CustomTags';

describe('testing custom tags', () => {
  it('renders CustomTags is creating', () => {
    const changeTags = jest.fn();
    const customTagsTest = shallow(
      <CustomTags
        tags={['tags']}
        isCreating={true}
        onChange={changeTags}
        onUpdate={jest.fn()}
        onDelete={jest.fn()}
        onClick={jest.fn()}
      />
    );

    customTagsTest.find('input').simulate('change', { target: { value: 'Test' } });
    expect(changeUsernameSpy).toBeCalledWith('Test');
  });

  it('renders CustomTags is not creating', () => {
    const customTagsTest = shallow(
      <CustomTags
        tags={['tags']}
        isCreating={false}
        onChange={jest.fn()}
        onUpdate={jest.fn()}
        onDelete={jest.fn()}
        onClick={jest.fn()}
      />
    );
  });
});

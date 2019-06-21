import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import FilterButton from './FilterButton'

expect.addSnapshotSerializer(serializer)

test('renders with correct styles', () => {
  const tree = renderer.create(<FilterButton onClick={jest.fn()} />).toJSON()

  expect(tree).toMatchSnapshot()
})

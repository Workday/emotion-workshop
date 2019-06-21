/**
 * 1. Test the styled component props
 * 2. Change a style in FilterButton and make sure the snapshots fail
 * 3. Update snapshots
 * 4. Mock out the onClick
 */

import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import FilterButton from './FilterButton'

expect.addSnapshotSerializer(serializer)

test('renders with correct styles', () => {
  const tree = renderer.create(<FilterButton onClick={jest.fn()} />).toJSON()

  expect(tree).toMatchSnapshot()
})

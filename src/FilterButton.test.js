/**
 * 1. Install react-test-renderer and jest-emotion
 * 2. Test the styled component props
 * 3. Change a style in FilterButton and make sure the snapshots fail
 * 4. Update snapshots for reference: https://jestjs.io/docs/en/snapshot-testing
 */

import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import FilterButton from './FilterButton'

expect.addSnapshotSerializer(serializer)

test('renders a FilterButton', () => {
  const component = renderer
    .create(<FilterButton onClick={jest.fn()} />)
    .toJSON()

  expect(component).toMatchSnapshot()
})

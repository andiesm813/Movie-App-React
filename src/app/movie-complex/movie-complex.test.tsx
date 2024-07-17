import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MovieComplex from './movie-complex';
import 'element-internals-polyfill';

test('renders MovieComplex component', () => {
  const wrapper = render(<MovieComplex />);
  expect(wrapper).toBeTruthy();
});
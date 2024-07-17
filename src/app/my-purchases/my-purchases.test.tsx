import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import MyPurchases from './my-purchases';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders MyPurchases component', () => {
  const wrapper = render(<MyPurchases />);
  expect(wrapper).toBeTruthy();
});
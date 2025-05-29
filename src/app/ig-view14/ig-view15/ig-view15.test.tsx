import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView15 from './ig-view15';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView15 component', () => {
  const wrapper = render(<IgView15 />);
  expect(wrapper).toBeTruthy();
});
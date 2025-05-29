import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView11 from './ig-view11';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView11 component', () => {
  const wrapper = render(<IgView11 />);
  expect(wrapper).toBeTruthy();
});
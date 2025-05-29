import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView16 from './ig-view16';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView16 component', () => {
  const wrapper = render(<IgView16 />);
  expect(wrapper).toBeTruthy();
});
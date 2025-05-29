import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView7 from './ig-view7';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView7 component', () => {
  const wrapper = render(<IgView7 />);
  expect(wrapper).toBeTruthy();
});
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SM from './sm';
import 'element-internals-polyfill';

test('renders SM component', () => {
  const wrapper = render(<SM />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
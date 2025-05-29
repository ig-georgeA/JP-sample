import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SM1 from './sm1';
import 'element-internals-polyfill';

test('renders SM1 component', () => {
  const wrapper = render(<SM1 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView10 from './ig-view10';
import 'element-internals-polyfill';

test('renders IgView10 component', () => {
  const wrapper = render(<IgView10 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
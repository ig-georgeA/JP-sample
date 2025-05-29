import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView3 from './ig-view3';
import 'element-internals-polyfill';

test('renders IgView3 component', () => {
  const wrapper = render(<IgView3 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
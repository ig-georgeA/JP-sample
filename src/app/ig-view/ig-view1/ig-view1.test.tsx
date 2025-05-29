import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView1 from './ig-view1';
import 'element-internals-polyfill';

test('renders IgView1 component', () => {
  const wrapper = render(<IgView1 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
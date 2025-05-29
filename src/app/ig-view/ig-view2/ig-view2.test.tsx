import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView2 from './ig-view2';
import 'element-internals-polyfill';

test('renders IgView2 component', () => {
  const wrapper = render(<IgView2 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
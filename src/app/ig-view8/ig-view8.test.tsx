import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView8 from './ig-view8';
import 'element-internals-polyfill';

test('renders IgView8 component', () => {
  const wrapper = render(<IgView8 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView12 from './ig-view12';
import 'element-internals-polyfill';

test('renders IgView12 component', () => {
  const wrapper = render(<IgView12 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
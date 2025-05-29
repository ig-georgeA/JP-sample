import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView17 from './ig-view17';
import 'element-internals-polyfill';

test('renders IgView17 component', () => {
  const wrapper = render(<IgView17 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
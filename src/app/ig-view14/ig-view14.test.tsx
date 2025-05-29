import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView14 from './ig-view14';
import 'element-internals-polyfill';

test('renders IgView14 component', () => {
  const wrapper = render(<IgView14 />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
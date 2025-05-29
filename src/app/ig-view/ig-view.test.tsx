import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import IgView from './ig-view';
import 'element-internals-polyfill';

test('renders IgView component', () => {
  const wrapper = render(<IgView />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView5 from './ig-view5';
import 'element-internals-polyfill';

test('renders IgView5 component', () => {
  const wrapper = render(<IgView5 />);
  expect(wrapper).toBeTruthy();
});
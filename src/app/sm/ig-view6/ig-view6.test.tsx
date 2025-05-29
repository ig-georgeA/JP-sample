import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView6 from './ig-view6';
import 'element-internals-polyfill';

test('renders IgView6 component', () => {
  const wrapper = render(<IgView6 />);
  expect(wrapper).toBeTruthy();
});
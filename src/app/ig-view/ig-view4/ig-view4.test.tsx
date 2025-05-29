import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView4 from './ig-view4';
import 'element-internals-polyfill';

test('renders IgView4 component', () => {
  const wrapper = render(<IgView4 />);
  expect(wrapper).toBeTruthy();
});
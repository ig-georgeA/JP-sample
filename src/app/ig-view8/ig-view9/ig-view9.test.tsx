import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView9 from './ig-view9';
import 'element-internals-polyfill';

test('renders IgView9 component', () => {
  const wrapper = render(<IgView9 />);
  expect(wrapper).toBeTruthy();
});
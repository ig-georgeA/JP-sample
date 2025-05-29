import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import IgView13 from './ig-view13';
import 'element-internals-polyfill';

test('renders IgView13 component', () => {
  const wrapper = render(<IgView13 />);
  expect(wrapper).toBeTruthy();
});
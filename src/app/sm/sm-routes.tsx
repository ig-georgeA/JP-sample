import { redirect } from 'react-router-dom';
import IgView6 from './ig-view6/ig-view6';

export const routes = [
  { index: true, loader: () => redirect('ig-view6') },
  { path: 'ig-view6', element: <IgView6 />, text: 'Ig View6' }
];

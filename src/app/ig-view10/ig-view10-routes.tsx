import { redirect } from 'react-router-dom';
import IgView11 from './ig-view11/ig-view11';

export const routes = [
  { index: true, loader: () => redirect('ig-view11') },
  { path: 'ig-view11', element: <IgView11 />, text: 'Ig View11' }
];

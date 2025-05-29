import { redirect } from 'react-router-dom';
import IgView15 from './ig-view15/ig-view15';
import IgView16 from './ig-view16/ig-view16';

export const routes = [
  { index: true, loader: () => redirect('ig-view15') },
  { path: 'ig-view15', element: <IgView15 />, text: 'Ig View15' },
  { path: 'ig-view16', element: <IgView16 />, text: 'Ig View16' }
];

import { redirect } from 'react-router-dom';
import IgView13 from './ig-view13/ig-view13';

export const routes = [
  { index: true, loader: () => redirect('ig-view13') },
  { path: 'ig-view13', element: <IgView13 />, text: 'Ig View13' }
];

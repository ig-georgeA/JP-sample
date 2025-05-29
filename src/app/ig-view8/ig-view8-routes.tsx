import { redirect } from 'react-router-dom';
import IgView9 from './ig-view9/ig-view9';

export const routes = [
  { index: true, loader: () => redirect('ig-view9') },
  { path: 'ig-view9', element: <IgView9 />, text: 'Ig View9' }
];

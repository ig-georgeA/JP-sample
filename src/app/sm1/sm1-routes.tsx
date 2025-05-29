import { redirect } from 'react-router-dom';
import IgView7 from './ig-view7/ig-view7';

export const routes = [
  { index: true, loader: () => redirect('ig-view7') },
  { path: 'ig-view7', element: <IgView7 />, text: 'Ig View7' }
];

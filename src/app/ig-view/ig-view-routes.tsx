import { redirect } from 'react-router-dom';
import IgView1 from './ig-view1/ig-view1';
import IgView2 from './ig-view2/ig-view2';
import IgView3 from './ig-view3/ig-view3';
import IgView4 from './ig-view4/ig-view4';
import IgView5 from './ig-view5/ig-view5';

export const routes = [
  { index: true, loader: () => redirect('ig-view1') },
  { path: 'ig-view1', element: <IgView1 />, text: 'Ig View1' },
  { path: 'ig-view2', element: <IgView2 />, text: 'Ig View2' },
  { path: 'ig-view3', element: <IgView3 />, text: 'Ig View3' },
  { path: 'ig-view4', element: <IgView4 />, text: 'Ig View4' },
  { path: 'ig-view5', element: <IgView5 />, text: 'Ig View5' }
];

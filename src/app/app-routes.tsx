import { redirect } from 'react-router-dom';
import IgView from './ig-view/ig-view';
import { routes as igViewRoute } from './ig-view/ig-view-routes';
import SM from './sm/sm';
import { routes as sMRoute } from './sm/sm-routes';
import SM1 from './sm1/sm1';
import { routes as sM1Route } from './sm1/sm1-routes';
import IgView8 from './ig-view8/ig-view8';
import { routes as igView8Route } from './ig-view8/ig-view8-routes';
import IgView10 from './ig-view10/ig-view10';
import { routes as igView10Route } from './ig-view10/ig-view10-routes';
import IgView12 from './ig-view12/ig-view12';
import { routes as igView12Route } from './ig-view12/ig-view12-routes';
import IgView14 from './ig-view14/ig-view14';
import { routes as igView14Route } from './ig-view14/ig-view14-routes';
import IgView17 from './ig-view17/ig-view17';

export const routes = [
  { index: true, loader: () => redirect('ig-view') },
  { path: 'ig-view', element: <IgView />, text: 'Ig View', children: igViewRoute },
  { path: 'sm', element: <SM />, text: 'SM', children: sMRoute },
  { path: 'sm1', element: <SM1 />, text: 'SM1', children: sM1Route },
  { path: 'ig-view8', element: <IgView8 />, text: 'Ig View8', children: igView8Route },
  { path: 'ig-view10', element: <IgView10 />, text: 'Ig View10', children: igView10Route },
  { path: 'ig-view12', element: <IgView12 />, text: 'Ig View12', children: igView12Route },
  { path: 'ig-view14', element: <IgView14 />, text: 'Ig View14', children: igView14Route },
  { path: 'ig-view17', element: <IgView17 />, text: 'Ig View17' }
];

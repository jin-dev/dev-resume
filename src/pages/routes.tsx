import * as React from 'react';
import Loadable from 'react-loadable';
import PageLoading from '../components/PageLoading';
import { BASE_PATH as basePath, PATH as path, VIEW_TYPE as viewType } from './constant';

export const BASE_PATH = basePath;
export const PATH = path;
export const VIEW_TYPE = viewType;

export interface RouteConfig {
    component: React.ComponentType<any>;
    id: number;
    path: string;
    exact?: boolean;
    routes?: RouteConfig[];
    public?: boolean;
    private?: boolean;
}

const routes: () => RouteConfig[] = () => [
    {
        id: 1,
        path: PATH.DEFAULT,
        exact: true,
        public: true,
        component: Loadable({
          loader: async () => {
            return import(/* webpackChunkName: "Main" */ './www/Test');
          },
          loading: () => <PageLoading />,
        }),
      },
]

export default routes;
import * as React from 'react';
import Loadable from 'react-loadable';
import store from '~/redux/configureStore';
import checkVersion from '~/utils/checkVersion';
import PageLoading from '~/components/PageLoading';
import { BASE_PATH as basePath, PATH as path, VIEW_TYPE as viewType } from '~/pages/constant';

export const BASE_PATH = basePath;
export const PATH = path;
export const VIEW_TYPE = viewType;

export interface RouteConfig {
  component: React.ComponentType<any>;
  id: number;
  path: string;
  exact?: boolean;
  routes?: RouteConfig[];
  public?: boolean; // 로그인안한 user(guest) 접근 가능
  private?: boolean; // 로그인한 user만 접근 가능
}

const routes: () => RouteConfig[] = () => [
  {
    id: 1,
    path: PATH.DEFAULT,
    exact: true,
    public: true,
    component: Loadable({
      loader: async () => {
        await checkVersion();
        const { config } = store.getState();
        if (config.viewType === VIEW_TYPE.MOBILE) {
          return import(/* webpackChunkName: "Main" */ './mobile/Test');
        }
        return import(/* webpackChunkName: "Main" */ './mobile/Test');
      },
      loading: () => <PageLoading />,
    }),
  },
  {
    id: 2,
    path: PATH.NOT_FOUND,
    exact: true,
    public: true,
    component: Loadable({
      loader: async () => {
        await checkVersion();
        const { config } = store.getState();
        if (config.viewType === VIEW_TYPE.MOBILE) {
          return import(/* webpackChunkName: "NotFound" */ './mobile/NotFound');
        }
        return import(/* webpackChunkName: "NotFound" */ './www/NotFound');
      },
      loading: () => <PageLoading />,
    }),
  },
  {
    id: 3,
    path: PATH.TEST_PAGE,
    exact: true,
    public: true,
    component: Loadable({
      loader: async () => {
        await checkVersion();
        const { config } = store.getState();
        if (config.viewType === VIEW_TYPE.MOBILE) {
          return import(/* webpackChunkName: "Test" */ './www/Test');
        }
        return import(/* webpackChunkName: "Test" */ './www/Test');
      },
      loading: () => <PageLoading />,
    }),
  },
  {
    id: 4,
    path: PATH.TEST2_PAGE,
    exact: true,
    public: true,
    component: Loadable({
      loader: async () => {
        await checkVersion();
        const { config } = store.getState();
        if (config.viewType === VIEW_TYPE.MOBILE) {
          return import(/* webpackChunkName: "Test2" */ './www/Test2');
        }
        return import(/* webpackChunkName: "Test2" */ './www/Test2');
      },
      loading: () => <PageLoading />,
    }),
  },
];

export default routes;

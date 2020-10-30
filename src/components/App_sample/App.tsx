import * as React from 'react';
import { ToastContainer, cssTransition } from 'react-toastify';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes, { PATH, RouteConfig } from '../../pages/routes';


export interface AppProps {
  isLoggedIn: boolean;
  pathname: string;
  location: any;
  locationKey: string;
  lastLocation: any;
}
interface SubRouteProps extends RouteConfig {
  isLoggedIn: boolean;
  pathname: string;
  location: any;
  locationKey: string;
  lastLocation: any;
}

const Flip = cssTransition({
  enter: `Toastify__flip-enter`,
  exit: `Toastify__flip-exit`,
  duration: 400,
});

const RouteWithSubRoutes = (route: SubRouteProps) => {
  const render = (props: any) => {
    if (route.private && route.isLoggedIn) {
      return <route.component {...props} routes={route.routes} {...route} />;
    }
    // if (route.public) {
    return <route.component {...props} routes={route.routes} {...route} />;
    // }
  };
  // return <route.component routes={route.routes} {...route} />;
  return <Route path={route.path} render={render} />;
};

const App = (props: AppProps) => (
  <section>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes().map((route: RouteConfig) => (
          <RouteWithSubRoutes key={route.id} {...route} {...props} />
        ))}
        <Route
          render={() => {
            document.location.href = PATH.NOT_FOUND;
            return <Redirect to={{ pathname: PATH.NOT_FOUND }} />;
          }}
        />
      </Switch>
    </React.Suspense>
    <ToastContainer autoClose={2400} hideProgressBar closeButton={false} transition={Flip} pauseOnHover />
  </section>
);

export default App;

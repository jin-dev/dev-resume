import * as React from 'react';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import toast from '~/utils/toast';
import { pageView } from '~/utils/ga';
import App from './App';

const trimSlash = (str = ''): string => `${str}`.replace(/^\/+/g, '/').replace(/(.+)\/$/g, '$1');

interface Props {
  pathname: string;
  location: any;
  locationKey: string;
  lastLocation: any;
  isLoggedIn: boolean;
  viewLanguage: string;
}

interface State {}

class AppContainer extends React.Component<Props, State> {
  public componentDidMount() {
    // setTimeout(() => this.openDialog(), 800);
  }

  public componentDidUpdate() {
    const { lastLocation, pathname } = this.props;
    if (lastLocation && lastLocation.pathname !== pathname) {
      toast.clear();
     
      pageView(pathname);
    }
  }

  public shouldComponentUpdate(nextProps: Props) {
  
    pageView(nextProps.pathname, nextProps.location?.search);
    return false;
  }

  public async openDialog() {
    
  }

  public render() {
    const css: any = document.getElementById('languageCss');
    if (css) {
      css.href = `/css/main/${this.props.viewLanguage}.css`;
    }

    return <App {...this.props} {...this.state} />;
  }
}

const mapToStateToProps = (state: any) => ({
  isLoggedIn: state.user.isLoggedIn,
  locationKey: state.router.location.key,
  pathname: trimSlash(state.router.location.pathname),
  viewLanguage: state.config.viewLanguage,
});

export default withLastLocation(connect(mapToStateToProps)(AppContainer));

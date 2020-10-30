import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { WithTranslation, withTranslation } from 'react-i18next';
import { PATH } from '~/pages/routes';
import nl2br from '~/utils/nl2br';

export enum PAGE_TYPE {
  GUEST = 'guest',
  LOGGED_USER = 'user',
  COMPLETE = 'complete',
}

interface Props extends WithTranslation {
  pageType: PAGE_TYPE;
  afterComplete: () => void;
}

const NotFound = (props: Props) => (
  <>
    <Helmet>
      <title>{props.t('error.pageNotFound')}</title>
    </Helmet>
    {/* <Header /> */}
    <section>
      <div role="main">
        <div>
          <h2>{props.t('error.pageNotFound')}</h2>
          <p>{nl2br(props.t('error.pageNotFound.description'))}</p>
          <Link to={PATH.DEFAULT}>{props.t('common.goMain')}</Link>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
);

export default withTranslation()(React.memo(NotFound));

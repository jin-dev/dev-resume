/* eslint-disable import/no-unresolved */
import * as React from 'react';

const PageLoading = () => (
  <div className="article-dim">
    <div className="loading">
      <img src="/img/www/common/web_loading.gif" alt="" />
    </div>
    <div className="dim-bg" />
  </div>
);

export default React.memo(PageLoading);

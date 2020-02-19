import React from 'react';

import UserInfo from './UserInfo';
import RepoInfo from './RepoInfo';

const PageView = props => (
  <div className="row">
    <div className="col-md-6">
      <UserInfo user={props.user} />
    </div>
    <div className="col-md-6">
      <RepoInfo repos={props.repos} />
    </div>
  </div>
);

export default PageView;

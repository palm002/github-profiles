import React from 'react';

import UserInfo from './UserInfo';
import RepoInfo from './RepoInfo';

const PageView = props => (
  <div className="row justify-content-around mx-auto my-3">
    <div className="col-md-3">
      <UserInfo user={props.user} />
    </div>
    <div className="col-md-6">
      <RepoInfo repos={props.repos} />
    </div>
  </div>
);

export default PageView;

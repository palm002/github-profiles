import React from 'react';

import UserInfo from './UserInfo';
import RepoInfo from './RepoInfo';

const PageView = props => (
  <div className="row justify-content-around mx-auto my-3">
    <div className="col-sm-3 col-md-3">
      <UserInfo user={props.user} />
    </div>
    <div className="row-col-sm-6 col-md-6">
      <RepoInfo repos={props.repos} />
    </div>
  </div>
);

export default PageView;

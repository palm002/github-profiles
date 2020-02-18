import React from 'react';

import UserInfo from './UserInfo';
import RepoInfo from './RepoInfo';

const PageView = props => (
  <div className="">
    <UserInfo user={props.user} />
    <RepoInfo repos={props.repos} />
  </div>
);

export default PageView;

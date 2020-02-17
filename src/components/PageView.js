import React from 'react';

import UserInfo from './UserInfo'

const PageView = (props) => (
  <div className="">
    <UserInfo user={props.user} />
  </div>
);

export default PageView;
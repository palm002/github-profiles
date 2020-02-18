import React from 'react';

const UserInfo = props => {
    console.log(props.user)
  const { avatar_url, login, followers, public_repos } = props.user;

  return (
    <div className="">
      <img style={{ height: `250px` }} src={avatar_url} alt="" />
      <h6>{login}</h6>
      <p>{followers && <> {followers} Followers </>}</p>
      <p>{public_repos && <> {public_repos} Repositories </>} </p>
    </div>
  );
};

export default UserInfo;

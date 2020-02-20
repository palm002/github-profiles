import React from 'react';

const UserInfo = props => {
  const { avatar_url, login, name, followers, public_repos } = props.user;

  // TODO: add borders/background colors
  return (
    <div className="profile">
      <div style={{ textAlign: `center` }}>
        <img
          className="img-fluid shadow-sm my-1"
          src={avatar_url}
          alt=""
        />
        <h6 className="py-2">{name}</h6>
      </div>
    
      <div className="row justify-content-around">
        <p className="px-1 py-1">{login}</p>
        <p className="px-1 py-1">{followers && <> {followers} Followers </>}</p>
        <p className="px-1 py-1">{public_repos && <> {public_repos} Repositories </>} </p>
      </div>
    </div>
  );
};

export default UserInfo;

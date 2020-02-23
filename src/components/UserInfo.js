import React from 'react';

const UserInfo = props => {
  const { avatar_url, name, followers, public_repos } = props.user;

  // TODO: handle 0 followers and repos
  
  return (
    <div className="profile">
      <div style={{ textAlign: `center` }}>
        <img
          className="img-fluid shadow-sm rounded-lg border border-dark"
          src={avatar_url}
          alt=""
        />
        <h5 className="py-2 text-white">{name}</h5>
      </div>

      <div className="row justify-content-around">
        <p className="px-1 py-1">{followers && <> {followers} Followers </>}</p>
        <p className="px-1 py-1">
          {public_repos && <> {public_repos} Repositories </>}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;

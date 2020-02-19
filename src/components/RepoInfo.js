import React from 'react';

const RepoInfo = props => {
  // TODO: add styling

  // get the list, iterate over it, do calculations and sort by highest num.
  // if there is 0 stars and forks, get top 4 repos alphabetically
  const repositories = props.repos;

  const renderTopFourRepos = data => {
    const sortedData = [...data].sort(
      (a, b) =>
        b.forks_count +
        b.stargazers_count -
        (a.forks_count + a.stargazers_count)
    );
    return sortedData.slice(0, 4);
  };

  const repos = renderTopFourRepos(repositories).map(repo => {
    return (
      <div className="" key={repo.id}>
        <h6 className="" style={{ textAlign: `center` }}>{repo.name}</h6>
        <p className="">{repo.description}</p>
        <div className="row" >
          <div className="col-md-6">
            <ion-icon name="git-branch-outline"></ion-icon>
            <p className="">{repo.forks_count}</p>
          </div>
          <div className="col-md-6">
            <ion-icon name="star"></ion-icon>
            <p className="">{repo.stargazers_count}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="" style={{ textAlign: `left` }}>
      {repos}
    </div>
  );
};

export default RepoInfo;

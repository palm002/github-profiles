import React from 'react';
import { sortTopFourRepos } from '../util/sortTopFourRepos';

const RepoInfo = props => {
  // TODO: handle user with 0 repos

  // get the list, iterate over it, do calculations and sort by highest num.
  // if there is 0 stars and forks, get top 4 repos alphabetically
  const repos = props.repos;


  const renderTopFourRepos = sortTopFourRepos(repos).map(repo => {
    return (
      <div
        className="rounded-lg border border-dark shadow-sm col-sm-4 col-md-6"
        key={repo.id}
        style={{ backgroundColor: '#E0D0C1' }}
      >
        <h6 className="pt-2">{<a href={repo.html_url} target="_blank"
          rel="noopener noreferrer">{repo.full_name}</a>}</h6>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <ion-icon name="git-branch-outline"></ion-icon>
            <p className="">{repo.forks_count}</p>
          </div>
          <div className="col-sm-3 col-md-3">
            <ion-icon name="star"></ion-icon>
            <p className="">{repo.stargazers_count}</p>
          </div>
        </div>
        <p className="">{repo.description || <> (no description) </>}</p>
      </div>
    );
  });

  return (
    <div className="row justify-content-center" style={{ textAlign: `center` }}>
      {renderTopFourRepos}
    </div>
  );
};

export default RepoInfo;

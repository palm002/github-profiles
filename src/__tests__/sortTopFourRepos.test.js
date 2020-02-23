import { sortTopFourRepos } from '../util/sortTopFourRepos';

describe('sortTopFourRepos', () => {
  describe('given an empty array', () => {
    it('has a size of 0', () => {
      expect(sortTopFourRepos([])).toHaveLength(0);
    });
  });
});

const testRepos = [
  {
    id: 132935648,
    name: 'boysenberry-repo-1',
    full_name: 'octocat/boysenberry-repo-1',
    html_url: 'https://github.com/octocat/boysenberry-repo-1',
    description: 'Testing',
    stargazers_count: 3,
    forks_count: 5
  },
  {
    id: 18221276,
    name: 'git-consortium',
    full_name: 'octocat/git-consortium',
    html_url: 'https://github.com/octocat/git-consortium',
    description: 'This repo is for demonstration purposes only.',
    stargazers_count: 10,
    forks_count: 38
  },
  {
    id: 20978623,
    name: 'hello-worId',
    full_name: 'octocat/hello-worId',
    html_url: 'https://github.com/octocat/hello-worId',
    description: 'My first repository on GitHub.',
    stargazers_count: 18,
    forks_count: 54
  },
  {
    id: 1296269,
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'My first repository on GitHub!',
    stargazers_count: 1530,
    forks_count: 1405
  },
  {
    id: 64778136,
    name: 'linguist',
    full_name: 'octocat/linguist',
    html_url: 'https://github.com/octocat/linguist',
    description:
      "Language Savant. If your repository's language is being reported incorrectly, send us a pull request!",
    stargazers_count: 22,
    forks_count: 76
  },
  {
    id: 17881631,
    name: 'octocat.github.io',
    full_name: 'octocat/octocat.github.io',
    html_url: 'https://github.com/octocat/octocat.github.io',
    description: null,
    stargazers_count: 29,
    forks_count: 77
  },
  {
    id: 1300192,
    name: 'Spoon-Knife',
    full_name: 'octocat/Spoon-Knife',
    html_url: 'https://github.com/octocat/Spoon-Knife',
    description: 'This repo is for demonstration purposes only.',
    stargazers_count: 10200,
    forks_count: 108476
  },
  {
    id: 56271164,
    name: 'test-repo1',
    full_name: 'octocat/test-repo1',
    html_url: 'https://github.com/octocat/test-repo1',
    description: null,
    stargazers_count: 2,
    forks_count: 4
  }
];

const resultAfterSorting = [
  {
    id: 1300192,
    name: 'Spoon-Knife',
    full_name: 'octocat/Spoon-Knife',
    html_url: 'https://github.com/octocat/Spoon-Knife',
    description: 'This repo is for demonstration purposes only.',
    stargazers_count: 10200,
    forks_count: 108476
  },
  {
    id: 1296269,
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'My first repository on GitHub!',
    stargazers_count: 1530,
    forks_count: 1405
  },
  {
    id: 17881631,
    name: 'octocat.github.io',
    full_name: 'octocat/octocat.github.io',
    html_url: 'https://github.com/octocat/octocat.github.io',
    description: null,
    stargazers_count: 29,
    forks_count: 77
  },
  {
    id: 64778136,
    name: 'linguist',
    full_name: 'octocat/linguist',
    html_url: 'https://github.com/octocat/linguist',
    description:
      "Language Savant. If your repository's language is being reported incorrectly, send us a pull request!",
    stargazers_count: 22,
    forks_count: 76
  }
];

describe('callSortRepoFunction', () => {
  test('call the sort repos function', () => {
    const sortRepos = jest.fn();
    sortRepos(testRepos);
    expect(sortRepos).toHaveBeenCalled();
  });
});

describe('given an array of repositories', () => {
  it('returns 4 objects after sorting', () => {
    const sortRepos = jest.fn(sortTopFourRepos(testRepos));
    expect(sortRepos).toHaveLength(4);
  });
  it('sorts repositories by most stars and forks to least stars and forks', () => {
    expect(sortTopFourRepos(testRepos)).toEqual(resultAfterSorting);
  });
});

export const sortTopFourRepos = data => {
    const sortedData = [...data].sort(
        (a, b) =>
            b.forks_count +
            b.stargazers_count -
            (a.forks_count + a.stargazers_count)
    );
    return sortedData.slice(0, 4);
};

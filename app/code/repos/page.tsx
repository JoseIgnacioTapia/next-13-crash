import { Repository } from '@/APITypes/types';

async function fetchRepos(): Promise<Repository[]> {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos'
  );
  const repos = await response.json();

  return repos;
}

async function ReposPage(): Promise<JSX.Element> {
  const repos = await fetchRepos();
  console.log(repos);

  return <div>{repos[0].name}</div>;
}

export default ReposPage;

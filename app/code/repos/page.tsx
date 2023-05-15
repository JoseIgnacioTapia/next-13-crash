import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
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

  return (
    <div className="repos-container">
      <h2>Repositorios</h2>
      <ul className="repo-list">
        {repos.map((repo: Repository) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposPage;

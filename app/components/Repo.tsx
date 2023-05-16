'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { Repository } from '@/APITypes/types';
import LoadingPage from '../loading';

async function fetchRepo(name: string): Promise<Repository> {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  const repo = await response.json();

  return repo;
}

type RepoProps = {
  name: string;
};

function Repo({ name }: RepoProps): JSX.Element {
  const [repo, setRepo] = useState<Repository | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const repoData = await fetchRepo(name);
        console.log(repo);
        setRepo(repoData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [name]);

  if (!repo) {
    return <LoadingPage />;
  }

  return (
    <>
      <h2>{repo?.name}</h2>
      <p>{repo?.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo?.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo?.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo?.watchers_count}</span>
        </div>
      </div>
    </>
  );
}

export default Repo;

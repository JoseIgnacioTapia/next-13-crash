'use client';
import { useEffect, useState } from 'react';
import { RootObject } from '@/APITypes/types';
import Link from 'next/link';

async function fetchRepoContents(name: string): Promise<RootObject[]> {
  await new Promise(resolve => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

type ContentRepoProps = {
  name: string;
};

function RepoDirs({ name }: ContentRepoProps): JSX.Element {
  const [contents, setContents] = useState<RootObject[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const contentsData = await fetchRepoContents(name);
        console.log(contentsData);
        setContents(contentsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [name]);

  const dirs = contents?.filter(content => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs?.map(dir => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;

import React, { lazy, Suspense } from 'react';
import Repo from '@/app/components/Repo';

type RepoPageProps = {
  params: {
    name: string;
  };
};

function RepoPage({ params: { name } }: RepoPageProps): JSX.Element {
  console.log(name);

  return (
    <div className="card">
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;

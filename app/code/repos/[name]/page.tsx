type RepoPageProps = {
  params: {
    name: string;
  };
};

function RepoPage({ params: { name } }: RepoPageProps): JSX.Element {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Repo Details</p>
    </div>
  );
}

export default RepoPage;

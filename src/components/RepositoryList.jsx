import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "clone-olx",
  description: "Olx in React",
  link: "https://github.com/Misaelduarte/clone-olx" 
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
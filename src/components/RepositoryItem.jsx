export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href="https://github.com/Misaelduarte/clone-olx" target="_blank">
      {props.repository.link}
      </a>
    </li>
  )
}
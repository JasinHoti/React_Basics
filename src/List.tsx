
type Props = {
  Text: string;
}

export default function List({ Text }: Props) {
  return (
    <div>
      <ul>
        <li>{Text}</li>
        <li>{Text}</li>
        <li>{Text}</li>
        <li>{Text}</li>
      </ul>
    </div>
  )
}
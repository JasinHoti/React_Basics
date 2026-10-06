
type Props = {
  label: string;
  url: string;
};

export default function Button({ label, url }: Props) {
  function handleClick() {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
}
import Styles from "./card.module.css";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className={Styles.Card}>
      <h2>Kinan</h2>
      <img
        src="https://picsum.photos/200/300"
        alt="hero"
      />
    </div>
  );
}

import Styles from "./card.module.css";

type Props = {
  Title: string;
  Text: string;
  img: string;
};

export default function Card({ Title, Text, img }: Props) {
  return (
    <div className={Styles.Card}>
      <h2>{Title}</h2>
      <p>{Text}</p>
      <img
        src={img}
        alt="hero"
      />
    </div>
  );
}

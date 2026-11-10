import Styles from "./card.module.css";

type Props = {
  Title: string;
  Text: string;
  img: string;
};

export default function Card({ Title, Text, img }: Props) {
  const Rrandom = Math.floor(Math.random() * 1000);
  return (
    <div className={Styles.Card}>
      <h2>{Title}</h2>
      <p>{Text}</p>
      <p>{Rrandom}</p>
      <img
        src={img + '?' + Rrandom}
        alt="hero"
      />
    </div>
  );
}

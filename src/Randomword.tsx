export default function Randomword() {
  const words = [
    "Apfel",
    "Baum",
    "Haus",
    "Wasser",
    "Sonne",
    "Mond",
    "Buch",
    "Tisch",
    "Stuhl",
    "Fenster",
    "Katze",
    "Hund",
    "Vogel",
    "Blume",
    "Wiese",
    "Berg",
    "Fluss",
    "Meer",
    "Wolke",
    "Regen",
    "Schnee",
    "Wind",
    "Feuer",
    "Erde",
    "Stern",
    "Schule",
    "Freund",
    "Musik",
    "Fahrrad",
    "Computer",
  ];
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];

  return (
    <div>{word}</div>
  );
}
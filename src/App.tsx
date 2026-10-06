import "./App.css";
import Button from "./button";
import Card from "./card";
import List from "./List";

// ALT Shift O (organize import)
// ALT Shift F (format)

function App() {
  return (
    <>
      <div>
        <h1>Youtube Videos</h1>
        <div className="Cardconteiner">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="ButtonContainer">
          <Button label="YouTube" url="https://www.youtube.com" />
          <Button label="Wikipedia" url="https://www.wikipedia.org" />
          <Button label="Google" url="https://www.google.com" />
          <Button label="React-Doku" url="https://react.dev" />
        </div>
        <div className="ListContainer">
          <List />
          <List />
          <List />
          <List />

        </div>
      </div>
    </>
  );
}

export default App;
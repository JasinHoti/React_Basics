import Button from "./Button";
import Card from "./Card";
import List from "./List";
import Syles from "./App.module.css";
// ALT Shift O (organize import)
// ALT Shift F (format)

function App() {
  return (
    <>
      <div>
        <h1 className={Syles.h1}>Youtube Videos</h1>
        <div className={Syles.Cardcontainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className= {Syles.ButtonContainer}>
          <Button label="YouTube" url="https://www.youtube.com" />
          <Button label="Wikipedia" url="https://www.wikipedia.org" />
          <Button label="Google" url="https://www.google.com" />
          <Button label="React-Doku" url="https://react.dev" />
        </div>
        <div className= {Syles.ListContainer}>
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